// js/data.js
export const profil = {
  nama: "Umami Rosana Mukhson",
  peran: "Mahasiswa Informatika yang suka K-drama",
  keahlian: ["HTML", "CSS", "JavaScript"]
};

export function buatPerkenalan({ nama, peran }) {
  return `${nama} — ${peran}`;
}

export const formatKeahlian = (daftar) => daftar.join(" · ");

// Fungsi murni: menyaring drama berdasarkan genre
export function saring(daftar, kategori) {
  if (!kategori || kategori === "semua") {
    return daftar;
  }
  return daftar.filter((drama) => drama.genre.includes(kategori));
}