import React from "react";
import { Container } from "../common/Container";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AspectRatio } from "../ui/aspect-ratio";
import { Separator } from "../ui/separator";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { brand, speech } from "../../mock";
import { scrollToId } from "../../lib/scroll";
import speechBg from "../../assets/bgFounder.jpg";

export const SpeechSection = () => {
  return (
    <section
      id="speech"
      className="py-20 sm:py-24 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${speechBg})` }}
    >
      <div className="absolute inset-0 bg-white/80" />

      <Container className="relative">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Sapa Founder
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Terima kasih sudah meluangkan waktu untuk mengenal kami lebih dekat.
          </p>
        </div>

        <Tabs defaultValue="founder">
          <TabsContent value="founder">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <Card className="rounded-3xl overflow-hidden shadow-lg border-0">
                  <AspectRatio ratio={3 / 4}>
                    <img
                      src={speech.founder.photo}
                      alt="Founder"
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-5 bg-white">
                    <div className="text-sm text-slate-500">Founder</div>
                    <div className="font-semibold text-slate-900">
                      {speech.founder.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {speech.founder.role}
                    </div>
                  </div>
                </Card>

                <TabsList className="mt-6 bg-slate-200 rounded-full p-1 w-full">
                  <TabsTrigger
                    value="founder"
                    className="w-1/2 rounded-full data-[state=active]:bg-slate-900 data-[state=active]:text-white"
                  >
                    Founder
                  </TabsTrigger>
                  <TabsTrigger
                    value="cofounder"
                    className="w-1/2 rounded-full data-[state=active]:bg-slate-900 data-[state=active]:text-white"
                  >
                    Sec-Treas
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="lg:col-span-8">
                <Card className="rounded-3xl shadow-lg border-0">
                  <div className="p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-11 w-11 rounded-2xl bg-[#2F6BFF]/10 flex items-center justify-center">
                        <Sparkles className="h-5 w-5 text-[#2F6BFF]" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">
                          Founder Speech
                        </div>
                        <div className="text-xl sm:text-2xl font-semibold">
                          Selamat datang di {brand.name}
                        </div>
                      </div>
                    </div>

                    <Separator className="mb-6" />

                    <div className="text-slate-700 whitespace-pre-line leading-relaxed mb-10">
                      {speech.founder.message}
                    </div>

                    <div className="rounded-2xl bg-gradient-to-r from-[#2F6BFF] to-[#2557DA] p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold">
                          Siap ikut kegiatan berikutnya?
                        </h3>
                        <p className="mt-2 text-white/85 text-sm">
                          Klik untuk langsung ke bagian kontak.
                        </p>
                      </div>

                      <Button
                        onClick={() => scrollToId("contact")}
                        size="lg"
                        className="bg-white text-slate-900 hover:bg-white/90 rounded-full px-8"
                      >
                        Hubungi Kami
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="cofounder">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <Card className="rounded-3xl overflow-hidden shadow-lg border-0">
                  <AspectRatio ratio={3 / 4}>
                    <img
                      src={speech.coFounder.photo}
                      alt="Co-Founder"
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-5 bg-white">
                    <div className="text-sm text-slate-500">
                      Secretary & Treasurer
                    </div>
                    <div className="font-semibold text-slate-900">
                      {speech.coFounder.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {speech.coFounder.role}
                    </div>
                  </div>
                </Card>

                <TabsList className="mt-6 bg-slate-200 rounded-full p-1 w-full">
                  <TabsTrigger
                    value="founder"
                    className="w-1/2 rounded-full data-[state=active]:bg-slate-900 data-[state=active]:text-white"
                  >
                    Founder
                  </TabsTrigger>
                  <TabsTrigger
                    value="cofounder"
                    className="w-1/2 rounded-full data-[state=active]:bg-slate-900 data-[state=active]:text-white"
                  >
                    Sec-Treas
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="lg:col-span-8">
                <Card className="rounded-3xl shadow-lg border-0">
                  <div className="p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-11 w-11 rounded-2xl bg-[#2F6BFF]/10 flex items-center justify-center">
                        <Heart className="h-5 w-5 text-[#2F6BFF]" />
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">
                          Sec-Treas Speech
                        </div>
                        <div className="text-xl sm:text-2xl font-semibold">
                          Bersama Kita Tumbuh
                        </div>
                      </div>
                    </div>

                    <Separator className="mb-6" />

                    <div className="text-slate-700 whitespace-pre-line leading-relaxed mb-10">
                      {speech.coFounder.message}
                    </div>

                    <div className="rounded-2xl bg-gradient-to-r from-[#2F6BFF] to-[#2557DA] p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold">
                          Siap ikut kegiatan berikutnya?
                        </h3>
                        <p className="mt-2 text-white/85 text-sm">
                          Klik untuk langsung ke bagian kontak.
                        </p>
                      </div>

                      <Button
                        onClick={() => scrollToId("contact")}
                        size="lg"
                        className="bg-white text-slate-900 hover:bg-white/90 rounded-full px-8"
                      >
                        Hubungi Kami
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
};

export default SpeechSection;
