import HeroImage from "/assets/lahoke.png";
import ImageKecil from "/assets/awa.png";
import ImageIntern from "/assets/inn.jpg";
import ImageOrg from "/assets/awawaw.jpg";
import ImageOrg1 from "/assets/foto1.jpg";
import ImageSMA from "/assets/sma.jpg";

const Image = {
  HeroImage, ImageKecil, ImageIntern, ImageOrg, ImageOrg1, ImageSMA
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/github.png";
import Tools3 from "/assets/tools/php.png";
import Tools4 from "/assets/tools/js.png";
import Tools5 from "/assets/tools/html.png";
import Tools6 from "/assets/tools/css.png";
import Tools7 from "/assets/tools/laravel.png";
import Tools8 from "/assets/tools/bootstrap.png";
import Tools9 from "/assets/tools/mysql.png";
import Tools10 from "/assets/tools/xampp.png";
import Tools11 from "/assets/tools/laragon.png";
import Tools12 from "/assets/tools/figma.png";
import Tools13 from "/assets/tools/canva.png";
import Tools14 from "/assets/tools/drawio.svg";
import Tools15 from "/assets/tools/bizagi.png";
import Tools16 from "/assets/tools/trello.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Github",
    ket: "Repository Hosting",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "PHP",
    ket: "Programming Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "JavaScript",
    ket: "Programming Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "HTML",
    ket: "Markup Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "CSS",
    ket: "Style Sheet Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Laravel",
    ket: "Back-End Framework",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Bootstrap",
    ket: "Front-End Framework",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "MySQL",
    ket: "Database Management System",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "XAMPP",
    ket: "Local Development Environment",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Laragon",
    ket: "Local Development Environment",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Figma",
    ket: "UI/UX Design Tool",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Canva",
    ket: "Design App",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Draw.io",
    ket: "Diagramming & Modeling Tool",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "Bizagi",
    ket: "Business Process Modeling Tool",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Trello",
    ket: "Project Management Tool",
    dad: "1600",
  },
];

import Proyek1 from "/assets/proyek/penjualan.jpg";
import Proyek2 from "/assets/proyek/pk.png";
import Proyek3 from "/assets/proyek/prod.png";
import Proyek4 from "/assets/proyek/stok.jpg";
import Proyek5 from "/assets/proyek/mutasi.jpg";
import Proyek6 from "/assets/proyek/mps.jpg";
import Proyek7 from "/assets/proyek/nqr.png";
import Proyek8 from "/assets/proyek/blog.png";
import Proyek9 from "/assets/proyek/predik.jpg";
import Proyek10 from "/assets/proyek/ecom.png";
import Proyek11 from "/assets/proyek/dokter.png";
import Proyek12 from "/assets/proyek/todo.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek12,
    nama: "Sistem To-do List - 2025",
    desk: "Aplikasi berbasis web untuk membantu pengguna mengatur dan menyelesaikan tugas harian dengan mudah melalui sistem to-do list interaktif berbasis web.",
    tools: ["ReactJS", "Tailwind CSS", "Laravel", "MySQL"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek1,
    nama: "Sistem Manajemen Penjualan - 2025",
    desk: "Aplikasi berbasis web yang digunakan untuk mengelola proses penjualan mulai dari pencatatan transaksi, pengelolaan data pelanggan.",
    tools: ["ReactJS", "Tailwind CSS", "Laravel", "MySQL"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek2,
    nama: "Sistem Informasi Penilaian Kinerja - 2025",
    desk: "Sistem web untuk menilai kinerja pegawai dan memberikan rekomendasi promosi atau pengangkatan menggunakan metode Simple Additive Weighting (SAW).",
    tools: ["HTML", "CSS", "Javascript", "Laravel", "MySQL"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek3,
    nama: "Sistem Informasi Laporan Produksi - 2025",
    desk: "Sistem yang digunakan untuk Mencatat hasil produksi, Memantau produksi harian dan memilih part terbaik menggunakan metode Simple Additive Weighting (SAW).",
    tools: ["HTML", "CSS", "Javascript", "Laravel", "MySQL"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek4,
    nama: "Sistem Informasi Manajemen Stok - 2025",
    desk: "Sistem yang digunakan untuk Mengelola stok barang, memantau masuk-keluar, dan mencegah kekurangan atau kelebihan persediaan. Sistem ini juga memudahkan pemantauan stok secara real-time.",
    tools: ["HTML", "CSS", "Javascript", "Laravel", "MySQL"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek5,
    nama: "Sistem Informasi Permohonan Mutasi - 2024",
    desk: "Sistem ini digunakan untuk mengelola proses permohonan mutasi karyawan secara digital, mulai dari pengajuan, persetujuan, hingga pemantauan status mutasi.",
    tools: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
    dad: "700",
  },
  {
    id: 7,
    gambar: Proyek6,
    nama: "Sistem Informasi Monitoring Manpower Status - 2024",
    desk: "Sistem ini digunakan untuk memantau status karyawan secara lengkap, seperti jenis kelamin, usia, pendidikan, masa kerja, dan golongan. Sistem ini memudahkan HRD mendapatkan informasi Manpower secara cepat",
    tools: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
    dad: "800",
  },
  {
    id: 8,
    gambar: Proyek7,
    nama: "Sistem Informasi Pelaporan Ketidaksesuaian Kualitas - 2024",
    desk: "Sistem ini digunakan untuk membuat laporan ketidaksesuaian part baik dari segi kualitas maupun kuantitas, lengkap dengan proses persetujuan dari atasan.",
    tools: ["HTML", "CSS", "Javascript", "PHP", "MySQL"],
    dad: "900",
  },
  {
    id: 9,
    gambar: Proyek8,
    nama: "Sistem Informasi Multi-User Artikel - 2023",
    desk: "Sistem untuk membuat, mengelola, dan mempublikasikan artikel oleh banyak pengguna, sehingga setiap pengguna dapat menulis dan mengedit artikelnya sendiri dalam satu platform.",
    tools: ["HTML", "CSS", "Laravel", "MySQL"],
    dad: "1000",
  },

  {
    id: 10,
    gambar: Proyek9,
    nama: "Sistem Prediksi Harga Mobil Bekas - 2022",
    desk: "Sistem ini menggunakan teknik data mining untuk menganalisis data dan memprediksi harga mobil bekas untuk membantu pembeli dan penjual dalam pengambilan keputusan.",
    tools: ["HTML", "CSS", "Phyton", "Data Mining"],
    dad: "1100",
  },
  {
    id: 11,
    gambar: Proyek10,
    nama: "UI Design Aplikasi E-Commerce (Mobile) - 2022",
    desk: "Desain antarmuka untuk aplikasi e-commerce mobile mirip Alfamart Online, fokus pada pengalaman belanja yang intuitif dan navigasi yang mudah di smartphone.",
    tools: ["UI/UX Design", "Figma"],
    dad: "1200",
  },
  {
    id: 12,
    gambar: Proyek11,
    nama: "UI Design Aplikasi Dokter Online (Mobile) - 2022",
    desk: "Desain antarmuka untuk aplikasi konsultasi dokter secara online di mobile, fokus pada kemudahan akses layanan kesehatan.",
    tools: ["UI/UX Design", "Figma"],
    dad: "1300",
  },
];

import Sertif1 from "/assets/sertifikat/dba.jpg";
import Sertif2 from "/assets/sertifikat/magang.jpg";
import Sertif3 from "/assets/sertifikat/pemograman_php.jpg";
import Sertif4 from "/assets/sertifikat/lctai.jpg";

export const listSertifikat = [
  { id: 1, gambar: Sertif1, nama: "Database Administrator", lembaga: "BNSP", tahun: "2025", dad: "100" },
  { id: 2, gambar: Sertif2, nama: "Internship Certificate", lembaga: "PT Kayaba Indonesia", tahun: "2025", dad: "200" },
  { id: 3, gambar: Sertif3, nama: "Pemrograman PHP", lembaga: "Udemy", tahun: "2024", dad: "300" },
  { id: 4, gambar: Sertif4, nama: "Juara LCTAI", lembaga: "Kabupaten Bekasi", tahun: "2020", dad: "400" },
];


