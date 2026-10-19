
// js/events.js
import { pilihKategori, tambahFavorit, aturUlang } from "./state.js";

export function pasangPendengar() {
  // 1. Filter kategori
  const barisFilter = document.querySelector("#filter");
  if (barisFilter) {
    barisFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button[data-kategori]");
      if (!tombol) return;
      pilihKategori(tombol.dataset.kategori);
    });
  }

  // 2. Klik tombol bintang favorit
  const wadahDaftar = document.querySelector("#daftar");
  if (wadahDaftar) {
    wadahDaftar.addEventListener("click", (event) => {
      const tombol = event.target.closest(".favorit");
      if (!tombol) return;
      tambahFavorit(Number(tombol.dataset.id));
    });
  }

  // 3. Tombol atur ulang
  const tombolAturUlang = document.querySelector("#atur-ulang");
  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }

  // 4. Validasi Form
  const formDrama = document.querySelector("#formDrama");
  if (formDrama) {
    formDrama.addEventListener("submit", (event) => {
      event.preventDefault();
      const semuaInput = formDrama.querySelectorAll("input");
      let adaYangSalah = false;
      let kolomPertamaSalah = null;

      semuaInput.forEach((input) => {
        const nilai = input.value.trim();
        let valid = true;
        if (input.id === "Judul-Drama" || input.id === "genre" || input.id === "Sutradara") {
          valid = nilai !== "";
        } else if (input.id === "Tahun") {
          const angka = Number(nilai);
          valid = nilai !== "" && angka >= 1900 && angka <= 2026;
        } else if (input.id === "Rating") {
          const angka = Number(nilai);
          valid = nilai !== "" && angka >= 1 && angka <= 10;
        }

        if (!valid) {
          input.setAttribute("aria-invalid", "true");
          adaYangSalah = true;
          if (!kolomPertamaSalah) kolomPertamaSalah = input;
        } else {
          input.removeAttribute("aria-invalid");
        }
      });

      if (adaYangSalah) {
        kolomPertamaSalah.focus();
        return;
      }
      console.log("Form valid!");
    });
  }
}