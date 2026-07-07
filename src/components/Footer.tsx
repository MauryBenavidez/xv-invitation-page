import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-silver-400 text-sm flex items-center justify-center gap-2">
          Hecho con <Heart className="w-4 h-4 text-silver-300" /> para una noche inolvidable
        </p>
        <p className="text-silver-300 text-xs mt-2">
          © 2026 Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
