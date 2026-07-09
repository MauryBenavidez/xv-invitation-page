import { SparkleParticles } from '../components/SparkleParticles';
import { Section } from '../components/Section';
import { GlassCard } from '../components/GlassCard';
import { Button } from '../components/Button';
import { MapPin, Clock, Phone, MessageCircle } from 'lucide-react';
import DiscoBackground from "../components/DiscoBackground";
interface ContactCardProps {
  title: string;
  phone: string;
}

function ContactCard({ title, phone }: ContactCardProps) {
  const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}`;

  return (
    <div className="snap-center shrink-0 w-[280px] md:w-auto">
      <GlassCard className="text-center h-full">
        <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-white/80 to-silver-200/50 flex items-center justify-center shadow-lg">
          <Phone className="w-7 h-7 text-silver-600" />
        </div>

        <h3 className="text-lg font-display text-silver-800 mb-4">
          {title}
        </h3>

        <Button
          href={whatsappUrl}
          target="_blank"
          variant="secondary"
          className="w-full"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </Button>
      </GlassCard>
    </div>
  );
}

export function AfterPartyPage() {
  
  const googleMapsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Club+Alem%C3%A1n+Neuqu%C3%A9n,+Carmen+Figueroa+Urme%C3%B1o+1450,+Neuqu%C3%A9n';

  const contacts = [
    { title: 'Nina', phone: '+54 9 299 123-4567' },
    { title: 'Ailin', phone: '+54 9 299 234-5678' },
    { title: 'Pablo', phone: '+54 9 299 345-6789' },
  ];

  return (
    
    <main className="relative min-h-screen">
      <DiscoBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-silver-100/50 via-silver-200/30 to-silver-100/50" />
      <SparkleParticles count={40} className="z-0" />

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-white/15 rounded-full blur-3xl animate-pulse-soft animate-delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse-soft animate-delay-700" />
      </div>

      <div className="relative z-10">
        <header className="min-h-[70vh] flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-display font-semibold text-gradient mb-6 animate-fade-in">
              La noche no termina acá
            </h1>
            <p className="text-xl md:text-2xl text-silver-600 animate-fade-in-up animate-delay-200">
              Seguimos celebrando juntos
            </p>
          </div>
        </header>

        <Section>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <h2 className="section-title">Información</h2>
          <p className="section-subtitle">
            Los detalles para seguir celebrando
          </p>

          <GlassCard className="max-w-2xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-silver-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-display font-medium text-silver-800 mb-1">
                    Fecha y Hora
                  </h3>
                  <p className="text-silver-700 text-xl font-medium">
                    09 de Agosto de 2026
                  </p>
                  <p className="text-silver-500 mt-1">
                    A partir de las 00:00 hs hasta las 05:30 hs
                  </p>
                </div>
              </div>

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

              <div className="pt-4">
                <Button href={googleMapsUrl} target="_blank" variant="primary" className="w-full">
                  Ver ubicación
                </Button>
              </div>
            </div>
          </GlassCard>
        </Section>

        <Section>
          <h2 className="section-title">Contactos</h2>
          <p className="section-subtitle">
            Cualquier consulta, no dudes en contactarnos
          </p>

          <div
        className="
          flex
          gap-6
          overflow-x-auto
          snap-x
          snap-mandatory
          px-2
          pb-4
          scrollbar-hide

          md:grid
          md:grid-cols-3
          md:max-w-4xl
          md:mx-auto
          md:overflow-visible
        "
      >
        {contacts.map((contact) => (
          <ContactCard
            key={contact.title}
            title={contact.title}
            phone={contact.phone}
          />
        ))}
      </div>
        </Section>

        <footer className="py-12 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-silver-800 text-sm">
              Te esperamos para seguir celebrando juntos
            </p>
            <p className="text-silver-300 text-xs mt-2">
              © 2026 Todos los derechos reservados
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
