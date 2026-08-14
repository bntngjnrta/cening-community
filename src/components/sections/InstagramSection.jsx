import React from "react";
import { Container } from "../common/Container";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";
import { ArrowRight, Instagram } from "lucide-react";
import { brand, instagramFeed } from "../../mock";
import bgIgSection from "../../assets/bgIgSection.jpg";

export const InstagramSection = () => {
  return (
    <section
      id="instagram"
      className="py-20 sm:py-24 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgIgSection})` }}
    >
      <div className="absolute inset-0 bg-white/80" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4" data-reveal>
            <div className="reveal">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                  <Instagram className="h-5 w-5 text-[#2F6BFF]" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Instagram</div>
                  <div className="text-xl font-semibold tracking-tight text-slate-900">
                    {brand.instagram.username}
                  </div>
                </div>
              </div>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Follow untuk update kegiatan, informasi, dan dokumentasi terbaru.
              </p>

              <div className="mt-6">
                <Button
                  asChild
                  className="bg-[#2F6BFF] hover:bg-[#2557DA] text-white"
                >
                  <a
                    href={brand.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Buka Instagram
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8" data-reveal>
            <div className="reveal">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {instagramFeed.map((src, idx) => (
                  <Card
                    key={`${src}-${idx}`}
                    className="rounded-3xl overflow-hidden border-slate-200 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <AspectRatio ratio={1}>
                      <img
                        src={src}
                        alt={`Instagram feed ${idx + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                        loading="lazy"
                      />
                    </AspectRatio>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default InstagramSection;
