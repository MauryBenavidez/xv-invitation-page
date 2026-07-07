import { Hero } from '../components/Hero';
import { CountdownSection } from '../components/CountdownSection';
import { EventInfo } from '../components/EventInfo';
import { SpecialDiet } from '../components/SpecialDiet';
import { Gift } from '../components/Gift';
import { Playlist } from '../components/Playlist';
import { Album } from '../components/Album';
import { Contacts } from '../components/Contacts';
import { Footer } from '../components/Footer';
import { SparkleParticles } from '../components/SparkleParticles';
import DiscoBackground from "../components/DiscoBackground";

export function HomePage() {
  return (
    <main className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-silver-100/50 via-silver-200/30 to-silver-100/50" />
      <SparkleParticles count={60} className="z-0" />
      <DiscoBackground />
      <Hero />
      <CountdownSection />
      <EventInfo />
      <Contacts />
      <SpecialDiet />
      <Gift />
      <Playlist />
      <Album />
      <Footer />
    </main>
  );
}
