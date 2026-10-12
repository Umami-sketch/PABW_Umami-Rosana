
// impor ke dom.js
import { daftarDrama } from "./app.js";

// ambil elemen wadah
const wadahDaftar = document.querySelector("#daftar");

const pesanKosong = document.querySelector("#kosong");

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
// Kalau kosong → tampilkan pesan, keluar dari fungsi
  if (daftar.length === 0) {
    pesanKosong.hidden = false;
    return;
  }
  // Kalau ada isi → sembunyikan pesan, tampilkan kartu
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