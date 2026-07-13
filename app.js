// ==========================================
// PANTAU BEGAL DKI JAKARTA - CORE APPLICATION (365 HARI TREN & LINK SOSMED)
// ==========================================

// 1. DATASET INSIDEN AWAL DENGAN DETAIL KELURAHAN & SOURCE URL
let incidents = [
  {
    id: 1,
    title: "Begal Motor Bersenjata Tajam di Daan Mogot",
    platform: "twitter",
    username: "@jkt_alert",
    time: "2 jam yang lalu",
    timestamp: Date.now() - 2 * 60 * 60 * 1000,
    region: "Jakarta Barat",
    kecamatan: "Cengkareng",
    kelurahan: "Cengkareng Barat",
    location: "Jl. Daan Mogot Raya KM 13, Cengkareng",
    coords: [-6.1585, 106.7450],
    level: "high",
    details: "Kejadian sekitar pukul 02.15 WIB dini hari. Korban dihadang oleh 4 orang menggunakan 2 sepeda motor matik. Salah satu pelaku mengancam dengan celurit panjang dan berhasil merampas motor Honda Vario korban.",
    sourceUrl: "https://x.com/jkt_alert/status/178901234567"
  },
  {
    id: 2,
    title: "Penjambretan Handphone di Trotoar Sudirman",
    platform: "instagram",
    username: "@info_jakpus",
    time: "4 jam yang lalu",
    timestamp: Date.now() - 4 * 60 * 60 * 1000,
    region: "Jakarta Pusat",
    kecamatan: "Setiabudi",
    kelurahan: "Karet Sudirman",
    location: "Trotoar dekat Stasiun MRT Dukuh Atas",
    coords: [-6.2018, 106.8224],
    level: "medium",
    details: "Jambret handphone terjadi saat korban sedang berswafoto di trotoar Sudirman. Pelaku berboncengan menggunakan motor bebek protolan tanpa plat nomor, melaju dari belakang lalu menyambar HP korban dan langsung tancap gas ke arah Semanggi.",
    sourceUrl: "https://www.instagram.com/p/C6Z789ghIJK/"
  },
  {
    id: 3,
    title: "Rombongan Remaja Bawa Sajam Terlihat Konvoi",
    platform: "tiktok",
    username: "warga_utara99",
    time: "6 jam yang lalu",
    timestamp: Date.now() - 6 * 60 * 60 * 1000,
    region: "Jakarta Utara",
    kecamatan: "Kelapa Gading",
    kelurahan: "Kelapa Gading Barat",
    location: "Jl. Boulevard Barat, Kelapa Gading",
    coords: [-6.1554, 106.9020],
    level: "low",
    details: "Video berdurasi 15 detik memperlihatkan rombongan remaja sekitar 6 motor menyeret celurit di aspal jalanan Kelapa Gading pada pukul 01.30 WIB. Belum dilaporkan adanya korban, warga dihimbau waspada dan menghindari jalan protokol sepi.",
    sourceUrl: "https://www.tiktok.com/@warga_utara99/video/73567890123"
  },
  {
    id: 4,
    title: "Aksi Pembegalan Gagal di Jalan Raya Bogor",
    platform: "facebook",
    username: "Rudi Setiawan (Grup Ronda Jaktim)",
    time: "8 jam yang lalu",
    timestamp: Date.now() - 8 * 60 * 60 * 1000,
    region: "Jakarta Timur",
    kecamatan: "Kramat Jati",
    kelurahan: "Tengah",
    location: "Depan Pertokoan Jl. Raya Bogor, Kramat Jati",
    coords: [-6.2890, 106.8710],
    level: "high",
    details: "Terjadi aksi pembegalan terhadap pengendara motor yang hendak pulang kerja malam sekitar pukul 03.45 WIB. Korban melawan dengan menendang motor pelaku dan berteriak minta tolong. Pelaku panik dan melarikan diri karena warga sekitar keluar mendengar teriakan.",
    sourceUrl: "https://www.facebook.com/groups/ronda.jaktim/posts/890123456/"
  },
  {
    id: 5,
    title: "Polisi Amankan 3 Begal Sajam Tebet",
    platform: "news",
    username: "detikcom",
    time: "12 jam yang lalu",
    timestamp: Date.now() - 12 * 60 * 60 * 1000,
    region: "Jakarta Selatan",
    kecamatan: "Tebet",
    kelurahan: "Tebet Timur",
    location: "Area Flyover Tebet, Jakarta Selatan",
    coords: [-6.2340, 106.8480],
    level: "high",
    details: "Unit Reskrim Polsek Tebet berhasil mengamankan komplotan pelaku begal sadis yang kerap beraksi menggunakan senjata tajam jenis parang. Para pelaku diamankan beserta barang bukti 2 bilah parang dan 1 unit motor hasil curian.",
    sourceUrl: "https://news.detik.com/berita/d-7345678/komplotan-begal-sajam-tebet-diringkus"
  },
  {
    id: 6,
    title: "Perampasan HP di Warung Kopi Kemayoran",
    platform: "twitter",
    username: "@Kemayoran_News",
    time: "15 jam yang lalu",
    timestamp: Date.now() - 15 * 60 * 60 * 1000,
    region: "Jakarta Pusat",
    kecamatan: "Kemayoran",
    kelurahan: "Harapan Mulya",
    location: "Jl. Garuda, Kemayoran (Depan Warkop)",
    coords: [-6.1620, 106.8450],
    level: "medium",
    details: "Seorang pemuda yang sedang asyik bermain game di warkop dihampiri 2 pelaku misterius. Pelaku menodongkan pisau lipat kecil ke leher korban dan merampas HP bermerek iPhone, lalu melarikan diri menggunakan motor matik putih.",
    sourceUrl: "https://x.com/Kemayoran_News/status/178901298765"
  },
  {
    id: 7,
    title: "Upaya Penjambretan Tas Karyawati Pasar Rebo",
    platform: "instagram",
    username: "@jaktim.update",
    time: "18 jam yang lalu",
    timestamp: Date.now() - 18 * 60 * 60 * 1000,
    region: "Jakarta Timur",
    kecamatan: "Ciracas",
    kelurahan: "Rambutan",
    location: "Flyover Pasar Rebo, Ciracas",
    coords: [-6.3050, 106.8620],
    level: "low",
    details: "Seorang karyawati yang baru pulang shift malam hampir menjadi korban begal/jambret tas jinjingnya saat menyeberangi jembatan Pasar Rebo. Korban berpegangan erat pada motornya sehingga tas gagal diambil, pelaku langsung kabur menuju Depok.",
    sourceUrl: "https://www.instagram.com/p/C6Z789ghLMN/"
  },
  {
    id: 8,
    title: "Korban Luka Bacok di Cengkareng Korban Begal",
    platform: "facebook",
    username: "Grup Cengkareng Bersatu",
    time: "20 jam yang lalu",
    timestamp: Date.now() - 20 * 60 * 60 * 1000,
    region: "Jakarta Barat",
    kecamatan: "Cengkareng",
    kelurahan: "Duri Kosambi",
    location: "Jl. Duri Kosambi, Cengkareng",
    coords: [-6.1740, 106.7160],
    level: "high",
    details: "Laporan dari grup warga melaporkan aksi pembegalan yang mengakibatkan korban luka bacok di bahu kiri karena mencoba mempertahankan motor Aerox miliknya. Korban dilarikan ke RS terdekat oleh pengendara ojek online.",
    sourceUrl: "https://www.facebook.com/groups/cengkareng.bersatu/posts/890123789/"
  },
  {
    id: 9,
    title: "Begal Sajam Serang Wisatawan Asing di Sunset Road Kuta",
    platform: "twitter",
    username: "@bali_crime",
    time: "1 hari yang lalu",
    timestamp: Date.now() - 24 * 60 * 60 * 1000,
    region: "Badung",
    kecamatan: "Kuta",
    kelurahan: "Seminyak",
    location: "Jl. Sunset Road, Seminyak, Kuta",
    coords: [-8.7020, 115.1785],
    level: "high",
    details: "Aksi begal jalanan menggunakan parang menimpa pemotor asing yang melintas dini hari. Sepeda motor matik sewaan dan tas korban dirampas pelaku berboncengan.",
    sourceUrl: "https://www.balipost.com/news/begal-kuta-sunset-road"
  },
  {
    id: 10,
    title: "Penjambretan Kalung Wisatawan di Ubud Gianyar",
    platform: "instagram",
    username: "@ubud_news",
    time: "2 hari yang lalu",
    timestamp: Date.now() - 48 * 60 * 60 * 1000,
    region: "Gianyar",
    kecamatan: "Ubud",
    kelurahan: "Ubud",
    location: "Jl. Raya Ubud, Gianyar",
    coords: [-8.5069, 115.2625],
    level: "medium",
    details: "Jambret kalung menimpa turis asing saat berjalan kaki di trotoar Ubud malam hari. Pelaku pemotor matik memotong jalan dan langsung menyambar kalung emas korban.",
    sourceUrl: "https://www.balipost.com/news/ubud-jambret-wisman"
  },
  {
    id: 11,
    title: "Indikasi Konvoi Bawa Sajam Diamankan Pecalang di Renon",
    platform: "facebook",
    username: "Grup Info Denpasar Bali",
    time: "3 hari yang lalu",
    timestamp: Date.now() - 72 * 60 * 60 * 1000,
    region: "Denpasar",
    kecamatan: "Denpasar Selatan",
    kelurahan: "Renon",
    location: "Kawasan Lapangan Niti Mandala Renon, Denpasar",
    coords: [-8.6738, 115.2285],
    level: "low",
    details: "Petugas keamanan adat Pecalang beserta Kepolisian mengamankan 3 remaja pembawa besi tajam yang berkonvoi mencurigakan di malam hari. Warga diminta melapor jika melihat kelompok serupa.",
    sourceUrl: "https://www.balipost.com/news/konvoi-sajam-renon"
  }
];

// Mapping Kelurahan berdasarkan Kota Administrasi / Kabupaten
let kelurahanMapping = {
  "Jakarta Pusat": ["Karet Sudirman", "Harapan Mulya", "Johar Baru", "Cempaka Putih Timur"],
  "Jakarta Utara": ["Kelapa Gading Barat", "Pluit", "Sunter Agung"],
  "Jakarta Barat": ["Cengkareng Barat", "Duri Kosambi", "Tomang"],
  "Jakarta Selatan": ["Tebet Timur", "Pasar Minggu", "Kebayoran Lama"],
  "Jakarta Timur": ["Tengah", "Rambutan", "Klender", "Pulogadung", "Gedong"],
  "Denpasar": ["Renon", "Sanur", "Panjer", "Kesiman"],
  "Badung": ["Seminyak", "Kuta", "Jimbaran", "Canggu"],
  "Gianyar": ["Sayan", "Ubud", "Sukawati"],
  "Buleleng": ["Singaraja", "Lovina"],
  "Tabanan": ["Kediri", "Marga"]
};

// DERET WAKTU BULANAN HISTORIS (365 HARI TERAKHIR)
let monthlyHistoricalData = {
  labels: ["Jul 25", "Agu 25", "Sep 25", "Okt 25", "Nov 25", "Des 25", "Jan 26", "Feb 26", "Mar 26", "Apr 26", "Mei 26", "Jun 26", "Jul 26"],
  data: [28, 32, 25, 30, 35, 42, 38, 29, 31, 34, 40, 37, 8] // Jul 26 berjalan, awalnya disinkronkan dengan total data aktif
};

// Platform Tracking Counter (Simulasi pencarian sosmed)
let platformStats = {
  twitter: 1482,
  instagram: 934,
  tiktok: 561,
  facebook: 285,
  news: 150,
  citizen: 8
};

// STATE APLIKASI
let map;
let markerGroup;
let chartRegion;
let chartSource;
let chartTrend; // Grafik Tren Garis 365 Hari
let selectedMarkerCoords = null; 

// INISIALISASI APLIKASI
document.addEventListener("DOMContentLoaded", () => {
  initMap();
  initCharts();
  renderFeed();
  updateStats();
  setupEventListeners();
  
  // Memulai pemantauan sosial media simulasi
  startSocialMediaSimulation();
});

// INISIALISASI PETA LEAFLET (TEMA TERANG VOYAGER)
function initMap() {
  const jakartaCenter = [-6.2088, 106.8456];
  
  map = L.map('map', {
    zoomControl: true,
    minZoom: 10,
    maxZoom: 16
  }).setView(jakartaCenter, 11);

  // Menggunakan CartoDB Voyager tile layer bertema terang
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  markerGroup = L.layerGroup().addTo(map);

  // Menambahkan marker insiden ke peta
  plotMarkers(incidents);

  // Pasang listener klik pada peta untuk memudahkan pelaporan mandiri
  map.on('click', (e) => {
    const { lat, lng } = e.latlng;
    selectedMarkerCoords = [lat, lng];
    
    // Isi otomatis form koordinat
    document.getElementById("report-lat").value = lat.toFixed(6);
    document.getElementById("report-lng").value = lng.toFixed(6);
    
    showToast("Koordinat Terpilih", `Koordinat diisi otomatis: ${lat.toFixed(4)}, ${lng.toFixed(4)}`, "info");
    openModal("modal-report");
  });
}

// Custom DivIcon Maker untuk Pin Berpendar (Pulse/Glow effect)
function createCustomIcon(level) {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `<div class="marker-pin ${level}"></div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
  });
}

// Plot Markers ke peta
function plotMarkers(filteredData) {
  markerGroup.clearLayers();
  
  filteredData.forEach(item => {
    const customIcon = createCustomIcon(item.level);
    
    // Pop up peta dilengkapi dengan tombol "Lihat Postingan Asli" yang dapat diklik
    const popupContent = `
      <div style="font-family: var(--font-sans); width: 220px; color: var(--text-primary);">
        <h4 style="margin-bottom: 5px; color: var(--text-primary); font-size: 0.9rem; font-weight: 700;">${item.title}</h4>
        <div style="display: flex; justify-content: space-between; font-size: 0.7rem; color: var(--text-secondary); margin-bottom: 8px;">
          <span><i class="${getPlatformIconClass(item.platform)}"></i> ${item.username}</span>
          <span>${item.time}</span>
        </div>
        <p style="font-size: 0.75rem; margin-bottom: 8px; color: var(--text-secondary); line-height:1.4;">${item.details.substring(0, 80)}...</p>
        
        <div style="margin-bottom: 8px;">
          <a href="${item.sourceUrl}" target="_blank" style="font-size: 0.7rem; color: var(--color-cyan); font-weight: 800; text-decoration: none; display: inline-flex; align-items: center; gap: 0.25rem;">
            <span><i class="fa-solid fa-circle-play"></i> Tonton/Baca Sumber</span>
            <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.6rem;"></i>
          </a>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(0,0,0,0.08); padding-top: 8px; font-size: 0.7rem;">
          <div style="color: var(--color-cyan); font-weight:600;">
            <i class="fa-solid fa-location-dot"></i> ${item.kelurahan}, ${item.region.split(' ')[1]}
          </div>
          <span class="card-badge ${item.level}">${item.level.toUpperCase()}</span>
        </div>
      </div>
    `;
    
    const marker = L.marker(item.coords, { icon: customIcon }).bindPopup(popupContent);
    markerGroup.addLayer(marker);
    
    item.marker = marker;
  });

  document.getElementById("map-marker-count").textContent = `${filteredData.length} insiden dipetakan`;
}

// Helper ikon platform
function getPlatformIconClass(platform) {
  switch (platform) {
    case 'twitter': return 'fa-brands fa-x-twitter card-platform-icon twitter';
    case 'instagram': return 'fa-brands fa-instagram card-platform-icon instagram';
    case 'tiktok': return 'fa-brands fa-tiktok card-platform-icon tiktok';
    case 'facebook': return 'fa-brands fa-facebook-f card-platform-icon facebook';
    case 'news': return 'fa-regular fa-newspaper card-platform-icon news';
    case 'citizen': return 'fa-solid fa-users-viewfinder card-platform-icon citizen';
    default: return 'fa-solid fa-globe';
  }
}

// RENDERING LIVE FEED (DENGAN TOMBOL LINK POST/BERITA YANG BISA DIKLIK)
function renderFeed() {
  const container = document.getElementById("feed-container");
  const searchQuery = document.getElementById("filter-search").value.toLowerCase();
  const selectedRegion = document.getElementById("filter-region").value;
  const selectedKelurahan = document.getElementById("filter-kelurahan").value;
  const selectedPlatform = document.getElementById("filter-platform").value;

  let filtered = incidents.sort((a, b) => b.timestamp - a.timestamp);

  filtered = filtered.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery) || 
                          item.location.toLowerCase().includes(searchQuery) ||
                          item.details.toLowerCase().includes(searchQuery) ||
                          item.kelurahan.toLowerCase().includes(searchQuery);
    const matchesRegion = selectedRegion === "" || 
                          (selectedRegion === "DKI Jakarta" && ["Jakarta Pusat", "Jakarta Utara", "Jakarta Barat", "Jakarta Selatan", "Jakarta Timur"].includes(item.region)) ||
                          (selectedRegion === "Bali" && ["Denpasar", "Badung", "Gianyar", "Buleleng", "Tabanan"].includes(item.region)) ||
                          item.region === selectedRegion;
    const matchesKelurahan = selectedKelurahan === "" || item.kelurahan === selectedKelurahan;
    const matchesPlatform = selectedPlatform === "" || item.platform === selectedPlatform;
    
    return matchesSearch && matchesRegion && matchesKelurahan && matchesPlatform;
  });

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="fa-solid fa-magnifying-glass-minus" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
        <p>Tidak ada laporan begal yang cocok dengan kriteria filter.</p>
      </div>
    `;
    plotMarkers([]); 
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = `incident-card ${item.level}`;
    
    // Desain kartu di feed menyertakan tombol klik langsung "Buka Sumber"
    card.innerHTML = `
      <div class="card-header">
        <div class="card-source-info">
          <i class="${getPlatformIconClass(item.platform)}"></i>
          <span class="card-source-name">${item.username}</span>
        </div>
        <span class="card-time">${item.time}</span>
      </div>
      <h3 style="font-size: 0.85rem; margin-bottom: 0.25rem; font-weight:700; color: var(--text-primary);">${item.title}</h3>
      <p class="card-text">${item.details}</p>
      <div class="card-footer">
        <div class="card-location">
          <i class="fa-solid fa-location-dot"></i> Kel. ${item.kelurahan}, ${item.region.split(' ')[1]}
        </div>
        <div style="display: flex; align-items: center; gap: 0.4rem;">
          <a href="${item.sourceUrl}" target="_blank" class="action-btn source-link-btn" style="padding: 0.2rem 0.5rem; font-size: 0.65rem; display: flex; align-items: center; gap: 0.25rem; border-color: rgba(8, 145, 178, 0.3); color: var(--color-cyan); background: rgba(8, 145, 178, 0.02); text-decoration: none;">
            <span>Buka Sumber</span>
            <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.6rem;"></i>
          </a>
          <span class="card-badge ${item.level}">${item.level}</span>
        </div>
      </div>
    `;

    // Klik tombol sumber akan membuka tab baru dan mencegah peta bergerak ke lokasi marker (stopPropagation)
    const linkBtn = card.querySelector(".source-link-btn");
    if (linkBtn) {
      linkBtn.addEventListener("click", (e) => {
        e.stopPropagation();
      });
    }

    // Klik kartu utama akan menggeser peta
    card.addEventListener("click", () => {
      if (item.coords) {
        map.flyTo(item.coords, 14, {
          animate: true,
          duration: 1.5
        });
        
        setTimeout(() => {
          if (item.marker) {
            item.marker.openPopup();
          }
        }, 1200);
      }
    });

    container.appendChild(card);
  });

  plotMarkers(filtered);
}

// HITUNG TOTAL AKUMULATIF TAHUNAN (365 HARI)
function getYearlyTotal() {
  // Jumlahkan 12 bulan historis lalu tambahkan data aktif saat ini (bulan berjalan)
  const historicalSum = monthlyHistoricalData.data.slice(0, 12).reduce((a, b) => a + b, 0);
  return historicalSum + incidents.length;
}

// UPDATE STATISTICS
function updateStats() {
  document.getElementById("stat-total-incidents").textContent = incidents.length;
  
  const highRiskCount = incidents.filter(i => i.level === 'high').length;
  const statusElement = document.getElementById("stat-main-hazard");
  
  if (highRiskCount >= 8) {
    statusElement.textContent = "AWAS (RAWAN TINGGI)";
    statusElement.style.color = "var(--color-high)";
  } else if (highRiskCount >= 4) {
    statusElement.textContent = "SIAGA (SEDANG)";
    statusElement.style.color = "var(--color-medium)";
  } else {
    statusElement.textContent = "WASPADA (RENDAH)";
    statusElement.style.color = "var(--color-low)";
  }

  // Update nilai statistik 365 hari
  const yearlyTotal = getYearlyTotal();
  document.getElementById("stat-total-yearly-count").textContent = yearlyTotal;
  document.getElementById("stat-yearly-total").textContent = `Total: ${yearlyTotal} Kasus`;

  // Sinkronisasi teks counter tracker atas (Social Trackers)
  const sumPlatformCount = Object.values(platformStats).reduce((a, b) => a + b, 0);
  document.getElementById("total-tracked-posts").textContent = `${sumPlatformCount.toLocaleString('id-ID')} posts`;
  
  document.getElementById("count-twitter").textContent = platformStats.twitter.toLocaleString('id-ID');
  document.getElementById("count-instagram").textContent = platformStats.instagram.toLocaleString('id-ID');
  document.getElementById("count-tiktok").textContent = platformStats.tiktok.toLocaleString('id-ID');
  document.getElementById("count-facebook").textContent = platformStats.facebook.toLocaleString('id-ID');
  document.getElementById("count-news").textContent = platformStats.news.toLocaleString('id-ID');
}

// Dapatkan data kelurahan terawan
function getTopKelurahans() {
  let counts = {};
  incidents.forEach(item => {
    const name = `${item.kelurahan} (${item.region.split(' ')[1]})`;
    if (!counts[name]) {
      counts[name] = { total: 0, high: 0, medium: 0, low: 0 };
    }
    counts[name].total++;
    counts[name][item.level]++;
  });
  
  let sorted = Object.entries(counts).sort((a, b) => b[1].total - a[1].total);
  let top5 = sorted.slice(0, 5);
  
  return {
    labels: top5.map(entry => entry[0]),
    high: top5.map(entry => entry[1].high),
    medium: top5.map(entry => entry[1].medium),
    low: top5.map(entry => entry[1].low)
  };
}

// INISIALISASI GRAFIK CHART.JS (TERMASUK GRAFIK TREN 365 HARI)
function initCharts() {
  // Chart 1: 5 Kelurahan Terawan (Stacked Bar)
  const ctxRegion = document.getElementById('chart-region').getContext('2d');
  const topKelurahanData = getTopKelurahans();

  chartRegion = new Chart(ctxRegion, {
    type: 'bar',
    data: {
      labels: topKelurahanData.labels,
      datasets: [
        {
          label: 'Bahaya Tinggi',
          data: topKelurahanData.high,
          backgroundColor: '#e11d48', // Merah
          borderColor: '#be123c',
          borderWidth: 1,
          borderRadius: { topLeft: 4, bottomLeft: 4 }
        },
        {
          label: 'Bahaya Sedang',
          data: topKelurahanData.medium,
          backgroundColor: '#ea580c', // Oranye
          borderColor: '#c2410c',
          borderWidth: 1
        },
        {
          label: 'Bahaya Rendah',
          data: topKelurahanData.low,
          backgroundColor: '#ca8a04', // Kuning
          borderColor: '#a16207',
          borderWidth: 1,
          borderRadius: { topRight: 4, bottomRight: 4 }
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: '#475569',
            font: { family: 'Plus Jakarta Sans', size: 8, weight: 'bold' },
            boxWidth: 8,
            boxHeight: 8,
            padding: 8
          }
        },
        tooltip: {
          backgroundColor: '#ffffff',
          titleColor: '#0f172a',
          bodyColor: '#475569',
          borderColor: 'rgba(0,0,0,0.08)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          stacked: true,
          grid: { color: 'rgba(15, 23, 42, 0.05)' },
          ticks: { color: '#475569', font: { family: 'Plus Jakarta Sans', size: 9 }, stepSize: 1 }
        },
        y: {
          stacked: true,
          grid: { display: false },
          ticks: { color: '#0f172a', font: { family: 'Plus Jakarta Sans', size: 9, weight: 'bold' } }
        }
      }
    }
  });

  // Chart 2: Kontribusi Platform Data (Doughnut Chart)
  const ctxSource = document.getElementById('chart-source').getContext('2d');
  const platforms = ["X (Twitter)", "Instagram", "TikTok", "Facebook", "Portal Berita", "Laporan Warga"];
  const getPlatformCounts = () => {
    return [
      incidents.filter(item => item.platform === 'twitter').length,
      incidents.filter(item => item.platform === 'instagram').length,
      incidents.filter(item => item.platform === 'tiktok').length,
      incidents.filter(item => item.platform === 'facebook').length,
      incidents.filter(item => item.platform === 'news').length,
      incidents.filter(item => item.platform === 'citizen').length
    ];
  };

  chartSource = new Chart(ctxSource, {
    type: 'doughnut',
    data: {
      labels: platforms,
      datasets: [{
        data: getPlatformCounts(),
        backgroundColor: [
          '#1da1f2',
          '#dc2743',
          '#64748b',
          '#1877f2',
          '#ef4444',
          '#0891b2'
        ],
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: '#475569',
            font: { family: 'Plus Jakarta Sans', size: 8, weight: 600 },
            boxWidth: 8,
            boxHeight: 8,
            padding: 6
          }
        },
        tooltip: {
          backgroundColor: '#ffffff',
          titleColor: '#0f172a',
          bodyColor: '#475569',
          borderColor: 'rgba(0,0,0,0.08)',
          borderWidth: 1
        }
      },
      cutout: '65%'
    }
  });

  // Chart 3: Tren Kasus Begal (Line Chart 365 Hari)
  const ctxTrend = document.getElementById('chart-trend').getContext('2d');
  
  // Sinkronisasi data awal bulan berjalan dengan jumlah kasus aktif saat ini
  monthlyHistoricalData.data[monthlyHistoricalData.data.length - 1] = incidents.length;

  chartTrend = new Chart(ctxTrend, {
    type: 'line',
    data: {
      labels: monthlyHistoricalData.labels,
      datasets: [{
        label: 'Volume Kasus Bulanan',
        data: monthlyHistoricalData.data,
        borderColor: '#9333ea', // Ungu premium
        backgroundColor: 'rgba(147, 51, 234, 0.06)',
        borderWidth: 3,
        fill: true,
        tension: 0.35, // Membuat garis melengkung dinamis
        pointBackgroundColor: '#9333ea',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 1.5,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#ffffff',
          titleColor: '#0f172a',
          bodyColor: '#475569',
          borderColor: 'rgba(0,0,0,0.08)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(15, 23, 42, 0.03)' },
          ticks: { color: '#475569', font: { family: 'Plus Jakarta Sans', size: 8 } }
        },
        y: {
          grid: { color: 'rgba(15, 23, 42, 0.05)' },
          ticks: { color: '#475569', font: { family: 'Plus Jakarta Sans', size: 9 } },
          min: 0
        }
      }
    }
  });
}

// Perbarui data visual grafik
function updateCharts() {
  if (chartRegion && chartSource && chartTrend) {
    // 1. Perbarui 5 Kelurahan Terawan (Stacked)
    const topKelData = getTopKelurahans();
    chartRegion.data.labels = topKelData.labels;
    chartRegion.data.datasets[0].data = topKelData.high;
    chartRegion.data.datasets[1].data = topKelData.medium;
    chartRegion.data.datasets[2].data = topKelData.low;
    chartRegion.update();

    // 2. Perbarui donat kontribusi platform
    chartSource.data.datasets[0].data = [
      incidents.filter(item => item.platform === 'twitter').length,
      incidents.filter(item => item.platform === 'instagram').length,
      incidents.filter(item => item.platform === 'tiktok').length,
      incidents.filter(item => item.platform === 'facebook').length,
      incidents.filter(item => item.platform === 'news').length,
      incidents.filter(item => item.platform === 'citizen').length
    ];
    chartSource.update();

    // 3. Perbarui line chart tren 365 hari (sesuaikan data bulan berjalan)
    monthlyHistoricalData.data[monthlyHistoricalData.data.length - 1] = incidents.length;
    chartTrend.data.datasets[0].data = monthlyHistoricalData.data;
    chartTrend.update();
  }
}

// LOGIKA DROPDOWN BERTINGKAT & PERGESERAN FOKUS PETA
function handleRegionChange() {
  const regionSelect = document.getElementById("filter-region");
  const kelurahanSelect = document.getElementById("filter-kelurahan");
  const selectedRegion = regionSelect.value;
  
  kelurahanSelect.innerHTML = `<option value="">Pilih Kelurahan</option>`;
  
  if (selectedRegion === "" || selectedRegion === "DKI Jakarta" || selectedRegion === "Bali") {
    kelurahanSelect.disabled = true;
    
    // Geser peta berdasarkan Provinsi atau Default
    if (selectedRegion === "Bali") {
      map.flyTo([-8.4095, 115.1889], 9);
    } else {
      // Default / DKI Jakarta
      map.flyTo([-6.2088, 106.8456], 11);
    }
  } else {
    kelurahanSelect.disabled = false;
    
    const kelurahans = kelurahanMapping[selectedRegion] || [];
    
    incidents.forEach(item => {
      if (item.region === selectedRegion && !kelurahans.includes(item.kelurahan)) {
        kelurahans.push(item.kelurahan);
      }
    });

    kelurahans.sort().forEach(kel => {
      const option = document.createElement("option");
      option.value = kel;
      option.textContent = kel;
      kelurahanSelect.appendChild(option);
    });

    // Koordinat pusat wilayah untuk pergeseran otomatis peta
    const regionCoordinates = {
      "Jakarta Pusat": [-6.1864, 106.8340],
      "Jakarta Utara": [-6.1384, 106.8664],
      "Jakarta Barat": [-6.1683, 106.7588],
      "Jakarta Selatan": [-6.2615, 106.8106],
      "Jakarta Timur": [-6.2250, 106.9004],
      "Denpasar": [-8.6705, 115.2126],
      "Badung": [-8.6500, 115.1764],
      "Gianyar": [-8.5300, 115.2625],
      "Buleleng": [-8.1300, 115.0880],
      "Tabanan": [-8.5414, 115.1278]
    };

    if (regionCoordinates[selectedRegion]) {
      map.flyTo(regionCoordinates[selectedRegion], 12);
    }
  }

  renderFeed();
}

// EVENT LISTENERS SETUP
function setupEventListeners() {
  // Modal controllers
  document.getElementById("btn-open-report").addEventListener("click", () => openModal("modal-report"));
  document.getElementById("btn-close-report-modal").addEventListener("click", () => closeModal("modal-report"));
  
  document.getElementById("btn-open-safety-tips").addEventListener("click", () => openModal("modal-safety-tips"));
  document.getElementById("btn-close-safety-modal").addEventListener("click", () => closeModal("modal-safety-tips"));

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      closeModal(e.target.id);
    }
  });

  // Filter input listeners
  document.getElementById("filter-search").addEventListener("input", renderFeed);
  document.getElementById("filter-region").addEventListener("change", handleRegionChange);
  document.getElementById("filter-kelurahan").addEventListener("change", renderFeed);
  document.getElementById("filter-platform").addEventListener("change", renderFeed);

  // Form Submit Incident Listener
  const form = document.getElementById("form-submit-incident");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const title = document.getElementById("report-title").value;
    const region = document.getElementById("report-region").value;
    const level = document.getElementById("report-level").value;
    const kecamatan = document.getElementById("report-kecamatan").value.trim();
    const kelurahan = document.getElementById("report-kelurahan").value.trim();
    const location = document.getElementById("report-location").value;
    const lat = parseFloat(document.getElementById("report-lat").value);
    const lng = parseFloat(document.getElementById("report-lng").value);
    const details = document.getElementById("report-details").value;

    const newId = incidents.length + 1;

    if (kelurahanMapping[region] && !kelurahanMapping[region].includes(kelurahan)) {
      kelurahanMapping[region].push(kelurahan);
    }

    // Tambahkan data baru ke dataset
    const newIncident = {
      id: newId,
      title: title,
      platform: "citizen",
      username: "Laporan Warga (Terverifikasi)",
      time: "Baru saja",
      timestamp: Date.now(),
      region: region,
      kecamatan: kecamatan,
      kelurahan: kelurahan,
      location: location,
      coords: [lat, lng],
      level: level,
      details: details,
      // Tautan ke laporan sistem warga DKI
      sourceUrl: `https://jaki.jakarta.go.id/report/${newId}`
    };

    incidents.push(newIncident);
    
    // Perbarui hitungan platform laporan warga
    platformStats.citizen++;

    // Tambahkan satu poin pada data trend bulan berjalan
    monthlyHistoricalData.data[monthlyHistoricalData.data.length - 1]++;

    // Jika filter wilayah saat ini sama dengan wilayah baru, perbarui dropdown kelurahannya
    const currentFilterRegion = document.getElementById("filter-region").value;
    if (currentFilterRegion === region) {
      handleRegionChange();
    }

    // Render ulang tampilan & statistik
    renderFeed();
    updateStats();
    updateCharts();
    
    map.flyTo([lat, lng], 13);

    closeModal("modal-report");
    form.reset();
    showToast("Laporan Diterima", `Laporan di Kelurahan ${kelurahan} telah dipetakan di sistem.`, "success");
  });
}

// Modal open/close helpers
function openModal(modalId) {
  document.getElementById(modalId).classList.add("active");
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
}

// SYSTEM TOAST NOTIFICATIONS
function showToast(title, description, type = "info") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let iconClass = "fa-solid fa-info-circle";
  if (type === "success") iconClass = "fa-solid fa-circle-check";
  if (type === "warning") iconClass = "fa-solid fa-triangle-exclamation";
  if (type === "error") iconClass = "fa-solid fa-circle-xmark";

  toast.innerHTML = `
    <div class="toast-icon">
      <i class="${iconClass}"></i>
    </div>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      <div class="toast-desc">${description}</div>
    </div>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "toastIn 0.3s reverse forwards";
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 5000);
}

// REALTIME SOCIAL MEDIA SCANNER SIMULATION (DENGAN LINK SOSMED & TREN)
function startSocialMediaSimulation() {
  const simulatedIncidents = [
    {
      title: "Penjambretan Kalung Emas di Johar Baru",
      platform: "twitter",
      username: "@jkt_warn",
      region: "Jakarta Pusat",
      kecamatan: "Johar Baru",
      kelurahan: "Johar Baru",
      location: "Jl. Percetakan Negara, Johar Baru",
      coords: [-6.1880, 106.8570],
      level: "medium",
      details: "Aksi penjambretan menimpa ibu rumah tangga yang sedang berjalan pagi. Kalung emas 10 gram raib ditarik pelaku berjaket ojol gadungan. Korban shock tapi tidak terluka.",
      sourceUrl: "https://x.com/jkt_warn/status/178901201928"
    },
    {
      title: "Begal Rampas Motor Wisatawan Asing di Canggu",
      platform: "instagram",
      username: "@canggu.update",
      region: "Badung",
      kecamatan: "Kuta Utara",
      kelurahan: "Canggu",
      location: "Jl. Raya Batu Bolong, Canggu, Badung",
      coords: [-8.6477, 115.1385],
      level: "high",
      details: "Aksi begal motor sewaan menimpa turis asing saat berkendara malam di kawasan sepi Canggu. Pelaku mengancam menggunakan sebilah pisau panjang dan berhasil merampas motor Yamaha NMAX korban.",
      sourceUrl: "https://www.balipost.com/news/begal-wisman-canggu"
    },
    {
      title: "Kelompok Motor Berparang Dibubarkan Tim Perintis",
      platform: "news",
      username: "PoskotaNews",
      region: "Jakarta Timur",
      kecamatan: "Duren Sawit",
      kelurahan: "Klender",
      location: "Jl. I Gusti Ngurah Rai, Klender",
      coords: [-6.2205, 106.8920],
      level: "low",
      details: "Tim Perintis Presisi Polres Metro Jakarta Timur membubarkan sekelompok pemuda bersenjata tajam yang berkumpul di pinggir jalan Klender pukul 02.40 WIB. Dua pemuda beserta celurit diamankan.",
      sourceUrl: "https://poskotanews.co.id/metro/2026/07/tim-perintis-amankan-begal-klender"
    },
    {
      title: "Aksi Jambret Handphone Terekam CCTV di Lovina Bali",
      platform: "tiktok",
      username: "@lovinanews",
      region: "Buleleng",
      kecamatan: "Buleleng",
      kelurahan: "Lovina",
      location: "Jalan Raya Lovina, Kalibukbuk, Buleleng",
      coords: [-8.1580, 115.0240],
      level: "medium",
      details: "Penjambretan HP milik warga yang sedang duduk di depan toko kelontong terekam kamera pengawas. Pelaku bermotor matik tanpa plat kabur ke arah timur Singaraja.",
      sourceUrl: "https://www.balipost.com/news/jambret-lovina-cctv"
    },
    {
      title: "Begal Sadis Rampas Motor Ninja di Penjaringan",
      platform: "instagram",
      username: "@penjaringan.info",
      region: "Jakarta Utara",
      kecamatan: "Penjaringan",
      kelurahan: "Pluit",
      location: "Kawasan Waduk Pluit, Penjaringan",
      coords: [-6.1150, 106.7990],
      level: "high",
      details: "Aksi pembegalan motor sport Kawasaki Ninja terjadi di kawasan sepi Waduk Pluit pukul 03.10 WIB. Pelaku berjumlah 6 orang dengan 3 motor melukai tangan kanan korban dengan senjata tajam sebelum kabur membawa motor.",
      sourceUrl: "https://www.instagram.com/p/C6Z789ghXYZ/"
    },
    {
      title: "Pengejaran Pelaku Jambret oleh Warga Pasar Minggu",
      platform: "facebook",
      username: "Grup FB Pasar Minggu Raya",
      region: "Jakarta Selatan",
      kecamatan: "Pasar Minggu",
      kelurahan: "Pasar Minggu",
      location: "Jl. Raya Ragunan, Pasar Minggu",
      coords: [-6.2840, 106.8390],
      level: "medium",
      details: "Warga mengejar terduga begal/jambret tas yang sempat terjatuh dari motornya di simpang Ragunan. Salah satu pelaku tertangkap dan diserahkan ke polisi, sementara rekannya kabur membawa barang jarahan.",
      sourceUrl: "https://www.facebook.com/groups/pasar.minggu.raya/posts/890123999/"
    },
    {
      title: "Indikasi Begal Mengintai di Layur Pulogadung",
      platform: "tiktok",
      username: "street_hunter_jkt",
      region: "Jakarta Timur",
      kecamatan: "Pulogadung",
      kelurahan: "Pulogadung",
      location: "Jl. Layur, Pulogadung",
      coords: [-6.1950, 106.8950],
      level: "low",
      details: "Video dashcam mobil merekam pengendara motor matik mencurigakan yang membuntuti dari daerah Rawamangun hingga Layur secara zig-zag. Beruntung mobil masuk ke area komplek perumahan berpenjaga.",
      sourceUrl: "https://www.tiktok.com/@street_hunter_jkt/video/73567890999"
    }
  ];

  let simIndex = 0;

  function insertNextSimulatedIncident() {
    if (simIndex >= simulatedIncidents.length) {
      simIndex = 0; 
    }

    const simData = simulatedIncidents[simIndex];
    simIndex++;

    const pKeys = ['twitter', 'instagram', 'tiktok', 'facebook', 'news'];
    const randomPlatform = pKeys[Math.floor(Math.random() * pKeys.length)];
    platformStats[randomPlatform] += Math.floor(Math.random() * 8) + 2;

    const newSimIncident = {
      id: incidents.length + 1,
      title: simData.title,
      platform: simData.platform,
      username: simData.username,
      time: "Baru saja",
      timestamp: Date.now(),
      region: simData.region,
      kecamatan: simData.kecamatan,
      kelurahan: simData.kelurahan,
      location: simData.location,
      coords: simData.coords,
      level: simData.level,
      details: simData.details,
      sourceUrl: simData.sourceUrl
    };

    if (kelurahanMapping[simData.region] && !kelurahanMapping[simData.region].includes(simData.kelurahan)) {
      kelurahanMapping[simData.region].push(simData.kelurahan);
    }

    incidents.push(newSimIncident);
    platformStats[simData.platform]++;
    
    // Perbarui jumlah kasus bulan berjalan pada grafik garis
    monthlyHistoricalData.data[monthlyHistoricalData.data.length - 1]++;

    const currentFilterRegion = document.getElementById("filter-region").value;
    if (currentFilterRegion === simData.region) {
      handleRegionChange();
    } else {
      renderFeed();
    }
    
    updateStats();
    updateCharts();

    showToast(
      `Scraper: Post Sosmed Baru`, 
      `Terdeteksi laporan begal baru di Kelurahan ${simData.kelurahan} (${simData.region}) via ${simData.platform.toUpperCase()}`,
      simData.level === 'high' ? 'error' : simData.level === 'medium' ? 'warning' : 'info'
    );

    const radar = document.getElementById("radar-status");
    radar.textContent = "KOMPILASI DATA MASUK...";
    radar.style.color = "var(--color-high)";
    
    setTimeout(() => {
      radar.textContent = "PEMINDAIAN SOSMED AKTIF";
      radar.style.color = "var(--color-cyan)";
    }, 3000);
  }

  // Simulator scraping setiap 40 detik
  setInterval(insertNextSimulatedIncident, 40000);
}
