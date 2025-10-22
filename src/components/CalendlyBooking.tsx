import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Calendar, Loader2 } from 'lucide-react';

interface CalendlyBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyBooking = ({ isOpen, onClose }: CalendlyBookingProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    service: 'Beratungsgespräch'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Kernzeiten 9-14 Uhr
  const timeSlots = [];
  for (let hour = 9; hour < 14; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      timeSlots.push(
        `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      );
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('https://n8n.srv1004859.hstgr.cloud/webhook/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setMessage('✅ Termin erfolgreich gebucht! Sie erhalten eine Bestätigung per E-Mail.');
        setFormData({ name: '', email: '', date: '', time: '', service: 'Beratungsgespräch' });
      } else {
        setMessage(`❌ ${result.message}`);
      }
    } catch (error) {
      setMessage('❌ Fehler bei der Buchung. Bitte versuchen Sie es später erneut.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
      <Card className="bg-white shadow-2xl border-0 rounded-2xl overflow-hidden w-full max-w-md">
        {/* Header */}
        <div className="gradient-bg-dark text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-700 rounded-full flex items-center justify-center">
              <Calendar className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-semibold">Termin buchen</h3>
              <p className="text-sm text-orange-200">Kostenloses Erstgespräch (30 Min)</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Formular */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">E-Mail *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Datum *</label>
              <input
                type="date"
                required
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Uhrzeit (9-14 Uhr) *</label>
              <select
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="">Bitte wählen</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time} Uhr
                  </option>
                ))}
              </select>
            </div>

            {message && (
              <div className={`p-3 rounded-md ${message.includes('✅') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {message}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full gradient-bg-dark hover:opacity-90"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Wird gebucht...
                </>
              ) : (
                'Termin buchen'
              )}
            </Button>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Mo-Fr, 9:00-14:00 Uhr • 30 Minuten • Kostenlos
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CalendlyBooking;