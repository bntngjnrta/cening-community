// MOCK DATA (frontend-only). Replace with CMS / backend later.

import heroImg from "./assets/hero.jpg";
import founderImg from "./assets/speechFounder.jpg";
import aboutImg from "./assets/about.png";
import coFounderImg from "./assets/speechCoFounder.jpg";
import kegiatan1 from "./assets/kegiatan1.jpg";
import kegiatan2 from "./assets/kegiatan2.jpg";
import kegiatan3 from "./assets/kegiatan3.jpg";
import kegiatan4 from "./assets/kegiatan4.jpg";
import kegiatan5 from "./assets/kegiatan5.jpg";
import kegiatan6 from "./assets/kegiatan6.jpg";
import kegiatan7 from "./assets/kegiatan7.jpg";
import kegiatan8 from "./assets/kegiatan8.jpg";
import kegiatan9 from "./assets/kegiatan9.jpg";
import kegiatan10 from "./assets/kegiatan10.jpg";
import kegiatan11 from "./assets/kegiatan11.jpg";
import kegiatan12 from "./assets/kegiatan12.jpg";
import instagram1 from "./assets/ourMascot.jpg";
import instagram2 from "./assets/ourIdea.jpg";
import instagram3 from "./assets/ourLogo.jpg";
import instagram4 from "./assets/cc1.jpg";
import instagram5 from "./assets/cc2.jpg";
import instagram6 from "./assets/kudmd1.jpg";

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
    prefilled: "Hello Cening Community, Saya (masukkan nama anda) ingin bertanya tentang program dan kegiatan yang kalian jalankan. Terima kasih!",
  },
};

export const navLinks = [
  { id: "home", label: "Beranda" },
  { id: "about", label: "Tentang" },
  { id: "speech", label: "Sapa Founder" },
  { id: "vision", label: "Visi & Misi" },
  { id: "gallery", label: "Galeri" },
  { id: "instagram", label: "Instagram" },
  { id: "contact", label: "Kontak" },
];

export const images = {
  hero: heroImg,
  about: aboutImg,
  speechFounder: founderImg,
  speechCoFounder: coFounderImg,
};


export const galleryImages = [
  {
    src: kegiatan1,
    alt: "Kegiatan 1",
    description: "Sesi pelatihan literasi digital bersama peserta dalam suasana diskusi yang interaktif dan kolaboratif."
  },
  {
    src: kegiatan2,
    alt: "Kegiatan 2",
    description: "Dialog santai bersama pelaku UMKM untuk menggali tantangan dan peluang pengembangan usaha."
  },
  {
    src: kegiatan3,
    alt: "Kegiatan 3",
    description: "Kunjungan lapangan dan silaturahmi bersama mitra lokal untuk memperkuat kolaborasi program."
  },
  {
    src: kegiatan4,
    alt: "Kegiatan 4",
    description: "Presentasi materi strategi pemasaran kepada peserta dalam sesi kelas intensif."
  },
  {
    src: kegiatan5,
    alt: "Kegiatan 5",
    description: "Pendampingan langsung kepada pelaku usaha dalam mengembangkan produk dan branding."
  },
  {
    src: kegiatan6,
    alt: "Kegiatan 6",
    description: "Sesi berbagi inspirasi dan motivasi bersama generasi muda untuk membangun semangat kewirausahaan."
  },
  {
    src: kegiatan7,
    alt: "Kegiatan 7",
    description: "Eksplorasi produk lokal sebagai bagian dari penguatan potensi ekonomi kreatif masyarakat."
  },
  {
    src: kegiatan8,
    alt: "Kegiatan 8",
    description: "Proses praktik pembuatan produk kerajinan sebagai bentuk pelatihan keterampilan peserta."
  },
  {
    src: kegiatan9,
    alt: "Kegiatan 9",
    description: "Suasana kelas edukasi digital marketing dengan partisipasi aktif para peserta."
  },
  {
    src: kegiatan10,
    alt: "Kegiatan 10",
    description: "Kebersamaan bersama siswa dalam program penguatan literasi dan kreativitas."
  },
  {
    src: kegiatan11,
    alt: "Kegiatan 11",
    description: "Foto bersama peserta dan tim setelah pelaksanaan kegiatan pemberdayaan masyarakat."
  },
  {
    src: kegiatan12,
    alt: "Kegiatan 12",
    description: "Momen kolaborasi dan refleksi bersama komunitas usai rangkaian program selesai dilaksanakan."
  },
];

export const instagramFeed = [
  instagram1,
  instagram2,
  instagram3,
  instagram6,
  instagram5,
  instagram4,
];

export const speech = {
  founder: {
    name: "Ni Wayan Sriyanti",
    role: "Teknik Industri, Universitas Diponegoro",
    message:
      "“Buat saya, Cening Community bukan sekadar komunitas, tapi ruang tumbuh bersama. Saya ingin Cening menjadi tempat di mana anak muda berani mencoba, berani gagal, dan berani bangkit lagi. \n\n Harapan saya, Cening bisa melahirkan generasi yang tidak hanya kreatif, tapi juga punya mental pemimpin dan dampak nyata bagi UMKM serta masyarakat.”",
    photo: images.speechFounder,
  },
  coFounder: {
    name: "Komang Monica Octaviana",
    role: "Manajemen, Institut Pertanian Bogor",
    message:
      "“Cening Community harus dibangun dengan sistem yang rapi dan berkelanjutan. Saya melihat Cening sebagai komunitas yang profesional, transparan, dan terpercaya. \n\n Harapannya, setiap program yang dijalankan tidak hanya inspiratif, tetapi juga tertata dengan baik agar komunitas ini bisa tumbuh dalam jangka panjang.”",
    photo: images.speechCoFounder,
  },
};

export const mission = [
  {
    title: "Tumbuhkan Jiwa Wirausaha",
    description: "Menumbuhkan jiwa wirausaha dan literasi keuangan sejak dini bagi generasi muda.",
    icon: "trend",
  },
  {
    title: "Dorong Digitalisasi",
    description: "Mendorong pemanfaatan teknologi dan digitalisasi dalam bisnis dan pariwisata.",
    icon: "smartphone",
  },
  {
    title: "Ruang Kolaborasi",
    description: "Menjadi ruang kolaborasi, edukasi, dan pengembangan potensi anak muda.",
    icon: "handshake2",
  },
  {
    title: "Strategi Marketing Kreatif",
    description: "Menghadirkan strategi marketing dan branding yang kreatif, relevan, dan berkelanjutan.",
    icon: "heart",
  },
  {
    title: "Berkontribusi Nyata",
    description: "Berkontribusi nyata dalam penguatan ekonomi lokal hingga nasional.",
    icon: "earth",
  },
];
