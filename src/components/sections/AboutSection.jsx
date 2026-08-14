import React from "react";
import { Container } from "../common/Container";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import { brand, images } from "../../mock";
import { scrollToId } from "../../lib/scroll";

const features = [
  {
    title: "Kegiatan Rutin",
    description:
      "Pelatihan berkala untuk meningkatkan kapasitas UMKM dan generasi muda.",
  },
  {
    title: "Kolaborasi Terbuka",
    description:
      "Kerja sama dengan berbagai pihak untuk memperluas dampak bersama.",
  },
  {
    title: "Mentoring & Sharing",
    description: "Mentoring program digital marketing dan keuangan.",
  },
  {
    title: "Dampak Nyata",
    description: "Fokus pada hasil terukur bagi UMKM dan generasi muda.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div data-reveal className="reveal">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                Tentang {brand.name}
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Cening Community adalah komunitas kolaboratif yang bergerak di
                bidang pengembangan UMKM, literasi keuangan, ide dan model
                bisnis, kewirausahaan, manajemen, branding dan marketing.
              </p>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((item) => (
                  <Card
                    key={item.title}
                    className="rounded-2xl border-slate-200 shadow-sm transition-all duration-300 hover:bg-[#2F6BFF] hover:text-white hover:shadow-lg group"
                  >
                    <div className="p-5">
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-white">
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm text-slate-600 group-hover:text-white/90">
                        {item.description}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => scrollToId("contact")}
                  className="bg-[#2F6BFF] hover:bg-[#2557DA] text-white"
                >
                  Hubungi Kami
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  onClick={() => scrollToId("vision")}
                  variant="secondary"
                  className="bg-slate-100 text-slate-900 hover:bg-slate-200"
                >
                  Lihat Visi & Misi
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div data-reveal className="reveal">
              <Card className="rounded-3xl overflow-hidden border-slate-200 shadow-xl">
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={images.about}
                    alt="Aktivitas komunitas"
                    className="h-full w-full object-contain p-1"
                    loading="lazy"
                  />
                </AspectRatio>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
