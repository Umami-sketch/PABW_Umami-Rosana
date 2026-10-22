
// js/state.js
import { render } from "./dom.js";

const KUNCI = "pabw-p11";
const VERSI = 2;

// Objek state tunggal
export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: []
};

// --- FUNGSI PENGUBAH STATE ---
export function isiProyek(daftar) {
  state.daftarProyek = daftar;
  render(state);
}

export function pilihKategori(kategori) {
  state.kategoriAktif = kategori;
  simpan(state);
  render(state);
}

export function tambahFavorit(id) {
  if (state.favorit.includes(id)) {
    state.favorit = state.favorit.filter((favId) => favId !== id);
  } else {
    state.favorit = [...state.favorit, id];
  }
  simpan(state);
  render(state);
}

export function aturUlang() {
  localStorage.removeItem(KUNCI);
  state.kategoriAktif = "semua";
  state.favorit = [];
  render(state);
}

// --- FUNGSI LOCALSTORAGE ---
export function simpan(state) {
  const isi = {
    versi: VERSI,
    kategoriAktif: state.kategoriAktif,
    favorit: state.favorit
  };
  localStorage.setItem(KUNCI, JSON.stringify(isi));
}

export function muat() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI));
    if (isi?.versi !== VERSI) {
      localStorage.removeItem(KUNCI); // buang jika versi skema tidak cocok
      return null;
    }
    return isi;
  } catch {
    localStorage.removeItem(KUNCI); // buang jika JSON rusak
    return null;
  }
}

export function pulihkan(isi) {
  if (!isi) return;
  state.kategoriAktif = isi.kategoriAktif ?? "semua";
  state.favorit = isi.favorit ?? [];
}