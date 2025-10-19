import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  benefits: string[];
}

const ServiceModal = ({ isOpen, onClose, title, description, benefits }: ServiceModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">{title}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <p className="text-gray-600">{description}</p>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Vorteile:</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-orange-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">n8n Workflow Beispiel</h3>
            <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
              <p className="text-gray-500">
                Hier wird später ein Screenshot oder Video des n8n Workflows eingefügt.
              </p>
              <p className="text-sm text-gray-400 mt-2">
                Platzhalter für Workflow-Visualisierung
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
