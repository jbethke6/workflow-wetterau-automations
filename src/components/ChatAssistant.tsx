
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Phone, Clock, Calendar } from 'lucide-react';
import CalendlyBooking from './CalendlyBooking';

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hallo! Ich bin Ihr digitaler Assistent. Wie kann ich Ihnen bei der Automatisierung Ihrer Geschäftsprozesse helfen?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickActions = [
    "Kostenlose Beratung vereinbaren",
    "Preise anzeigen",
    "Erfolgsgeschichten",
    "Wie funktioniert es?"
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputMessage("");

    if (inputMessage.toLowerCase().includes("beratung") || 
        inputMessage.toLowerCase().includes("termin") ||
        inputMessage === "Kostenlose Beratung vereinbaren") {
      
      setTimeout(() => {
        const botMessage = {
          id: messages.length + 2,
          text: "Perfekt! Ich öffne direkt unser Buchungssystem für Sie. Dort können Sie Ihren Wunschtermin für die kostenlose Prozessanalyse auswählen.",
          sender: "bot",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        
        setTimeout(() => {
          setIsCalendlyOpen(true);
        }, 1000);
      }, 1000);
      return;
    }

    setTimeout(() => {
      let botResponse = "";
      if (inputMessage.toLowerCase().includes("preis") || inputMessage.toLowerCase().includes("kosten")) {
        botResponse = "Gerne zeige ich Ihnen unsere transparenten Preismodelle! Wir bieten vier verschiedene Pakete von 299€ bis zum individuellen Enterprise-Paket. Soll ich Sie direkt zur Preisübersicht weiterleiten?";
      } else if (inputMessage.toLowerCase().includes("zeit") || inputMessage.toLowerCase().includes("stunden")) {
        botResponse = "Unsere Kunden sparen durchschnittlich 10 Stunden pro Woche durch unsere Automatisierungslösungen. Das entspricht über 500 Stunden im Jahr - Zeit, die Sie in Ihr Kerngeschäft investieren können!";
      } else {
        botResponse = "Das ist eine interessante Frage! Für eine detaillierte Beratung zu Ihrem spezifischen Fall empfehle ich Ihnen ein kostenloses Erstgespräch. Soll ich direkt einen Termin für Sie vereinbaren?";
      }

      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    setInputMessage(action);
    handleSendMessage();
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const openCalendly = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col space-y-3 md:space-y-4">
        {/* Calendly Booking Button */}
        <Button
          onClick={openCalendly}
          className="bg-orange-700 hover:bg-orange-800 text-white rounded-full w-12 h-12 md:w-16 md:h-16 shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          <Calendar className="h-5 w-5 md:h-6 md:w-6" />
        </Button>

        {/* Chat Trigger Button */}
        <Button
          onClick={toggleChat}
          className="bg-orange-700 hover:bg-orange-800 text-white rounded-full w-12 h-12 md:w-16 md:h-16 shadow-lg hover:shadow-xl transition-all duration-300"
          size="lg"
        >
          {isOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 md:bottom-28 right-4 md:right-6 z-50 w-80 md:w-96 max-w-[90vw]">
          <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden">
            {/* Chat Header */}
            <div className="gradient-bg-dark text-white p-3 md:p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-orange-700 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-3 w-3 md:h-4 md:w-4" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-sm md:text-base">AutoFlow Assistent</h4>
                    <div className="flex items-center text-xs text-gray-200">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                      Online
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleChat}
                  className="text-white hover:bg-gray-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="h-64 md:h-80 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-2 md:p-3 ${
                      message.sender === 'user'
                        ? 'bg-orange-700 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-xs md:text-sm font-open-sans">{message.text}</p>
                  </div>
                </div>
              ))}

              {/* Quick Actions */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 font-open-sans">Schnelle Aktionen:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickAction(action)}
                        className="text-xs h-7 md:h-8 font-open-sans border-orange-700 text-orange-700 hover:bg-orange-50"
                      >
                        {action}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="bg-gray-50 p-2 md:p-3 border-t">
              <div className="flex justify-between text-xs text-gray-600 font-open-sans">
                <div className="flex items-center">
                  <Phone className="h-3 w-3 mr-1" />
                  +49 176 48981671
                </div>
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Mo-Fr 9-17 Uhr
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-3 md:p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ihre Nachricht..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1 font-open-sans text-sm"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-orange-700 hover:bg-orange-800"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Calendly Booking Popup */}
      <CalendlyBooking isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </>
  );
};

export default ChatAssistant;
