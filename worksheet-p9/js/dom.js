
// impor ke dom.js
import { daftarDrama } from "./app.js";

// ambil elemen wadah
const wadahDaftar = document.querySelector("#daftar");

const pesanKosong = document.querySelector("#kosong");

const formDrama = document.querySelector("#formDrama");

// fungsi buarKartu
function buatKartu(drama) {
  const li = document.createElement("li"); //bikin list kosong
  li.className = "kartu-drama"; //style di css
  li.textContent = `${drama.judul} (${drama.tahun}) — ⭐ ${drama.rating}`; //isi teks menggunakan template literal
  return li; //kiirm blik elemen 
}

//menerima array ditampilkan semua ke wadah
function render(daftar) {
  wadahDaftar.textContent = "";    // mengosongkan nilai awalnya
// Kalau kosong  tampilkan pesan, keluar dari fungsi
  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }
  // Kalau ada isi  sembunyikan pesan, tampilkan kartu
  pesanKosong.hidden = true;
  daftar.forEach((drama) => wadahDaftar.append(buatKartu(drama)));
}

function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}


//  delegasi filter

const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
  // tombol terdekat dari yang diklik
  const tombol = event.target.closest("button");
  
  //  klik di luar tombol, abaikan
  if (!tombol) return;
  
  // kategori dari data-kategori
  const kategori = tombol.dataset.kategori;
  
  //saring array
  const terpilih = daftarDrama.filter(
    (drama) => kategori === "semua" || drama.genre === kategori
  );
  
  // render ulang dengan data yang udah disaring
  render(terpilih);
  tandaiTombolAktif(tombol);
});

// Inisialisasi awal
render(daftarDrama);
tandaiTombolAktif(document.querySelector('[data-kategori="semua"]'));



function cekKolom(input) {
  const nilai = input.value.trim();
  const pesan = input.parentElement.querySelector(".pesan-galat");
  
  if (input.id === "Judul-Drama") {
    if (nilai === "") {
      pesan.textContent = "Judul wajib diisi.";
      return false;
    }
  }
  
  if (input.id === "Tahun") {
    const angka = Number(nilai);
    if (nilai !== "" && (angka < 1900 || angka > 2026)) {
      pesan.textContent = "Tahun harus antara 1900–2026.";
      return false;
    }
  }
  
  if (input.id === "genre") {
    if (nilai === "") {
      pesan.textContent = "Genre wajib diisi.";
      return false;
    }
  }
  
  if (input.id === "Sutradara") {
    if (nilai === "") {
      pesan.textContent = "Sutradara wajib diisi.";
      return false;
    }
  }
  
  if (input.id === "Rating") {
    const angka = Number(nilai);
    if (nilai !== "" && (angka < 1 || angka > 10)) {
      pesan.textContent = "Rating harus antara 1–10.";
      return false;
    }
  }
  
  return true;
}

formDrama.addEventListener("submit", (event) => {
  event.preventDefault();   // stop reload halaman

  const semuaInput = formDrama.querySelectorAll("input");
  let adaYangSalah = false;
  let kolomPertamaSalah = null;
  
  semuaInput.forEach((input) => {
    const valid = cekKolom(input);
    
    if (!valid) {
      input.setAttribute("aria-invalid", "true");
      adaYangSalah = true;
      
      if (!kolomPertamaSalah) {
        kolomPertamaSalah = input;
      }
    } else {
      input.removeAttribute("aria-invalid");
    }
  });
  
  if (adaYangSalah) {
    kolomPertamaSalah.focus();   // pindah kursor ke kolom salah pertama
    return;
  }
  
  // Kalau semua valid
  console.log("Form valid! Siap dikirim.");
});
