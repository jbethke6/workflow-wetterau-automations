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
  const wsRef = useRef<WebSocket | null>(null);

  // Proaktive Begrüßung nach 10 Sekunden
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasGreeted && !isOpen) {
        setIsOpen(true);
        setHasGreeted(true);
        setMessages([{
          id: 1,
          text: "Hallo! Ich bin der Yami-AI Assistent. Ich kann Ihnen bei Fragen zu Shop-Automatisierung helfen oder direkt einen Termin für Sie buchen. Wie kann ich Ihnen helfen?",
          sender: "bot",
          timestamp: new Date()
        }]);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [hasGreeted, isOpen]);

  // n8n WebSocket Connection
  useEffect(() => {
    if (isOpen && !wsRef.current) {
      // TODO: Replace with your n8n webhook URL
      // wsRef.current = new WebSocket('wss://your-n8n-instance.com/webhook/chat');
      
      // For now, we'll use a mock connection
      console.log('Chatbot ready - connect to n8n webhook here');
    }

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // TODO: Send to n8n webhook
    // For now, simple mock responses
    setTimeout(() => {
      let botResponse = "";
      const input = inputMessage.toLowerCase();
      
      if (input.includes("termin") || input.includes("beratung") || input.includes("buchen")) {
        botResponse = "Gerne! Welches Datum würde Ihnen passen? Ich zeige Ihnen gleich meine verfügbaren Zeiten an.";
      } else if (input.includes("preis") || input.includes("kosten")) {
        botResponse = "Ich erstelle individuelle Angebote basierend auf Ihren Anforderungen. Möchten Sie einen kurzen Termin vereinbaren, damit ich Ihre Bedürfnisse besser verstehe?";
      } else if (input.includes("automatisierung") || input.includes("workflow")) {
        botResponse = "Ich biete verschiedene Automatisierungen an: Warenkorb-Recovery, Bestands-Synchronisierung, KI-Chatbots und mehr. Welcher Bereich interessiert Sie am meisten?";
      } else {
        botResponse = "Das ist eine interessante Frage. Lassen Sie uns das in einem kurzen Gespräch klären. Soll ich einen Termin für Sie buchen?";
      }

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!hasGreeted) {
      setHasGreeted(true);
      setMessages([{
        id: 1,
        text: "Hallo! Ich bin der Yami-AI Assistent. Wie kann ich Ihnen helfen?",
        sender: "bot",
        timestamp: new Date()
      }]);
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
                    <h4 className="font-semibold text-base">Yami-AI Assistent</h4>
                    <div className="flex items-center text-xs text-orange-100">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                      Online
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
                    <p className="text-sm">{message.text}</p>
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
            </div>

            {/* Input Area */}
            <div className="p-4 border-t bg-white">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ihre Nachricht..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-orange-700 hover:bg-orange-800"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Powered by n8n & KI
              </p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatbotAssistant;
