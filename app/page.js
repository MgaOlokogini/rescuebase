import Image from 'next/image';
import PlatformFeatures from '@/components/ui/landing/PlatformFeatures';
import Header from "@/components/shared/Header";
import HeroSection from '@/components/ui/landing/HeroSection';
import RescuesShowcase from '@/components/ui/landing/RescuesShowcase';
import StatsBanner from '@/components/ui/landing/StatsBanner';
import AdoptionSteps from '@/components/ui/landing/AdoptionSteps';
import CallToActionBanner from '@/components/ui/landing/CallToActionBanner';
import pawStyles from "@/styles/Landing/PawOverlay.module.css";
import heroStyles from "@/styles/Landing/Hero.module.css"; // Used strictly for .mainWrapper frame

export default function Home() {
  return (
    <main className={heroStyles.mainWrapper}>
      <Header role={null} />
      {/* Structural Block Stack */}
      <HeroSection />
      <RescuesShowcase />
      <StatsBanner />
      <AdoptionSteps />
      <PlatformFeatures />
      <CallToActionBanner />

      {/* Background Decorative Graphic Overlays */}
      <div className={pawStyles.pawContainer}>
        <div className={pawStyles.pawOverlay}>
          <Image src="/images/pawTrail.png" alt="" fill style={{ objectFit: 'cover' }} priority/>
        </div>
        <div className={pawStyles.pawOverlayFlipped}>
          <Image src="/images/pawTrail.png" alt="" fill style={{ objectFit: 'cover' }} priority />
        </div>
      </div>

    </main>
  );
}