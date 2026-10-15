// js/dom.js
const wadahDaftar = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#kosong");
const pesanMuat = document.querySelector("#muat");
const formDrama = document.querySelector("#formDrama");
const barisFilter = document.querySelector("#filter");

export function aturMemuat(aktif) {
  if (pesanMuat) {
    pesanMuat.hidden = !aktif;
  }
}

export function tampilkanGalat(pesan) {
  wadahDaftar.textContent = "";
  if (pesanKosong) {
    pesanKosong.textContent = pesan;
    pesanKosong.hidden = false;
  }
}

export function buatKartu(drama) {
  const li = document.createElement("li");
  li.className = "kartu-drama";
  li.textContent = `${drama.judul} (${drama.tahun}) — Rating: ${drama.rating}`;
  return li;
}

export function render(daftar) {
  wadahDaftar.textContent = "";
  if (!daftar || daftar.length === 0) {
    pesanKosong.textContent = "Tidak ada drama di kategori ini.";
    pesanKosong.hidden = false;
    return;
  }
  pesanKosong.hidden = true;
  daftar.forEach((drama) => wadahDaftar.append(buatKartu(drama)));
}

export function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

export function pasangFilter(daftar) {
  if (!barisFilter) return;
  barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");
    if (!tombol) return;

    const kategori = tombol.dataset.kategori;
    const terpilih = daftar.filter(
      (drama) => kategori === "semua" || drama.genre.includes(kategori)
    );

    render(terpilih);
    tandaiTombolAktif(tombol);
  });
}

// Logika Validasi Form Lembar E (Pertemuan 9) tetap dipertahankan
function cekKolom(input) {
  const nilai = input.value.trim();
  if (input.id === "Judul-Drama") return nilai !== "";
  if (input.id === "Tahun") {
    const angka = Number(nilai);
    return nilai !== "" && angka >= 1900 && angka <= 2026;
  }
  if (input.id === "genre") return nilai !== "";
  if (input.id === "Sutradara") return nilai !== "";
  if (input.id === "Rating") {
    const angka = Number(nilai);
    return nilai !== "" && angka >= 1 && angka <= 10;
  }
  return true;
}

if (formDrama) {
  formDrama.addEventListener("submit", (event) => {
    event.preventDefault();
    const semuaInput = formDrama.querySelectorAll("input");
    let adaYangSalah = false;
    let kolomPertamaSalah = null;

    semuaInput.forEach((input) => {
      const valid = cekKolom(input);
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
    console.log("Form valid! Siap dikirim.");
  });
}