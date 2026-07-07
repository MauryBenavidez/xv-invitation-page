import { Section } from './Section';
import { GlassCard } from './GlassCard';
import { Gift as GiftIcon} from 'lucide-react';

export function Gift() {
  const alias = 'nina.dilo';

  return (
    <Section>
      <h2 className="section-title">Regalo</h2>
      <p className="section-subtitle">
        Tu presencia es lo más importante
      </p>

      <GlassCard className="max-w-lg mx-auto text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/80 to-silver-200/50 flex items-center justify-center shadow-lg">
          <GiftIcon className="w-8 h-8 text-silver-600" />
        </div>

        <p className="text-silver-600 mb-2 leading-relaxed">
          Tu presencia será mi mejor regalo.
        </p>
        <p className="text-silver-600 mb-8 leading-relaxed">
          Si además querés hacerme un presente, podés hacerlo mediante el siguiente alias.
        </p>

        <div className="glass-card-dark rounded-2xl p-6 mb-6">
          <p className="text-2xl font-mono text-silver-700 font-medium tracking-wider">
            {alias}
          </p>
        </div>
      </GlassCard>
    </Section>
  );
}
