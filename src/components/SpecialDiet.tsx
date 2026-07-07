import { Section } from './Section';
import { GlassCard } from './GlassCard';
import { Utensils } from 'lucide-react';

export function SpecialDiet() {
  return (
    <Section>
      <h2 className="section-title">Dieta Especial</h2>
      <p className="section-subtitle">
        Queremos que todos puedan disfrutar
      </p>

      <GlassCard className="max-w-lg mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/80 to-silver-200/50 flex items-center justify-center shadow-lg">
          <Utensils className="w-8 h-8 text-silver-600" />
        </div>

        <h3 className="text-xl font-display text-silver-800 mb-6">
          ¿Tenés alguna dieta especial?
        </h3>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['Vegetariano', 'Celíaco', 'Otra'].map((diet) => (
            <span
              key={diet}
              className="px-4 py-2 rounded-full bg-white/60 text-silver-600 text-sm border border-white/50"
            >
              {diet}
            </span>
          ))}
        </div>

        <p className="text-silver-600 text-sm">
          Esta información se necesitará al confirmar tu asistencia
        </p>
      </GlassCard>
    </Section>
  );
}
