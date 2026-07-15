# Pantau Begal - Peta Kerawanan & Intelijen Media Sosial

**Pantau Begal** adalah aplikasi dashboard interaktif berbasis web yang dirancang untuk memetakan, memantau, dan menganalisis tingkat kerawanan aksi pembegalan dan kriminalitas jalanan di wilayah DKI Jakarta dan Bali secara terintegrasi. 

Aplikasi ini mengombinasikan data visual peta interaktif dengan data statistik historis serta simulasi *social media scraper* untuk menyajikan intelijen keamanan yang mutakhir bagi masyarakat umum dan aparat keamanan.

---

## 🌟 Fitur Utama

1. **Peta Kerawanan Interaktif (Leaflet Map)**
   - Menampilkan titik lokasi kejadian (*marker*) begal yang dilengkapi dengan efek berpendar (*glow pulse*) sesuai tingkat kerawanan.
   - Peta memiliki kemampuan interaktif: mengeklik kartu *Live Feed* akan memicu animasi *smooth flyTo* untuk mengarahkan peta ke lokasi kejadian secara otomatis.
   - Fitur pemilihan koordinat langsung dengan mengeklik peta saat mengisi form laporan warga.

2. **Kompilasi Data Media Sosial & Portal Berita (Real-Time Scraper Simulation)**
   - Simulasi *scraper* berkala (setiap 40 detik) yang meniru penarikan data publik dari berbagai platform utama:
     - **X (Twitter)** (e.g., tagar `#BegalJakarta`, `@jkt_alert`)
     - **Instagram** (e.g., `@jktinfo`, `@info_jakpus`)
     - **TikTok** (e.g., video amatir warga)
     - **Facebook Groups** (e.g., Forum Ronda Kewargaan)
     - **Portal Berita** (e.g., Detikcom RSS feed)
   - Setiap postingan yang disimulasikan memiliki tautan langsung (*source URL*) ke platform asal.

3. **Visualisasi Data Statistik (Chart.js)**
   - **5 Kelurahan Terawan (Stacked Bar Chart)**: Menganalisis kelurahan dengan tingkat kerawanan tertinggi yang dikategorikan berdasarkan kelas bahaya (*High*, *Medium*, *Low*).
   - **Kontribusi Platform Data (Doughnut Chart)**: Visualisasi persentase sumber platform yang menyumbang laporan.
   - **Tren Kasus Begal 365 Hari (Line Chart)**: Grafik tren dinamis yang menggambarkan naik-turunnya volume kasus kriminalitas per bulan selama satu tahun terakhir.

4. **Penyaringan Data Canggih (Advanced Filters)**
   - Fitur pencarian instan berbasis kata kunci (*fuzzy search*) untuk menyaring judul, deskripsi detail, jalan, atau nama kelurahan.
   - Dropdown bertingkat (*Cascading Dropdown*) untuk memfilter berdasarkan wilayah kota administrasi dan kelurahan secara spesifik.
   - Filter berdasarkan sumber platform data.

5. **Sistem Laporan Warga Mandiri (Citizen Report Modal)**
   - Form bagi warga untuk melaporkan kejadian baru secara mandiri. Laporan yang dikirimkan akan langsung masuk ke dataset lokal, memperbarui peta, dan menyinkronkan seluruh statistik grafis secara *real-time*.

6. **Panduan Keamanan & Tindakan Darurat**
   - Integrasi tombol panggilan darurat langsung ke **Jakarta Siaga 112** dan **Polda Metro Jaya 110**.
   - Edukasi kriteria penilaian bahaya begal (Bahaya Tinggi, Sedang, dan Rendah) serta tips keselamatan berkendara pada malam hari.

---

## 🛠️ Tech Stack & Integrasi

Aplikasi ini dirancang menggunakan arsitektur modern berbobot ringan untuk menjamin kecepatan pemuatan dan kemudahan pemeliharaan:

* **HTML5**: Struktur semantik yang ramah SEO dan aksesibilitas ramah pengguna.
* **Vanilla CSS (Custom Stylesheet)**: Desain antarmuka premium bertema gelap (*futuristic dark mode*), tata letak fleksibel (*flexbox* & *grid*), transisi animasi mikro yang halus, efek *blur glassmorphism*, dan responsivitas penuh di berbagai ukuran perangkat.
* **Vanilla JavaScript (ES6+)**: Logika inti manajemen *state*, penanganan *event listener*, pemrosesan filter pencarian, simulasi penambahan data, dan integrasi API library eksternal.
* **Leaflet.js**: Engine peta interaktif yang ringan menggunakan CartoDB Voyager Tile Style bertema terang.
* **Chart.js**: Library visualisasi grafik responsif berkinerja tinggi.
* **FontAwesome (v6.4.0)**: Set ikon modern beresolusi tinggi untuk mempercantik UI.

---

## 📁 Struktur Proyek

Berikut adalah struktur file utama di dalam repositori:

```bash
pantau-begal-dki/
│
├── index.html     # Halaman utama dashboard, modal laporan, modal panduan, dan struktur UI.
├── style.css      # Desain tema, skema warna HSL, animasi radar/toast, layout grid, dan responsivitas.
├── app.js         # Logika JavaScript, inisialisasi Leaflet Map, konfigurasi Chart.js, filter pencarian, dan simulator scraper.
├── .gitignore     # Daftar file dan folder sistem/editor yang diabaikan oleh Git.
└── README.md      # Dokumentasi resmi ringkasan dan panduan aplikasi (file ini).
```

---

## 🚀 Cara Menjalankan

Aplikasi ini berjalan sepenuhnya di sisi klien (*client-side*). Anda tidak memerlukan server khusus atau proses build rumit untuk menjalankannya secara lokal:

1. **Clone repositori ini:**
   ```bash
   git clone git@github.com:SanJu26Siwa/pantau-begal-dki.git
   cd pantau-begal-dki
   ```
2. **Buka file `index.html`:**
   - Cukup klik dua kali file [index.html](file:///c:/AI_Trai/test_3/index.html) untuk membukanya langsung di peramban web pilihan Anda (Chrome, Edge, Firefox, Safari).
   - Atau gunakan ekstensi server lokal seperti *Live Server* di VS Code untuk pengalaman pengembangan yang lebih lancar.
