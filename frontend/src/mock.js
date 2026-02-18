// MOCK DATA (frontend-only). Replace with CMS / backend later.

import heroImg from "./assets/hero.jpg";
import founderImg from "./assets/speechFounder.jpg";
import kegiatan1 from "./assets/kegiatan1.jpg";
import kegiatan2 from "./assets/kegiatan2.jpg";
import kegiatan3 from "./assets/kegiatan3.jpg";
import kegiatan4 from "./assets/kegiatan4.jpg";
import kegiatan5 from "./assets/kegiatan5.jpg";
import kegiatan6 from "./assets/kegiatan6.jpg";
import kegiatan7 from "./assets/kegiatan7.jpg";
import kegiatan8 from "./assets/kegiatan8.jpg";
import kegiatan9 from "./assets/kegiatan9.jpg";
export const brand = {
  name: "Cening Community",
  tagline:
    "Ruang tumbuh, berinovasi, dan berkolaborasi untuk generasi masa depan.",
  instagram: {
    username: "@cening_bergerak",
    url: "https://instagram.com/cening_bergerak",
  },
  whatsapp: {
    phone: "6281529171016",
    prefilled: "Hello Cening Community",
  },
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "Tentang" },
  { id: "speech", label: "Sambutan" },
  { id: "vision", label: "Visi & Misi" },
  { id: "gallery", label: "Galeri" },
  { id: "instagram", label: "Instagram" },
  { id: "contact", label: "Kontak" },
];

export const images = {
  hero: heroImg,
  about:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
  speechFounder: founderImg,
  speechCoFounder:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80",
};


export const galleryImages = [
  kegiatan1,
  kegiatan2,
  kegiatan3,
  kegiatan4,
  kegiatan5,
  kegiatan6,
  kegiatan7,
  kegiatan8,
  kegiatan9,
];

export const instagramFeed = [
  "https://images.unsplash.com/photo-1522096823084-2d1aa8411c13?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80",
];

export const speech = {
  founder: {
    name: "Ni Wayan Sriyanti",
    role: "Teknik Industri, Universitas Diponegoro",
    message:
      "Selamat datang di Cening Community. Ini adalah ruang aman untuk belajar, berkarya, dan berbagi hal positif. Kami percaya setiap anak muda punya potensi besar — dan komunitas yang tepat bisa jadi akselerator untuk bertumbuh.\n\nDi sini, kita bergerak bareng: membangun solidaritas, mengasah skill, dan membuat kegiatan yang bermanfaat untuk sekitar. Silakan edit teks ini sesuai kebutuhan.",
    photo: images.speechFounder,
  },
  coFounder: {
    name: "Nama Co-Founder",
    role: "Co-Founder, Cening Community",
    message:
      "Terima kasih sudah mampir. Cening Community terbuka untuk siapa saja yang ingin berkembang dan berkontribusi. Kita akan bikin program sosial, edukasi, dan aktivitas seru yang berdampak nyata.\n\nSilakan edit teks ini sesuai gaya komunikasi komunitas Anda.",
    photo: images.speechCoFounder,
  },
};

export const mission = [
  {
    title: "Kegiatan Sosial & Edukasi",
    description: "Mengadakan aktivitas yang relevan, fun, dan bermanfaat untuk anggota serta masyarakat.",
    icon: "graduation",
  },
  {
    title: "Bangun Solidaritas",
    description: "Menciptakan ruang kolaborasi, saling dukung, dan rasa memiliki yang kuat.",
    icon: "handshake",
  },
  {
    title: "Empower Potensi Anak Muda",
    description: "Mengasah soft-skill, leadership, dan kreativitas lewat program yang konsisten.",
    icon: "sparkles",
  },
  {
    title: "Dampak Positif",
    description: "Bergerak untuk memberi kontribusi nyata dan jadi role model di lingkungan.",
    icon: "heart",
  },
];
