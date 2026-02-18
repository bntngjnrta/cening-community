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
} from "lucide-react";
import { WhatsAppFloat } from "../components/site/WhatsAppFloat";
import { cn } from "../lib/utils";

const iconMap = {
  graduation: GraduationCap,
  handshake: Handshake,
  sparkles: Sparkles,
  heart: Heart,
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
            e.target.classList.add("is-revealed");
            obs.unobserve(e.target);
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
            <div className="h-10 w-10 rounded-2xl bg-white/12 ring-1 ring-white/15 backdrop-blur-[14px] flex items-center justify-center shadow-sm">
              <div className="h-5 w-5 rounded-lg bg-gradient-to-br from-white/85 to-white/20" />
            </div>
            <div className="leading-tight text-left">
              <div className="text-white font-semibold tracking-tight">
                {brand.name}
              </div>
              <div className="text-xs text-white/75">Company Profile</div>
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
              Join Now
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
                    Join Now
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
    <section id="home" className="relative min-h-[92vh] flex items-stretch">
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

      <Container className="relative z-10 pt-20 pb-16 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full">
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
                  onClick={() => scrollToId("contact")}
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-white/90 shadow-xl shadow-slate-950/20"
                >
                  Join Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  onClick={() => scrollToId("gallery")}
                  size="lg"
                  variant="secondary"
                  className="bg-white/10 text-white hover:bg-white/15 border border-white/15"
                >
                  View Activities
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
                  <span className="text-sm">Relasi & kolaborasi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#93C5FD]" />
                  <span className="text-sm">Pengembangan potensi</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div data-reveal className="reveal">
              <Card className="rounded-3xl bg-white/10 border-white/15 backdrop-blur-[18px] p-6 shadow-2xl shadow-slate-950/25">
                <div className="text-white font-semibold tracking-tight">
                  Highlight kegiatan terbaru
                </div>
                <p className="mt-1 text-sm text-white/75">
                  Dokumentasi singkat aktivitas komunitas (placeholder — bisa diganti nanti).
                </p>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {galleryImages.slice(0, 3).map((src) => (
                    <div
                      key={src}
                      className="rounded-2xl overflow-hidden ring-1 ring-white/15"
                    >
                      <AspectRatio ratio={1}>
                        <img
                          src={src}
                          alt="Aktivitas komunitas"
                          className="h-full w-full object-cover scale-[1.02]"
                          loading="lazy"
                        />
                      </AspectRatio>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div className="text-xs text-white/70">
                    Update rutin • Ajak teman ikut
                  </div>
                  <Button
                    onClick={() => scrollToId("gallery")}
                    variant="secondary"
                    className="bg-white/10 text-white hover:bg-white/15 border border-white/15"
                  >
                    Lihat semua
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div data-reveal className="reveal">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                About {brand.name}
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Cening Community adalah komunitas yang berfokus pada kegiatan positif, pengembangan
                diri, dan kontribusi sosial. (Teks ini dummy dan mudah Anda edit nanti.)
                Kami percaya kebersamaan yang terarah bisa mengubah ide menjadi aksi nyata.
              </p>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Kegiatan rutin", "Kolaborasi terbuka", "Mentoring & sharing", "Impact nyata"].map(
                  (t) => (
                    <Card
                      key={t}
                      className="rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="p-5">
                        <div className="text-sm font-semibold text-slate-900">{t}</div>
                        <div className="mt-1 text-sm text-slate-600">
                          Placeholder singkat untuk menjelaskan benefit utama.
                        </div>
                      </div>
                    </Card>
                  )
                )}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => scrollToId("contact")}
                  className="bg-[#2F6BFF] hover:bg-[#2557DA] text-white"
                >
                  Gabung Sekarang
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
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
              </Card>
              <div className="mt-4 text-xs text-slate-500">
                Foto placeholder dari Unsplash — bisa diganti dengan dokumentasi Cening Community.
              </div>
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
        <div className="flex flex-col items-start gap-3" data-reveal>
          <h2 className="reveal text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Sambutan Founder
          </h2>
          <p className="reveal text-slate-600 max-w-2xl">
            Pesan pembuka untuk pengunjung website — dapat Anda edit kapan saja.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4" data-reveal>
            <div className="reveal">
              <Card className="rounded-3xl overflow-hidden border-slate-200 shadow-xl">
                <AspectRatio ratio={3 / 4}>
                  <img
                    src={speech.founder.photo}
                    alt="Founder"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
                <div className="p-5">
                  <div className="text-sm text-slate-500">Founder</div>
                  <div className="mt-1 font-semibold text-slate-900">{speech.founder.name}</div>
                  <div className="mt-1 text-sm text-slate-600">{speech.founder.role}</div>
                </div>
              </Card>

              <div className="mt-5">
                <Tabs defaultValue="founder" className="w-full">
                  <TabsList className="w-full grid grid-cols-2">
                    <TabsTrigger value="founder">Founder</TabsTrigger>
                    <TabsTrigger value="cofounder">Co-Founder</TabsTrigger>
                  </TabsList>
                  <TabsContent value="founder" className="mt-4">
                    <Card className="rounded-2xl border-slate-200">
                      <div className="p-5 text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                        {speech.founder.message}
                      </div>
                    </Card>
                  </TabsContent>
                  <TabsContent value="cofounder" className="mt-4">
                    <Card className="rounded-2xl border-slate-200">
                      <div className="p-5 text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                        {speech.coFounder.message}
                      </div>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8" data-reveal>
            <div className="reveal">
              <Card className="rounded-3xl border-slate-200 shadow-xl overflow-hidden">
                <div className="p-7 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-[#2F6BFF]/10 ring-1 ring-[#2F6BFF]/15 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-[#2F6BFF]" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500">Welcome Speech</div>
                      <div className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900">
                        Selamat datang di {brand.name}
                      </div>
                    </div>
                  </div>

                  <Separator className="my-6" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      {
                        title: "Ruang untuk bertumbuh",
                        desc: "Belajar, berkarya, dan mencoba hal baru dengan support system yang solid.",
                      },
                      {
                        title: "Kegiatan yang jelas",
                        desc: "Program sosial dan edukasi yang terencana, bukan sekadar kumpul-kumpul.",
                      },
                      {
                        title: "Jaringan pertemanan",
                        desc: "Kenalan dengan orang baru, kolaborasi project, dan bangun relasi positif.",
                      },
                      {
                        title: "Dampak nyata",
                        desc: "Kontribusi yang bisa dirasakan, dimulai dari hal kecil tapi konsisten.",
                      },
                    ].map((i) => (
                      <div
                        key={i.title}
                        className="rounded-2xl bg-slate-50 border border-slate-200 p-5 hover:bg-white transition-colors"
                      >
                        <div className="font-semibold text-slate-900">{i.title}</div>
                        <div className="mt-2 text-sm text-slate-600 leading-relaxed">{i.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 rounded-2xl bg-[#2F6BFF] text-white p-6 shadow-lg shadow-[#2F6BFF]/15">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <div className="font-semibold">Siap ikut kegiatan berikutnya?</div>
                        <div className="mt-1 text-sm text-white/85">
                          Klik untuk langsung ke bagian kontak.
                        </div>
                      </div>
                      <Button
                        onClick={() => scrollToId("contact")}
                        className="bg-white text-slate-900 hover:bg-white/90"
                      >
                        Kontak Kami
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
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
                Vision & Mission
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Bagian ini menjelaskan arah komunitas: apa yang ingin dicapai (visi) dan bagaimana
                cara mencapainya (misi).
              </p>

              <Card className="mt-7 rounded-3xl border-slate-200 shadow-sm">
                <div className="p-7">
                  <div className="text-sm text-slate-500">Vision</div>
                  <div className="mt-2 text-lg font-semibold text-slate-900 leading-snug">
                    To become an active, inspiring, and impactful community for the younger generation.
                  </div>
                </div>
              </Card>

              <div className="mt-6 text-sm text-slate-500">
                Anda bisa mengganti teks visi/misi sesuai kebutuhan.
              </div>
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

              <Card className="mt-6 rounded-3xl border-slate-200 bg-slate-50">
                <div className="p-7">
                  <div className="text-sm text-slate-500">Mission (ringkas)</div>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                    {[
                      "Organize social and educational activities",
                      "Build solidarity among members",
                      "Empower youth potential",
                      "Contribute positively to society",
                    ].map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-2 rounded-2xl bg-white border border-slate-200 p-4"
                      >
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#2F6BFF]" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
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
              Our Activity Documentation
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              Grid dokumentasi kegiatan (placeholder Unsplash). Minimal 6–9 foto seperti yang Anda
              minta — bisa diganti nanti.
            </p>
          </div>
          <div className="reveal">
            <Button
              onClick={() => scrollToId("contact")}
              variant="secondary"
              className="bg-slate-100 text-slate-900 hover:bg-slate-200"
            >
              Ingin ikut? Kontak
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((src, idx) => (
            <Card
              key={`${src}-${idx}`}
              className="group rounded-3xl overflow-hidden border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
              data-reveal
            >
              <div className="reveal">
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={src}
                    alt={`Aktivitas ${idx + 1}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
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
                Follow untuk update kegiatan, pengumuman, dan dokumentasi terbaru.
              </p>

              <div className="mt-6">
                <Button
                  asChild
                  className="bg-[#2F6BFF] hover:bg-[#2557DA] text-white"
                >
                  <a href={brand.instagram.url} target="_blank" rel="noreferrer">
                    Follow Us on Instagram
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <Card className="mt-7 rounded-3xl border-slate-200 bg-white">
                <div className="p-6">
                  <div className="text-sm font-semibold text-slate-900">Tips</div>
                  <div className="mt-2 text-sm text-slate-600 leading-relaxed">
                    Nanti kita bisa ganti section ini jadi feed Instagram asli (pakai API) jika Anda
                    mau.
                  </div>
                </div>
              </Card>
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
                Interested in Joining Our Community?
              </h2>
              <p className="mt-4 text-white/80 max-w-2xl">
                Klik tombol di bawah untuk menghubungi kami. CTA ini dibuat kontras dengan latar
                biru gelap supaya jelas dan conversion-friendly.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#2F6BFF] hover:bg-[#2557DA] text-white shadow-xl shadow-[#2F6BFF]/20"
                >
                  <a
                    href={`https://wa.me/${brand.whatsapp.phone}?text=${encodeURIComponent(
                      brand.whatsapp.prefilled
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contact Us Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
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
                  <div className="text-white font-semibold">Kontak cepat</div>
                  <div className="mt-2 text-sm text-white/80">
                    WhatsApp: +{brand.whatsapp.phone}
                  </div>
                  <div className="mt-2 text-sm text-white/80">
                    Instagram: {brand.instagram.username}
                  </div>

                  <Separator className="my-6 bg-white/15" />

                  <div className="text-xs text-white/70 leading-relaxed">
                    Setelah live, Anda bisa menambahkan form kontak atau Google Maps di section ini.
                  </div>
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
      { label: "Home", id: "home" },
      { label: "About", id: "about" },
      { label: "Vision & Mission", id: "vision" },
      { label: "Gallery", id: "gallery" },
      { label: "Contact", id: "contact" },
    ],
    []
  );

  return (
    <footer className="bg-slate-950 text-white">
      <Container className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
                <div className="h-5 w-5 rounded-lg bg-gradient-to-br from-white/85 to-white/20" />
              </div>
              <div>
                <div className="font-semibold tracking-tight">{brand.name}</div>
                <div className="text-xs text-white/70">Komunitas yang aktif & berdampak</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/75 leading-relaxed max-w-md">
              Website company profile untuk menampilkan arah, kegiatan, dan cara bergabung dengan
              komunitas. Seluruh foto masih placeholder dan bisa Anda ganti nanti.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-semibold">Quick Links</div>
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
              <div>WhatsApp: +{brand.whatsapp.phone}</div>
              <div className="mt-2">Instagram: {brand.instagram.username}</div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="text-xs text-white/60">
          © 2026 {brand.name}. All Rights Reserved.
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

      <WhatsAppFloat phone={brand.whatsapp.phone} message={brand.whatsapp.prefilled} />
    </div>
  );
}
