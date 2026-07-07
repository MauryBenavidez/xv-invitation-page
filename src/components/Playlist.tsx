import { Section } from './Section';
import { GlassCard } from './GlassCard';
import { Button } from './Button';
import { Music } from 'lucide-react';

export function Playlist() {
  return (
    <Section>
      <h2 className="section-title">Playlist</h2>
      <p className="section-subtitle">
        La música que nos hace mover
      </p>

      <GlassCard className="max-w-lg mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/80 to-silver-200/50 flex items-center justify-center shadow-lg">
          <Music className="w-8 h-8 text-silver-600" />
        </div>

        <h3 className="text-xl font-display text-silver-800 mb-2">
          Elegí una canción
        </h3>
        <p className="text-silver-500 mb-8">
          Quiero bailar la música que más te guste.
        </p>

        <Button href="https://forms.gle/hDFhkJX7cNjwLrdt7" variant="primary">
          Agregar canción
        </Button>
      </GlassCard>
    </Section>
  );
}
