import React from "react";
import background from "../assets/backgroundPutih.jpg";
import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { AboutSection } from "../components/sections/AboutSection";
import { SpeechSection } from "../components/sections/SpeechSection";
import { VisionMissionSection } from "../components/sections/VisionMissionSection";
import { GallerySection } from "../components/sections/GallerySection";
import { InstagramSection } from "../components/sections/InstagramSection";
import { ContactSection } from "../components/sections/ContactSection";
import { WhatsAppFloat } from "../components/site/WhatsAppFloat";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import { useActiveSection } from "../hooks/useActiveSection";
import { openWhatsApp } from "../lib/whatsapp";
import { brand, navLinks } from "../mock";

export default function HomePage() {
  useRevealOnScroll();
  const activeId = useActiveSection(navLinks.map((l) => l.id));

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <Navbar activeId={activeId} />
      <main>
        <HeroSection />
        <AboutSection />
        <SpeechSection />
        <VisionMissionSection />
        <GallerySection />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />

      <WhatsAppFloat
        phone={brand.whatsapp.phone}
        message={brand.whatsapp.prefilled}
        onOpen={openWhatsApp}
      />
    </div>
  );
}
