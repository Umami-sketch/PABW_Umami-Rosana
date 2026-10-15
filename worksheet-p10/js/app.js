// js/app.js
import { ambilProyek } from "./api.js";
import { render, pasangFilter, aturMemuat, tampilkanGalat, tandaiTombolAktif } from "./dom.js";

// Data profil mahasiswa
const nama = "Umami Rosana Mukhson";
const peran = "Mahasiswa Informatika yang suka K-drama";
const keahlian = ["HTML", "CSS", "JavaScript"];
const kalimat = `Nama saya ${nama}, ${peran}, dan saya belajar ${keahlian.length} hal.`;
console.log(kalimat);

async function muat() {
  aturMemuat(true);
  try {
    const daftar = await ambilProyek();
    pasangFilter(daftar);
    render(daftar);
    tandaiTombolAktif(document.querySelector('[data-kategori="semua"]'));
  } catch (galat) {
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang halaman.");
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

// Inisialisasi data saat aplikasi dimuat
muat();