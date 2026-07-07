import { Section } from './Section';
import { GlassCard } from './GlassCard';
import { Button } from './Button';
import { Phone, MessageCircle } from 'lucide-react';

interface ContactCardProps {
  title: string;
  phone: string;
}

function ContactCard({ title, phone }: ContactCardProps) {
  const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, '')}`;

  return (
    <GlassCard className="text-center">
      <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-white/80 to-silver-200/50 flex items-center justify-center shadow-lg">
        <Phone className="w-7 h-7 text-silver-600" />
      </div>

      <h3 className="text-lg font-display text-silver-800 mb-4">
        {title}
        
      </h3>

      <Button href={whatsappUrl} target="_blank" variant="secondary" className="w-full">
        <MessageCircle className="w-5 h-5" /> WhatsApp
      </Button>
    </GlassCard>
  );
}

export function Contacts() {
  const contacts = [
    { title: 'Nina', phone: '+54 9 299 325-0133' },
    { title: 'Mamá', phone: '+54 9 299 413-4427' },
    { title: 'Papá', phone: '+54 9 299 555-4227' },
  ];

  return (
    <Section id="confirmacion">
      <h2 className="section-title">Confirmación</h2>
      <p className="section-subtitle">
        Tu asistencia es muy importante para mi
        <br />
        (confirmar asistencia antes del 25 de Julio)
      </p>
      
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {contacts.map((contact) => (
          <ContactCard
            key={contact.title}
            title={contact.title}
            phone={contact.phone}
          />
        ))}
      </div>
    </Section>
  );
}
