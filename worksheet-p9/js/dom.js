
// impor ke dom.js
import { daftarDrama } from "./app.js";

// ambil elemen wadah
const wadahDaftar = document.querySelector("#daftar");

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
  daftar.forEach((drama) => wadahDaftar.append(buatKartu(drama)));

}

render(daftarDrama);//mengambil render dgn data