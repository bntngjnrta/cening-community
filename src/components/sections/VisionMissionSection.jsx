import React from "react";
import { Container } from "../common/Container";
import { Card } from "../ui/card";
import {
  GraduationCap,
  Handshake,
  HandshakeIcon,
  Heart,
  Smartphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { mission } from "../../mock";

const iconMap = {
  graduation: GraduationCap,
  handshake: Handshake,
  sparkles: Sparkles,
  heart: Heart,
  handshake2: HandshakeIcon,
  smartphone: Smartphone,
  trend: TrendingUp,
};

export const VisionMissionSection = () => {
  return (
    <section id="vision" className="py-20 sm:py-24 bg-white/80">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5" data-reveal>
            <div className="reveal">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                Visi & Misi
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Arah dan tujuan komunitas, meliputi visi yang ingin dicapai
                serta misi sebagai langkah strategis untuk mewujudkannya.
              </p>

              <Card className="mt-7 rounded-3xl border-slate-200 shadow-sm transition-all duration-300 hover:bg-[#2F6BFF] hover:text-white hover:shadow-lg group">
                <div className="p-7">
                  <div className="text-sm text-slate-500 group-hover:text-white/80">
                    Visi
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-900 leading-snug group-hover:text-white">
                    Sebagai wadah untuk terwujudnya UMKM dan generasi muda yang
                    berkembang secara inovatif, berkelanjutan serta memiliki
                    daya saing global.
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-7" data-reveal>
            <div className="reveal">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {mission.map((m) => {
                  const Icon = iconMap[m.icon] || Sparkles;
                  return (
                    <Card
                      key={m.title}
                      className="rounded-3xl border-slate-200 shadow-sm transition-all duration-300 hover:bg-[#2F6BFF] hover:text-white hover:shadow-lg group"
                    >
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-11 w-11 rounded-2xl bg-[#2F6BFF]/10 ring-1 ring-[#2F6BFF]/15 flex items-center justify-center shrink-0 group-hover:bg-white/20">
                            <Icon className="h-5 w-5 text-[#2F6BFF] group-hover:text-white" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 group-hover:text-white">
                              {m.title}
                            </div>
                            <div className="mt-2 text-sm text-slate-600 leading-relaxed group-hover:text-white/90">
                              {m.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VisionMissionSection;
