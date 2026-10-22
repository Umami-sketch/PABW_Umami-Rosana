// js/dom.js
import { saring } from "./data.js";

const wadahDaftar = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");

export function aturMemuat(aktif) {
  if (pesanMuat) pesanMuat.hidden = !aktif;
}

export function tampilkanGalat(pesan) {
  wadahDaftar.textContent = "";
  if (pesanKosong) {
    pesanKosong.textContent = pesan;
    pesanKosong.hidden = false;
  }
}

export function buatKartu(drama, daftarFavorit = []) {
  const li = document.createElement("li");
  li.className = "kartu-drama";

  const span = document.createElement("span");
  span.textContent = `${drama.judul} (${drama.tahun}) — Rating: ${drama.rating} `;

  const tombol = document.createElement("button");
  tombol.className = "favorit";
  tombol.dataset.id = drama.id;
  tombol.textContent = daftarFavorit.includes(drama.id) ? "★" : "☆";

  li.append(span, tombol);
  return li;
}

export function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button[data-kategori]").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

export function render(state) {
  wadahDaftar.textContent = "";

  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (!tampil || tampil.length === 0) {
    pesanKosong.textContent = "Tidak ada drama di kategori ini.";
    pesanKosong.hidden = false;
    tandaiTombolAktif(state.kategoriAktif);
    return;
  }

  pesanKosong.hidden = true;
  tampil.forEach((drama) => {
    wadahDaftar.append(buatKartu(drama, state.favorit));
  });

  tandaiTombolAktif(state.kategoriAktif);
}