import React, { useMemo } from "react";
import { Container } from "./Container";
import { Separator } from "../ui/separator";
import { brand } from "../../mock";
import { scrollToId } from "../../lib/scroll";
import logo from "../../assets/logo.png";

export const Footer = () => {
  const links = useMemo(
    () => [
      { label: "Beranda", id: "home" },
      { label: "Tentang", id: "about" },
      { label: "Visi & Misi", id: "vision" },
      { label: "Galeri", id: "gallery" },
      { label: "Kontak", id: "contact" },
    ],
    [],
  );

  return (
    <footer className="bg-slate-950 text-white">
      <Container className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white/10 ring-1 ring-white/15 flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <div className="font-semibold tracking-tight">{brand.name}</div>
                <div className="text-xs text-white/70">
                  Community • Youth • Impact
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/75 leading-relaxed max-w-md">
              Website community profile untuk menampilkan konsep, kegiatan, dan
              cara berkolaborasi dengan komunitas.
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
                  brand.whatsapp.prefilled,
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
          © 2026 {brand.name}. All Rights Reserved - Made by Kadek Bintang Januarta
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
