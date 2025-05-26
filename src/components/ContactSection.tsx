import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import CalendlyBooking from './CalendlyBooking';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Anfrage gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    
    // Reset form
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
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Bereit für mehr <span className="text-orange-500">Effizienz</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam herausfinden, wie viel Zeit und Geld Sie durch 
              Automatisierung sparen können. Die Erstberatung ist kostenlos und unverbindlich.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Kostenlose Prozessanalyse vereinbaren
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Branche *
                  </label>
                  <Select onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Wählen Sie Ihre Branche" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="handwerk-elektro">Elektrohandwerk</SelectItem>
                      <SelectItem value="handwerk-sanitaer">Sanitär/Heizung</SelectItem>
                      <SelectItem value="handwerk-bau">Bauhandwerk</SelectItem>
                      <SelectItem value="handwerk-kfz">KFZ-Handwerk</SelectItem>
                      <SelectItem value="handwerk-andere">Anderes Handwerk</SelectItem>
                      <SelectItem value="immobilien-makler">Immobilienmakler</SelectItem>
                      <SelectItem value="immobilien-verwaltung">Hausverwaltung</SelectItem>
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
                  />
                </div>

                <div className="space-y-4">
                  <Button 
                    type="button"
                    size="lg"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={handleBookingClick}
                  >
                    Termin direkt buchen
                  </Button>
                  
                  <div className="text-center text-gray-500">oder</div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    variant="outline"
                    className="w-full border-orange-500 text-orange-500 hover:bg-orange-50"
                  >
                    Kostenlose Analyse anfordern
                  </Button>
                </div>

                <p className="text-sm text-gray-500 text-center">
                  ✓ Unverbindlich ✓ Kostenlos ✓ Innerhalb 24h Rückmeldung
                </p>
              </form>
            </Card>

            {/* Right Column - Additional Information */}
            <div className="space-y-8">
              <Card className="p-6 bg-blue-50 border-blue-200">
                <h4 className="text-lg font-bold text-blue-900 mb-4">
                  Was Sie von uns erwarten können:
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Kostenlose Analyse Ihrer zeitraubendsten Prozesse</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Konkretes Einsparpotential in Stunden und Euro</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Maßgeschneidertes Automatisierungskonzept</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">Transparente Kostenkalkulation ohne versteckte Gebühren</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  Direkter Kontakt
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-gray-900">Telefon:</div>
                    <div className="text-gray-700">+49 (0) 6032 / 123 456</div>
                    <div className="text-sm text-gray-500">Mo-Fr 9:00 - 17:00 Uhr</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">E-Mail:</div>
                    <div className="text-gray-700">info@autoflow-pro.de</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Büro:</div>
                    <div className="text-gray-700">
                      AutoFlow Pro GmbH<br />
                      Hauptstraße 123<br />
                      61169 Friedberg (Hessen)
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-green-50 border-green-200">
                <h4 className="text-lg font-bold text-green-800 mb-3">
                  💡 Sofort-Tipp für mehr Effizienz
                </h4>
                <p className="text-green-700 text-sm">
                  Dokumentieren Sie eine Woche lang, wie viel Zeit Sie täglich für 
                  Rechnungen, E-Mails und Terminkoordination aufwenden. Sie werden überrascht sein!
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
