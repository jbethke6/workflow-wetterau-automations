
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Calendar } from 'lucide-react';

interface CalendlyBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyBooking = ({ isOpen, onClose }: CalendlyBookingProps) => {
  useEffect(() => {
    if (isOpen && !window.Calendly) {
      // Load Calendly script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && window.Calendly) {
      // Initialize Calendly widget with your correct URL
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/bethke-ftr',
        parentElement: document.getElementById('calendly-inline-widget'),
        prefill: {},
        utm: {}
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
      <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden w-full max-w-4xl max-h-[90vh]">
        {/* Header */}
        <div className="bg-blue-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <Calendar className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-montserrat font-semibold">Kostenlose Prozessanalyse buchen</h4>
              <p className="text-sm text-blue-200">Wählen Sie Ihren Wunschtermin</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-white hover:bg-blue-800"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Calendly Widget */}
        <div className="h-[600px] w-full">
          <div 
            id="calendly-inline-widget" 
            className="h-full w-full"
            style={{ minWidth: '320px', height: '100%' }}
          />
        </div>
      </Card>
    </div>
  );
};

// Extend the global window object to include Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}

export default CalendlyBooking;
