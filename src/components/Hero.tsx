import { Button } from './Button';
import { Calendar } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      

      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-white/15 rounded-full blur-3xl animate-pulse-soft animate-delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse-soft animate-delay-700" />
        <div className="absolute bottom-20 right-1/3 w-56 h-56 bg-white/20 rounded-full blur-3xl animate-pulse-soft animate-delay-500" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-down">
          <p className="text-silver-800 uppercase tracking-[0.3em] text-sm md:text-base mb-6">
            Te invito a celebrar
          </p>
        </div>

        <h1 className="animate-fade-in animate-delay-200">
          <span className="block text-8xl md:text-7xl lg:text-8xl font-display font-semibold text-gradient mb-4">
            Nina
          </span>
        </h1>

        <div className="animate-fade-in-up animate-delay-300">
          <p className="text-2xl md:text-4xl font-display text-silver-800 mb-14">
            Mis 15 años
          </p>
        </div>

        <div className="animate-fade-in-up animate-delay-400 mb-6">
          <div className="glass-card inline-flex items-center gap-3 px-6 py-4 rounded-full">
            <Calendar className="w-5 h-5 text-silver-500" />
            <span className="text-silver-800 text-lg md:text-xl">08 de Agosto</span>
          </div>
        </div>

        <div className="animate-fade-in-up animate-delay-500">
          <Button href="#confirmacion" variant="primary">
            Confirmar asistencia
          </Button>
        </div>

        <div className="mt-24 animate-fade-in animate-delay-700">
          <div className="w-px h-16 md:h-24 bg-gradient-to-b from-transparent via-silver-400 to-transparent mx-auto" />
        </div>
      </div>

      
    </section>
  );
}
