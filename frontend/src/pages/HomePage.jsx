import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "../components/ui/navigation-menu";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Separator } from "../components/ui/separator";
import { AspectRatio } from "../components/ui/aspect-ratio";
import { Badge } from "../components/ui/badge";
import { brand, galleryImages, images, instagramFeed, mission, navLinks, speech } from "../mock";
import {
  ArrowRight,
  Camera,
  ChevronRight,
  Handshake,
  Heart,
  Instagram,
  Menu,
  Sparkles,
  GraduationCap,
  Smartphone,
  TrendingUp,
  HandshakeIcon,
} from "lucide-react";
import { WhatsAppFloat } from "../components/site/WhatsAppFloat";
import { cn } from "../lib/utils";
import logo from "../assets/logo.png";
import maskot from "../assets/maskot.png";
import { ArrowDown } from "lucide-react";

const buildWaLinks = (phone, message) => {
  const encoded = encodeURIComponent(message || "Hello");
  return {
    app: `whatsapp://send?phone=${phone}&text=${encoded}`,
    waMe: `https://wa.me/${phone}?text=${encoded}`,
    web: `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`,
  };
};

const openWhatsApp = (phone, message) => {
  const { app, waMe, web } = buildWaLinks(phone, message);
  const ua = navigator?.userAgent || "";
  const isMobile = /Android|iPhone|iPad|iPod/i.test(ua);

  // Try native app on mobile (most reliable), then fall back to wa.me
  if (isMobile) {
    window.location.href = app;
    window.setTimeout(() => {
      const w = window.open(waMe, "_blank", "noopener,noreferrer");
      if (!w) window.location.href = waMe;
    }, 650);
    return;
  }

  // Desktop: try WhatsApp Web first, then fall back to wa.me
  const w = window.open(web, "_blank", "noopener,noreferrer");
  if (!w) {
    const w2 = window.open(waMe, "_blank", "noopener,noreferrer");
    if (!w2) window.location.href = waMe;
  }
};

const iconMap = {
  graduation: GraduationCap,
  handshake: Handshake,
  sparkles: Sparkles,
  heart: Heart,
  handshake2: HandshakeIcon,
  smartphone: Smartphone,
  trend: TrendingUp,
};

const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids?.[0] || "home");

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio || 0) - (a.intersectionRatio || 0));
        if (visible[0]?.target?.id) setActive(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: "-25% 0px -65% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5],
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return active;
};

const useRevealOnScroll = () => {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const target = e.target;
            target.classList.add("is-revealed");

            // Support wrappers: if the observer is attached to a parent (data-reveal),
            // reveal nested elements too.
            const nested = target.querySelectorAll?.(".reveal");
            if (nested?.length) nested.forEach((n) => n.classList.add("is-revealed"));

            obs.unobserve(target);
          }
        }
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Container = ({ children, className }) => (
  <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
    {children}
  </div>
);

const NavLink = ({ id, label, active, onClick }) => {
  const isActive = active === id;
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <button
          type="button"
          onClick={onClick}
          className={cn(
            "relative px-3 py-2 text-sm font-medium rounded-full transition-colors",
            "hover:bg-white/10 hover:text-white",
            isActive ? "text-white" : "text-white/80"
          )}
        >
          {label}
          <span
            className={cn(
              "pointer-events-none absolute left-3 right-3 -bottom-0.5 h-px rounded-full",
              "transition-opacity",
              isActive ? "opacity-100 bg-white/80" : "opacity-0 bg-white/70"
            )}
          />
        </button>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const SiteNav = ({ activeId }) => {
  return (
    <div className="sticky top-0 z-50">
      <div className="absolute inset-0 h-[76px] bg-gradient-to-b from-slate-950/55 to-slate-950/20 backdrop-blur-[18px]" />
      <Container className="relative">
        <div className="h-[76px] flex items-center justify-between">
          <button
            type="button"
            onClick={() => scrollToId("home")}
            className="flex items-center gap-3"
            aria-label="Kembali ke Home"
          >
            <div className="h-10 flex items-center">
              <img
                src={logo}
                alt="Cening Community"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="leading-tight text-left">
              <div className="text-white font-semibold tracking-tight">
                {brand.name}
              </div>
              <div className="text-xs text-white/75">Community Profile</div>
            </div>
          </button>

          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navLinks.map((l) => (
                  <NavLink
                    key={l.id}
                    id={l.id}
                    label={l.label}
                    active={activeId}
                    onClick={() => scrollToId(l.id)}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={() => scrollToId("contact")}
              className="bg-[#2F6BFF] hover:bg-[#2557DA] text-white shadow-lg shadow-[#2F6BFF]/15"
            >
              Kenal Lebih Dekat
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="secondary"
                  className="bg-white/10 text-white hover:bg-white/15 border border-white/10"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[380px]">
                <div className="text-slate-900 font-semibold">Menu</div>
                <Separator className="my-4" />
                <div className="flex flex-col gap-2">
                  {navLinks.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => {
                        scrollToId(l.id);
                        // Close sheet by clicking overlay: Radix closes on focus loss; this is fine.
                      }}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-xl transition-colors",
                        activeId === l.id
                          ? "bg-slate-900 text-white"
                          : "hover:bg-slate-100 text-slate-800"
                      )}
                    >
                      <span className="inline-flex items-center justify-between w-full">
                        {l.label}
                        <ChevronRight className="h-4 w-4 opacity-70" />
                      </span>
                    </button>
                  ))}
                  <Separator className="my-2" />
                  <Button
                    onClick={() => scrollToId("contact")}
                    className="bg-[#2F6BFF] hover:bg-[#2557DA] text-white"
                  >
                    Meet Founder
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </div>
  );
};

const Hero = () => {
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

      {/* overlay + subtle noise */}
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
                  className="
                    w-[800px]
                    max-h-screen
                    object-contain
                  "
                />
              </div>
            </div>
          </div>
      </Container>
    </section>
  );
};

const About = () => {
  const features = [
    {
      title: "Kegiatan Rutin",
      description:
        "Pelatihan berkala untuk meningkatkan kapasitas UMKM dan generasi muda."
    },
    {
      title: "Kolaborasi Terbuka",
      description:
        "Kerja sama dengan berbagai pihak untuk memperluas dampak bersama."
    },
    {
      title: "Mentoring & Sharing",
      description:
        "Mentoring program digital marketing dan keuangan."
    },
    {
      title: "Dampak Nyata",
      description:
        "Fokus pada hasil terukur bagi UMKM dan generasi muda."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-6">
            <div data-reveal className="reveal">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                Tentang {brand.name}
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Cening Community adalah komunitas kolaboratif yang bergerak di bidang bisnis, pariwisata, dan marketing.
              </p>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((item) => (
                  <Card
                    key={item.title}
                    className="rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-5">
                      <div className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
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

          {/* RIGHT IMAGE (TIDAK DIHAPUS) */}
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

const SpeechSection = () => {
  return (
    <section id="speech" className="py-20 sm:py-24 bg-slate-50">
      <Container>
        {/* HEADER */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Sapa Founder
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl">
            Terima kasih sudah meluangkan waktu untuk mengenal kami lebih dekat.
          </p>
        </div>

        <Tabs defaultValue="founder">

          {/* ================= FOUNDER ================= */}
          <TabsContent value="founder">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

              {/* FOTO + TAB */}
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

                {/* TAB DI BAWAH FOTO */}
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

              {/* CARD KANAN */}
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

                    {/* CTA DI DALAM CARD */}
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

          {/* ================= CO-FOUNDER ================= */}
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
                    <div className="text-sm text-slate-500">Secretary & Treasurer</div>
                    <div className="font-semibold text-slate-900">
                      {speech.coFounder.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {speech.coFounder.role}
                    </div>
                  </div>
                </Card>

                {/* TAB DI BAWAH FOTO */}
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

                    {/* CTA DI DALAM CARD */}
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

const VisionMission = () => {
  return (
    <section id="vision" className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5" data-reveal>
            <div className="reveal">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                Visi & Misi
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Bagian ini menjelaskan arah dan tujuan komunitas, meliputi visi yang ingin dicapai serta misi sebagai langkah strategis untuk mewujudkannya.
              </p>

              <Card className="mt-7 rounded-3xl border-slate-200 shadow-sm">
                <div className="p-7">
                  <div className="text-sm text-slate-500">Visi</div>
                  <div className="mt-2 text-lg font-semibold text-slate-900 leading-snug">
                    Menjadi komunitas penggerak bagi generasi muda dan UMKM untuk tumbuh, berinovasi, berkelanjutan dan bersaing di tingkat global.
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
                      className="rounded-3xl border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-11 w-11 rounded-2xl bg-[#2F6BFF]/10 ring-1 ring-[#2F6BFF]/15 flex items-center justify-center shrink-0">
                            <Icon className="h-5 w-5 text-[#2F6BFF]" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900">{m.title}</div>
                            <div className="mt-2 text-sm text-slate-600 leading-relaxed">
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

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4" data-reveal>
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Dokumentasi Kegiatan
            </h2>
            <p className="mt-3 text-slate-600">
              Dokumentasi kegiatan yang merekam momen pelaksanaan program,
              interaksi peserta, serta proses di lapangan.
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((item, idx) => (
            <Card
              key={idx}
              className="group relative rounded-3xl overflow-hidden border-slate-200 shadow-sm hover:shadow-lg transition-all duration-500"
              data-reveal
            >
              <AspectRatio ratio={4 / 3}>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="
                    h-full w-full object-cover 
                    grayscale group-hover:grayscale-0 
                    transition-all duration-700 ease-in-out
                    group-hover:scale-105
                  "
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="
                  absolute inset-0 
                  bg-black/50 
                  flex items-end 
                  p-6
                  opacity-0 
                  translate-y-4
                  group-hover:opacity-100 
                  group-hover:translate-y-0
                  transition-all duration-500
                ">
                  <p className="text-white text-sm font-medium">
                    {item.description}
                  </p>
                </div>
              </AspectRatio>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

const InstagramSection = () => {
  return (
    <section id="instagram" className="py-20 sm:py-24 bg-slate-50">
      <Container>
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
                <Button asChild className="bg-[#2F6BFF] hover:bg-[#2557DA] text-white">
                  <a href={brand.instagram.url} target="_blank" rel="noreferrer">
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
                        alt={`Instagram mock ${idx + 1}`}
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

const CTA = () => {
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
                Cening Community terbuka untuk kolaborasi proyek hingga pendanaan. Jangan ragu untuk menghubungi kami jika Anda tertarik bekerja sama atau memiliki pertanyaan lebih lanjut!
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  onClick={() => openWhatsApp(brand.whatsapp.phone, brand.whatsapp.prefilled)}
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

const Footer = () => {
  const links = useMemo(
    () => [
      { label: "Beranda", id: "home" },
      { label: "Tentang", id: "about" },
      { label: "Visi & Misi", id: "vision" },
      { label: "Galeri", id: "gallery" },
      { label: "Kontak", id: "contact" },
    ],
    []
  );

  return (
    <footer className="bg-slate-950 text-white">
      <Container className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center overflow-hidden">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <div className="font-semibold tracking-tight">{brand.name}</div>
                <div className="text-xs text-white/70">Community • Youth • Impact</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/75 leading-relaxed max-w-md">
              Website community profile untuk menampilkan konsep, kegiatan, dan cara berkolaborasi dengan komunitas.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-semibold">Akses Cepat</div>
            <div className="mt-4 flex flex-col gap-2">
              {links.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => scrollToId(l.id)}
                  className="text-left text-sm text-white/75 hover:text-white transition-colors"
                >
                  {l.label}
                </button>
              ))}
              <a
                href={brand.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/75 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href={`https://wa.me/${brand.whatsapp.phone}?text=${encodeURIComponent(
                  brand.whatsapp.prefilled
                )}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/75 hover:text-white transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm font-semibold">Kontak</div>
            <div className="mt-4 text-sm text-white/75 leading-relaxed">
              <div>WhatsApp: +{brand.whatsapp.phone} (Sriyanti)</div>
              <div className="mt-2">Instagram: {brand.instagram.username}</div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="text-xs text-white/60">
          © 2026 {brand.name}. All Rights Reserve - Made by Kadek Bintang Januarta
        </div>
      </Container>
    </footer>
  );
};

export default function HomePage() {
  useRevealOnScroll();
  const activeId = useActiveSection(navLinks.map((l) => l.id));

  // Ensures anchor offsets feel right with sticky header
  const topPadRef = useRef(null);
  useEffect(() => {
    if (!topPadRef.current) return;
    // no-op, reserved for future adjustments
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div ref={topPadRef} />
      <SiteNav activeId={activeId} />
      <main>
        <Hero />
        <About />
        <SpeechSection />
        <VisionMission />
        <Gallery />
        <InstagramSection />
        <CTA />
      </main>
      <Footer />

      <WhatsAppFloat phone={brand.whatsapp.phone} message={brand.whatsapp.prefilled} onOpen={openWhatsApp} />
    </div>
  );
}
