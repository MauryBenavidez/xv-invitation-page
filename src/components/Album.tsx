import { Section } from './Section';
import { GlassCard } from './GlassCard';
import { Button } from './Button';
import { Camera } from 'lucide-react';

export function Album() {
  return (
    <Section>
      <h2 className="section-title">Álbum</h2>
      <p className="section-subtitle">
        Para revivir los mejores momentos
      </p>

      <GlassCard className="max-w-lg mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/80 to-silver-200/50 flex items-center justify-center shadow-lg">
          <Camera className="w-8 h-8 text-silver-600" />
        </div>

        <p className="text-silver-600 mb-8 leading-relaxed">
          Para subir las fotos de recuerdos que quieras compartir conmigo y las saques en la fiesta.
        </p>

        <Button href="https://photos.app.goo.gl/KGa63gFHKZQLMVEZ7" variant="secondary">
          Ver álbum
        </Button>
      </GlassCard>
    </Section>
  );
}
