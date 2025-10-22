import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from 'lucide-react';

const ChatbotAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [messages, setMessages] = useState<Array<{id: number; text: string; sender: string; timestamp: Date}>>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // n8n Webhook URL
  const N8N_WEBHOOK_URL = 'https://n8n.srv1004859.hstgr.cloud/webhook/chat-message';

  // Scrollt immer zur neuesten Nachricht
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Proaktive Begrüßung nach 10 Sekunden
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasGreeted && !isOpen) {
        setIsOpen(true);
        setHasGreeted(true);
        // Starte mit n8n Begrüßung
        handleWelcomeMessage();
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasGreeted, isOpen]);

  const handleWelcomeMessage = async () => {
    try {
      const response = await fetch('https://n8n.srv1004859.hstgr.cloud/webhook/chat-welcome', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      
      if (data.success) {
        setSessionId(data.sessionId);
        setMessages([{
          id: 1,
          text: data.message,
          sender: "bot",
          timestamp: new Date()
        }]);
      }
    } catch (error) {
      console.error('Fehler beim Begrüßungs-Webhook:', error);
      // Fallback lokale Begrüßung
      setMessages([{
        id: 1,
        text: "Hallo! Ich bin der Yami-Al Assistant. Ich kann Ihnen bei Fragen zu Shop-Automatisierung helfen oder direkt einen Termin für Sie buchen. Wie kann ich Ihnen helfen?",
        sender: "bot",
        timestamp: new Date()
      }]);
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Benutzer-Nachricht hinzufügen
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      // Nachricht an n8n senden
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputMessage,
          sessionId: sessionId || `session_${Date.now()}`,
          history: messages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text
          }))
        })
      });

      const data = await response.json();

      if (data.success) {
        // Session ID speichern falls neu
        if (data.sessionId && !sessionId) {
          setSessionId(data.sessionId);
        }

        // Bot-Antwort hinzufügen
        const botMessage = {
          id: messages.length + 2,
          text: data.message,
          sender: "bot",
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);

        // Terminbuchung automatisch öffnen falls benötigt
        if (data.availableSlots && data.availableSlots.length > 0) {
          setTimeout(() => {
            const bookingSection = document.getElementById('booking');
            if (bookingSection) {
              bookingSection.scrollIntoView({ behavior: 'smooth' });
            }
          }, 500);
        }
      } else {
        throw new Error('n8n Response war nicht erfolgreich');
      }

    } catch (error) {
      console.error('Fehler mit n8n:', error);
      // Fallback: Lokale Antwort
      const botMessage = {
        id: messages.length + 2,
        text: "Entschuldigung, der KI-Assistent ist gerade nicht erreichbar. Bitte versuchen Sie es später noch einmal oder kontaktieren Sie uns direkt.",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      setHasGreeted(true);
      handleWelcomeMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <Button
          onClick={toggleChat}
          className="bg-orange-700 hover:bg-orange-800 text-white rounded-full w-14 h-14 md:w-16 md:h-16 shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 md:bottom-28 right-4 md:right-6 z-50 w-80 md:w-96 max-w-[90vw]">
          <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-orange-700 to-orange-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base">Yami-Al Assistant</h4>
                    <div className="flex items-center text-xs text-orange-100">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                      KI-Powered
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-80 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-orange-700 text-white'
                        : 'bg-white text-gray-800 shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <span className="text-xs opacity-70 block mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 shadow-sm rounded-lg p-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t bg-white">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ihre Nachricht..."
                  onKeyPress={handleKeyPress}
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  size="sm"
                  className="bg-orange-700 hover:bg-orange-800 disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Powered by n8n & Claude AI
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatbotAssistant;