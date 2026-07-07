import { Section } from './Section';
import { Countdown } from './Countdown';


export function CountdownSection() {
  const eventDate = new Date('2026-08-08T20:00:00');

  return (
    <Section>
      
            
      <h2 className="section-title">Cuenta Regresiva</h2>
      <p className="section-subtitle">
        Faltan pocos días para este momento tan especial
      </p>
      <Countdown targetDate={eventDate} />
    </Section>
  );
}
