
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, Card as CardContent } from "@/components/ui/card";
import { Check, Clock, Users, FileText, Calendar, MessageSquare, Search } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import BenefitsSection from '../components/BenefitsSection';
import ProblemsSection from '../components/ProblemsSection';
import SolutionsSection from '../components/SolutionsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import ServicesSection from '../components/ServicesSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <BenefitsSection />
      <ProblemsSection />
      <SolutionsSection />
      <CaseStudiesSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
};

export default Index;
