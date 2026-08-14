import React from "react";
import { Container } from "../common/Container";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { ArrowRight } from "lucide-react";
import { brand } from "../../mock";
import { scrollToId } from "../../lib/scroll";
import { openWhatsApp } from "../../lib/whatsapp";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-[#071A4A] relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.25] bg-[radial-gradient(circle_at_20%_20%,rgba(47,107,255,0.55),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(125,211,252,0.35),transparent_50%)]" />
      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8" data-reveal>
            <div className="reveal">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Tertarik berkolaborasi dengan kami?
              </h2>
              <p className="mt-4 text-white/80 max-w-2xl">
                Cening Community terbuka untuk kolaborasi proyek hingga
                pendanaan. Jangan ragu untuk menghubungi kami jika Anda tertarik
                bekerja sama atau memiliki pertanyaan lebih lanjut!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={() =>
                    openWhatsApp(brand.whatsapp.phone, brand.whatsapp.prefilled)
                  }
                  className="bg-[#2F6BFF] hover:bg-[#2557DA] text-white shadow-xl shadow-[#2F6BFF]/20"
                >
                  Hubungi Kami
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  onClick={() => scrollToId("home")}
                  size="lg"
                  variant="secondary"
                  className="bg-white/10 text-white hover:bg-white/15 border border-white/15"
                >
                  Kembali ke atas
                </Button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4" data-reveal>
            <div className="reveal">
              <Card className="rounded-3xl bg-white/10 border-white/15 backdrop-blur-[18px] shadow-2xl shadow-slate-950/25">
                <div className="p-7">
                  <div className="text-white font-semibold">Kontak</div>
                  <div className="mt-2 text-sm text-white/80">
                    WhatsApp: +{brand.whatsapp.phone} (Sriyanti)
                  </div>
                  <div className="mt-2 text-sm text-white/80">
                    Instagram: {brand.instagram.username}
                  </div>

                  <Separator className="my-6 bg-white/15" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
