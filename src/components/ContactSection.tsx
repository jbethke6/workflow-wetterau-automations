
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import CalendlyBooking from './CalendlyBooking';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  });
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const { toast } = useToast();
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      industry: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBookingClick = () => {
    setIsCalendlyOpen(true);
  };

  const closeCalendly = () => {
    setIsCalendlyOpen(false);
  };

  return (
    <>
      <section id="contact" className="py-12 md:py-16 lg:py-20 gradient-bg-light circuit-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={contactRef}
            className={`text-center mb-8 md:mb-12 lg:mb-16 scroll-animate ${contactVisible ? 'animate' : ''}`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
              Bereit für mehr <span className="text-orange-700">Effizienz</span>?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, wie viel Zeit und Geld Sie durch 
              Automatisierung sparen können. Die Erstberatung ist kostenlos und unverbindlich.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Form */}
            <Card className="p-4 md:p-6 lg:p-8 shadow-xl border-0 bg-white/95 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Kostenlose Prozessanalyse vereinbaren
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Ihr vollständiger Name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Unternehmen *
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Firmenname"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="ihre@email.de"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Ihre Telefonnummer"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Branche *
                  </label>
                  <Select onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Wählen Sie Ihre Branche" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fashion">Fashion & Bekleidung</SelectItem>
                      <SelectItem value="elektronik">Elektronik & Gadgets</SelectItem>
                      <SelectItem value="home-deko">Home & Dekoration</SelectItem>
                      <SelectItem value="beauty">Beauty & Kosmetik</SelectItem>
                      <SelectItem value="sport">Sport & Fitness</SelectItem>
                      <SelectItem value="lebensmittel">Lebensmittel & Getränke</SelectItem>
                      <SelectItem value="spielzeug">Spielzeug & Hobby</SelectItem>
                      <SelectItem value="andere">Andere Branche</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ihre größte Herausforderung
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Beschreiben Sie kurz, womit Sie am meisten Zeit verlieren..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <div className="space-y-3 md:space-y-4">
                  <Button 
                    type="button"
                    size="lg"
                    className="w-full bg-orange-700 hover:bg-orange-800 text-white"
                    onClick={handleBookingClick}
                  >
                    Termin direkt buchen
                  </Button>
                  
                  <div className="text-center text-gray-500 text-sm">oder</div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    variant="outline"
                    className="w-full border-orange-700 text-orange-700 hover:bg-orange-50"
                  >
                    Analyse anfordern
                  </Button>
                </div>

                <p className="text-xs md:text-sm text-gray-500 text-center">
                  ✓ Unverbindlich ✓ Kostenlos ✓ Innerhalb 24h Rückmeldung
                </p>
              </form>
            </Card>

            {/* Right Column - Additional Information */}
            <div className="space-y-6 md:space-y-8">
              <Card className="p-4 md:p-6 bg-blue-50 border-blue-200 shadow-lg">
                <h4 className="text-base md:text-lg font-bold text-blue-900 mb-3 md:mb-4">
                  Was Sie von uns erwarten können:
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm md:text-base">Kostenlose Analyse Ihrer zeitraubendsten Prozesse</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm md:text-base">Konkretes Einsparpotential in Stunden und Euro</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm md:text-base">Maßgeschneidertes Automatisierungskonzept</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm md:text-base">Transparente Kostenkalkulation ohne versteckte Gebühren</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-4 md:p-6 shadow-lg bg-white/95 backdrop-blur-sm">
                <h4 className="text-base md:text-lg font-bold text-gray-900 mb-3 md:mb-4">
                  Direkter Kontakt
                </h4>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <div className="font-medium text-gray-900">E-Mail:</div>
                    <div className="text-gray-700">justin@yami-ai.com</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Antwortzeit:</div>
                    <div className="text-gray-700 text-sm md:text-base">
                      Ich antworte normalerweise innerhalb von 24 Stunden
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-4 md:p-6 bg-green-50 border-green-200 shadow-lg">
                <h4 className="text-base md:text-lg font-bold text-green-800 mb-3">
                  💡 Sofort-Tipp für mehr Effizienz
                </h4>
                <p className="text-green-700 text-sm md:text-base">
                  Dokumentieren Sie eine Woche lang, wie viel Zeit Sie täglich für 
                  Kundensupport, Bestandsverwaltung und Marketing-Content aufwenden. Sie werden überrascht sein!
                </p>
              </Card>

              {/* Technical Workflow Previews */}
              <Card className="p-4 md:p-6 bg-gray-900 text-white shadow-lg">
                <h4 className="text-base md:text-lg font-bold mb-3">
                  🔧 Live Workflow Beispiele
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <img 
                      src="/lovable-uploads/e61e520c-4f9d-44be-930d-97394a0103d3.png" 
                      alt="Code-Automatisierung Workflow"
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <p className="text-gray-300 text-xs">
                      Automatisierte Code-Verarbeitung und Datenanalyse
                    </p>
                  </div>

                  <div>
                    <img 
                      src="/lovable-uploads/928e0ad3-4743-4d59-a202-36e4948d1d91.png" 
                      alt="Team-Collaboration Workflow"
                      className="w-full h-24 object-cover rounded-lg mb-2"
                    />
                    <p className="text-gray-300 text-xs">
                      Workflow für automatisierte Team-Koordination
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-xs mt-4">
                  So könnte Ihr automatisierter Workflow aussehen - von der Datenerfassung bis zur intelligenten Verarbeitung.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Booking Popup */}
      <CalendlyBooking isOpen={isCalendlyOpen} onClose={closeCalendly} />
    </>
  );
};

export default ContactSection;
