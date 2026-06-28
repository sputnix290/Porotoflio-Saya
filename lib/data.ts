export interface Profile {
  id: number;
  nama: string;
  bio_singkat: string;
  pendidikan_terakhir: string;
  foto: string;
  cv_file: string;
}

export interface Experience {
  id: number;
  judul_kegiatan: string;
  penjelasan: string;
}

export interface Skill {
  id: number;
  nama: string;
  kategori: "language" | "framework" | "tool";
}

export interface Project {
  id: number;
  judul: string;
  deskripsi: string;
  github_link: string;
  gambar: string;
  skills_raw: string;
}

export interface Certification {
  id: number;
  nama_sertifikasi: string;
  deskripsi_singkat: string;
  gambar_sertifikat: string;
}

export const profileData: Profile = {
  id: 1,
  nama: "Adrianus",
  bio_singkat:
    "Mahasiswa Informatika Tingkat Akhir di Universitas Pembangunan Jaya yang memiliki spesialisasi dalam full stack web development, administrasi jaringan, dan cybersecurity. Berpengalaman dalam membangun aplikasi web responsif menggunakan React, Next.js, Django, dan MySQL. Memiliki pemahaman mengenai konfigurasi jaringan (VLAN, NAT, QoS dan Trunking) dan administrasi sistem Linux. Mampu mengintegrasikan perangkat keras dan lunak melalui proyek IoT, serta mengembangkan solusi perangkat lunak untuk pemrosesan citra. Pribadi yang adaptif, komunikatif, dan kolaboratif dalam lingkungan tim.",
  pendidikan_terakhir: "Sarjana Informatika | Universitas Pembangunan Jaya",
  foto: "/profile/Foto_CV_Adrianus.png",
  cv_file: "/cv/CV_ATS_Adrianus.pdf",
};

export const experiencesData: Experience[] = [
  {
    id: 2,
    judul_kegiatan: "Fasilitator Anak x Wahana Visi Indonesia",
    penjelasan:
      "Fasilitator anak dalam penelitian anak di Wahana Visi Indonesia bertugas mendampingi dan membantu anak selama proses penelitian berlangsung. Fasilitator menjelaskan tujuan penelitian dengan bahasa yang mudah dipahami, menciptakan suasana yang aman dan nyaman agar anak dapat menyampaikan pendapatnya dengan bebas, serta memastikan hak dan perlindungan anak tetap terpenihu. Selain itu, fasilitator juga membantu tim peneliti dalam mengumpulkan informasi dari anak dan menjadi penghubung antara anak, orang tua, dan tim penelitian.",
  },
  {
    id: 3,
    judul_kegiatan: "Mengikuti Kompetisi CTF GEMASTIK 2025",
    penjelasan:
      "Capture The Flag (CTF) adalah kompetisi keamanan siber yang menguji keterampilan teknis peserta dalam memecahkan berbagai tantangan, seperti menemukan celah keamanan, menganalisis sistem, atau memecahkan kode.",
  },
  {
    id: 4,
    judul_kegiatan:
      "Divisi Event Organisasi IMABESWA (Komunitas mahasiswa beasiswa)",
    penjelasan:
      "Bertanggung jawab untuk merencanakan, mengkoordinasikan, dan melaksanakan seluruh rangkaian acara dari awal hingga akhir. Menyusun konsep acara, membuat jadwal (rundown) yang detail, serta memastikan setiap sesi berjalan sesuai waktu yang telah ditentukan. Selain itu juga bertugas mengoordinasikan semua pihak yang terlibat dalam acara, seperti pembicara, MC, talent, dan vendor, serta berkomunikasi dengan divisi lain seperti logistik, humas, dan dokumentasi agar semua kebutuhan acara terpenuhi.",
  },
  {
    id: 5,
    judul_kegiatan: "Finalis Duta GenRe KalBar BKKBN 2022",
    penjelasan:
      "Mengikuti seleksi Duta GenRe mewakili Kabupaten/kota yang berfokus pada pengembangan peran remaja sebagai agen edukasi masyarakat. Terlibat dalam berbagai tahapan seleksi, seperti wawancara, penyampaian gagasan, dan diskusi mengenai isu kependudukan, kesehatan reproduksi, dan pernikahan dini. Pengalaman ini meningkatkan kemampuan komunikasi, kepercayaan diri, dan pemahaman tentang peran remaja dalam menyebarkan edukasi positif.",
  },
];

export const skillsData: Skill[] = [
  { id: 4, nama: "HTML", kategori: "tool" },
  { id: 5, nama: "CSS", kategori: "tool" },
  { id: 6, nama: "Java Script", kategori: "language" },
  { id: 7, nama: "Dart", kategori: "language" },
  { id: 8, nama: "FastAPI", kategori: "tool" },
  { id: 9, nama: "Python", kategori: "language" },
  { id: 10, nama: "Flutter", kategori: "framework" },
  { id: 11, nama: "Wireshark", kategori: "tool" },
  { id: 13, nama: "Next.js", kategori: "framework" },
  { id: 14, nama: "Django", kategori: "framework" },
  { id: 15, nama: "Flask", kategori: "tool" },
  { id: 16, nama: "Laravel", kategori: "framework" },
  { id: 17, nama: "React.js", kategori: "framework" },
  { id: 18, nama: "SQLlite", kategori: "language" },
  { id: 19, nama: "MySQL", kategori: "language" },
  { id: 20, nama: "Burp Suite", kategori: "tool" },
  { id: 21, nama: "CLI Linux", kategori: "tool" },
  { id: 24, nama: "TKinter", kategori: "tool" },
];

export const projectsData: Project[] = [
  {
    id: 1,
    judul: "Website Portofolio",
    deskripsi:
      "Membuat website portofolio sederhana yang menarik dan responsif menggunakan HTML, CSS dan Java Script",
    github_link: "https://github.com/sputnix290/Website-portofolio",
    gambar: "/projects/porto.jpg",
    skills_raw: "HTML, CSS, JS",
  },
  {
    id: 2,
    judul: "ParkIt — Asisten Parkir Pintar Berbasis AI",
    deskripsi:
      "Mengembangkan aplikasi mobile lintas platform menggunakan Flutter dan GetX untuk memantau okupansi slot parkir motor secara real-time. Mengintegrasikan aplikasi dengan backend FastAPI yang menjalankan model deteksi objek YOLOv12 dan algoritma Adaptive Spatial-Gap Classification (ASB-PSC) untuk mendeteksi slot kosong secara dinamis berdasarkan dimensi kendaraan. Menerapkan koneksi aman menggunakan Cloudflare Tunnel dan Ngrok, serta mengelola persistensi data menggunakan MongoDB.",
    github_link: "https://github.com/sputnix290/Parkit-with-YOLO-and-Dart",
    gambar: "/projects/WhatsApp_Image_2026-06-25_at_01.17.08.jpeg",
    skills_raw:
      "Flutter, GetX, FastAPI, Python, YOLOv12, MongoDB, Cloudflare Tunnel",
  },
  {
    id: 3,
    judul: "Desain Arsitektur jaringan, configurasi & Troubelshoting",
    deskripsi:
      "Merancang dan mensimulasikan jaringan kantor cabang logistik 2 lantai. Implementasi configurasi meliputi VLAN, DHCP, NAT, inter-VLAN routing, Trunking dan QoS. Berhasil menyelesaikan 3 masalah kritis jaringan: kegagalan DHCP, akses printer antar lantai, dan latency WAN.",
    github_link:
      "https://drive.google.com/file/d/1k2NrVKO182Llk2s0Y0ac7gc9zGpU4ClM/view?usp=sharing",
    gambar: "/projects/Screenshot_2026-06-25_015940.png",
    skills_raw: "VLAN, NAT, DHCP, Trunking, QoS, Wireshark",
  },
  {
    id: 4,
    judul: "Website Portofolio Interaktif",
    deskripsi:
      "Membuat website portofolio yang interaktif yang dilengkapi dengan panel admin untuk bisa mengedit isi website. Untuk backend dikembangkan dengan Django dan Flask untuk menghandel API. Selain itu website portofolio dilengkapi dengan sistem autentifikasi untuk meningkatkan keamanan dan menerapkan hash untuk data-data sensitif yang ada di database.",
    github_link: "",
    gambar: "/projects/Screenshot_2026-06-25_022058.png",
    skills_raw: "Next.js, Django, SQLite",
  },
  {
    id: 5,
    judul: "Website Klasifikasi Jenis Sampah",
    deskripsi:
      "Membangun pipeline Machine Learning hingga melatih model untuk melakukan klasifikasi gambar dari data primer sampah yang dikumpulkan secara mandiri. Melakukan preprocessing data mulai dari resize gambar, gray scale gambar flip dan rotasi gambar untuk memperkaya dataset. Melatih model dan melakukan evaluasi model dengan metrik untuk melihat akurasi model yang sudah dilatih, hasilnya model berhasil mendapatkan akurasi 97%. Mengembangkan aplikasi dengan mengintegrasikan model yang sudah dilatih dengan website yang dikembangkan dengan React.js, Django, dan Flask.",
    github_link:
      "https://github.com/sputnix290/Website-Klasifiikasi-sampah-berbasis-AI.git",
    gambar: "/projects/Screenshot_2026-06-25_024132.png",
    skills_raw: "Python, React.js, Django, Flask",
  },
  {
    id: 6,
    judul: "Aplikasi Desktop Preprocessing Otomatis",
    deskripsi:
      "Memprogram algoritma seperti convert color to grayscale, binarization, resizing, rotasi, dan beberapa algoritma lain untuk kepentingan preprocessing dataset. Pengembangan aplikasi desktop tidak menggunakan library pihak ketiga selain NumPy dan Matplotlib, sehingga algoritma dikembangkan secara murni.",
    github_link:
      "https://drive.google.com/file/d/1PZe9veRFvXBQVwbBGCdUtIkFaRTc9wa9/view?usp=sharing",
    gambar: "/projects/Screenshot_2026-06-25_025159.png",
    skills_raw: "Python, Tkinter",
  },
];

export const certificationsData: Certification[] = [
  {
    id: 2,
    nama_sertifikasi: "Penetration Testing — IDN-Networkers",
    deskripsi_singkat:
      "Saya belajar penetration testing, yaitu kegiatan menguji keamanan suatu sistem untuk menemukan dan menganalisis celah keamanan sebelum dimanfaatkan oleh pihak yang tidak bertanggung jawab. Fokus yang saya pelajari adalah web penetration testing dan android penetration testing dengan tujuan meningkatkan keamanan aplikasi. Dalam prosesnya, saya menggunakan berbagai alat seperti Burp Suite untuk menganalisis dan menguji lalu lintas aplikasi web, Nmap untuk melakukan pemetaan jaringan dan identifikasi layanan yang berjalan, serta berbagai tools lain yang tersedia di Kali Linux untuk membantu proses pengujian keamanan secara terstruktur dan sesuai etika.",
    gambar_sertifikat:
      "/certs/Adrianus_Sertifikat_Bootcamp_Cyber_Security_Penetration_Testing_page-0001_a69tJxI.jpg",
  },
  {
    id: 3,
    nama_sertifikasi: "Introduction To Cloud Computing — Microsoft and Komdigi",
    deskripsi_singkat:
      "Mengikuti pelatihan selama 1 jam yang diselenggarakan oleh Pusat Pengembangan Literasi Digital, Kementerian Komdigi. Mempelajari konsep dasar cloud computing, termasuk model layanan (IaaS, PaaS, SaaS), arsitektur cloud, serta manfaat dan tantangan penggunaan cloud di dunia industri. Pemahaman ini mendukung kemampuan saya dalam mengembangkan dan mendeploy aplikasi berbasis AI ke platform cloud.",
    gambar_sertifikat:
      "/certs/Sertifikat_ADRIANUS_Introduction_To_Cloud_Computing_page-0001.jpg",
  },
  {
    id: 4,
    nama_sertifikasi: "Dasar-dasar Keamanan AI — Microsoft and Komdigi",
    deskripsi_singkat:
      "Mengikuti pelatihan yang diselenggarakan oleh Pusbang Ekosistem SDM Komdigi. Mempelajari konsep dasar keamanan AI, termasuk identifikasi ancaman seperti serangan adversarial, privasi data, dan integritas model. Memahami prinsip pengembangan AI yang aman, etis, dan bertanggung jawab untuk mendukung implementasi sistem kecerdasan buatan di berbagai sektor",
    gambar_sertifikat: "/certs/Screenshot_2026-06-25_032511.png",
  },
];
