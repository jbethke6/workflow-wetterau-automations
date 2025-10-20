import React from 'react';
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import justinProfile from '@/assets/justin-profile.jpeg';

const AboutSection = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={aboutRef}
          className={`scroll-animate ${aboutVisible ? 'animate' : ''}`}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Über <span className="text-orange-700">mich</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full blur-2xl opacity-20"></div>
                <img 
                  src={justinProfile}
                  alt="Justin Bethke - KI-Automatisierungs-Experte"
                  className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  Justin Bethke
                </h3>
                <p className="text-lg text-orange-700 font-medium mb-4">
                  Gründer von Yami-AI
                </p>
              </div>

              <Card className="p-6 bg-gray-50 border-0 shadow-lg">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Ich helfe Online-Shop-Betreibern, ihre Prozesse zu automatisieren, 
                    damit sie sich auf das Wesentliche konzentrieren können: Wachstum.
                  </p>
                  
                  <p>
                    Mit meiner Expertise in n8n, KI-Integration und DSGVO-konformen 
                    Lösungen schaffe ich maßgeschneiderte Automatisierungen, die echten 
                    Mehrwert liefern.
                  </p>
                  
                  <p>
                    Mein Antrieb? Ich sehe täglich, wie viel Zeit Shop-Betreiber mit 
                    repetitiven Aufgaben verschwenden. Zeit, die sie stattdessen in ihr 
                    Geschäft investieren könnten.
                  </p>

                  <p className="font-medium text-gray-900">
                    Langfristig möchte ich ein Netzwerk automatisierter Unternehmen 
                    aufbauen und mit anderen Unternehmern zusammenarbeiten, um echten 
                    Wert zu schaffen.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-orange-50 border-orange-200">
                <h4 className="font-bold text-gray-900 mb-3">
                  Meine Kernkompetenzen:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">n8n Workflows</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">KI-Integration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">DSGVO-Compliance</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-700">Shop-Optimierung</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
