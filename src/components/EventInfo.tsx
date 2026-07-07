import { Section } from './Section';
import { GlassCard } from './GlassCard';
import { Button } from './Button';
import { MapPin, Calendar, Clock } from 'lucide-react';

export function EventInfo() {
  const googleMapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Club+Alem%C3%A1n+Neuqu%C3%A9n,+Carmen+Figueroa+Urme%C3%B1o+1450,+Neuqu%C3%A9n';

  return (
    <Section>
      <h2 className="section-title">Información del Evento</h2>
      <p className="section-subtitle">
        Todos los detalles que necesitás saber
      </p>

      <GlassCard className="max-w-2xl mx-auto">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6 text-silver-600" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-display font-medium text-silver-800 mb-1">
                Lugar
              </h3>
              <p className="text-silver-700 text-xl font-medium">
                Club Alemán Neuquén
              </p>
              <p className="text-silver-500 mt-1">
                Carmen Figueroa Urmeño 1450
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-6 h-6 text-silver-600" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-display font-medium text-silver-800 mb-1">
                Fecha
              </h3>
              <p className="text-silver-700 text-xl font-medium">
                08 de Agosto de 2026
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-silver-600" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-display font-medium text-silver-800 mb-1">
                Horario
              </h3>
              <p className="text-silver-700 text-xl font-medium">
                21:00 hs
              </p>
            </div>
          </div>

          <div className="pt-4">
            <Button href={googleMapsUrl} target="_blank" variant="primary" className="w-full">
              Ver ubicación
            </Button>
          </div>
        </div>
      </GlassCard>
    </Section>
  );
}
