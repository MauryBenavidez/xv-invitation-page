import { useEffect, useMemo } from 'react';

interface SparkleParticlesProps {
  count?: number;
  className?: string;
}

interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
}

export function SparkleParticles({ count = 70, className = '' }: SparkleParticlesProps) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 5 + 5,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 1 + 1}s`,
      opacity: Math.random() * 0.9 + 0.6,
    }));
  }, [count]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'mouse-sparkle';
      sparkle.style.cssText = `
        position: fixed;
        left: ${e.clientX}px;
        top: ${e.clientY}px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(200,200,200,0.5) 100%);
        pointer-events: none;
        z-index: 9999;
        animation: mouseSparkle 1s ease-out forwards;
      `;
      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 1000);
    };

    const style = document.createElement('style');
    style.textContent = `
      @keyframes mouseSparkle {
        0% { transform: scale(1) translate(-50%, -50%); opacity: 1; }
        100% { transform: scale(0) translate(-50%, -50%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      style.remove();
    };
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, rgba(255,255,255,${particle.opacity * 2}) 0%, rgba(200,200,200,${particle.opacity}) 50%, transparent 100%)`,
            boxShadow: `0 0 ${particle.size * 2}px rgba(255,255,255,${particle.opacity})`,
            animation: `sparkle ${particle.duration} ease-in-out infinite`,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}
