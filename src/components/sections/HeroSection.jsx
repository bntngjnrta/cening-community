import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ArrowDown, Camera } from "lucide-react";
import { Container } from "../common/Container";
import { brand, images } from "../../mock";
import { scrollToId } from "../../lib/scroll";
import maskot from "../../assets/maskot.png";

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${images.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-[#0A2B7A]/70" />
      <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.45)_1px,transparent_0)] [background-size:20px_20px]" />

      <Container className="relative z-10 pt-36 pb-0 flex items-stretch">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full h-full">
          <div className="lg:col-span-7">
            <div data-reveal className="reveal">
              <Badge className="bg-white/10 text-white hover:bg-white/15 border border-white/15">
                Community • Youth • Impact
              </Badge>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                {brand.name}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-white/85 max-w-xl">
                {brand.tagline}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-white/90 shadow-xl shadow-slate-950/20"
                >
                  <a
                    href="https://drive.google.com/uc?export=download&id=1sAu5JUA14nllDN3YwjbQXhK2aWooITsX"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Unduh Profil Komunitas
                    <ArrowDown className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  onClick={() => scrollToId("gallery")}
                  size="lg"
                  variant="secondary"
                  className="bg-white/10 text-white hover:bg-white/15 border border-white/15"
                >
                  Lihat Aktivitas
                  <Camera className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-white/80">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#7DD3FC]" />
                  <span className="text-sm">Program sosial & edukasi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/60" />
                  <span className="text-sm">Bantu UMKM</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#93C5FD]" />
                  <span className="text-sm">Literasi Keuangan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="lg:col-span-5 relative hidden lg:flex items-end justify-end">
              <img
                src={maskot}
                alt="Maskot Cening Community"
                className="w-[800px] max-h-screen object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
