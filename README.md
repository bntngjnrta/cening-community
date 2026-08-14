# Cening Community — Web Profile

Website company/community profile modern dan responsif untuk **Cening Community**, sebuah komunitas pemuda yang bergerak dalam pemberdayaan UMKM, literasi keuangan, kewirausahaan, dan inovasi sosial bagi generasi muda.

---

## 🚀 Fitur Utama

- **Modern & Responsive Design**: Tampilan antarmuka yang elegan, mobile-friendly, dan dioptimalkan untuk berbagai ukuran layar menggunakan Tailwind CSS.
- **Dynamic Scroll Spy**: Indikator navigasi aktif otomatis mengikuti posisi scroll pengguna (*IntersectionObserver*).
- **Smooth Scroll & Reveal Animations**: Efek transisi halus dan animasi kemunculan elemen saat di-scroll.
- **Interactive Activity Gallery**: Dokumentasi galeri interaktif dengan paginasi dan *modal dialog preview* detail kegiatan.
- **Smart WhatsApp Launcher**: Integrasi tombol chat mengambang dengan deteksi otomatis perangkat (*mobile app* vs *web browser*).
- **Component-Driven Architecture**: Struktur kode modular berbasis *Single Responsibility Principle* (SRP) untuk kemudahan pemeliharaan dan skalabilitas.

---

## 🛠️ Tech Stack

- **Core**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing & Build**: [React Router](https://reactrouter.com/), [CRACO](https://craco.js.org/)

---

## 📁 Struktur Proyek

```text
cening-community/
├── public/                  # Static assets & HTML template
│   ├── favicon.png
│   └── index.html
├── src/
│   ├── assets/              # Gambar, ilustrasi, dan logo
│   ├── components/
│   │   ├── common/          # Komponen umum (Navbar, Footer, Container)
│   │   │   ├── Container.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Navbar.jsx
│   │   ├── sections/        # Section modular halaman utama
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ContactSection.jsx
│   │   │   ├── GallerySection.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── InstagramSection.jsx
│   │   │   ├── SpeechSection.jsx
│   │   │   └── VisionMissionSection.jsx
│   │   ├── site/            # Komponen widget situs (WhatsApp Float)
│   │   └── ui/              # Primitif UI (Button, Card, Dialog, Sheet, Tabs, dll)
│   ├── hooks/               # Custom React Hooks
│   │   ├── useActiveSection.js
│   │   ├── useRevealOnScroll.js
│   │   └── use-toast.js
│   ├── lib/                 # Fungsi helper & utilitas
│   │   ├── scroll.js
│   │   ├── utils.js
│   │   └── whatsapp.js
│   ├── pages/               # Halaman utama & Loading Screen
│   │   ├── HomePage.jsx
│   │   └── LoadingScreen.jsx
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   └── mock.js              # Data terpusat (brand, kegiatan, tim, visi-misi)
├── jsconfig.json            # Konfigurasi path alias (@/*)
├── package.json
└── tailwind.config.js
```

---

## 💻 Panduan Instalasi & Menjalankan Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) (versi 18 ke atas)
- npm atau yarn

### Langkah Instalasi
1. **Clone repository ini**:
   ```bash
   git clone https://github.com/bntngjnrta/cening-community.git
   cd cening-community
   ```

2. **Install dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan development server**:
   ```bash
   npm start
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

4. **Build untuk produksi**:
   ```bash
   npm run build
   ```

---

## 👤 Author
* **Kadek Bintang Januarta** — [GitHub](https://github.com/bntngjnrta)
