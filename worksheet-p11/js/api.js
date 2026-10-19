// js/api.js
// Untuk pengujian awal gunakan path lokal. Untuk tahap D.5 ganti ke tautan raw GitHub Anda.
const ALAMAT = 'data/proyek.json';

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);
    if (!respons.ok) {
      throw new Error(`HTTP error! status: ${respons.status}`);
    }
    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error('Gagal mengambil data:', galat.message);
    throw galat;
  }
}