
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, Card as CardContent } from "@/components/ui/card";
import { Check, Clock, Users, FileText, Calendar, MessageSquare, Search } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import SolutionsSection from '../components/SolutionsSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import ChatbotAssistant from '../components/ChatbotAssistant';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <SolutionsSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <ChatbotAssistant />
    </div>
  );
};

export default Index;
