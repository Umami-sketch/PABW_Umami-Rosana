//  Data Profil 
const nama = "Umami Rosana Mukhson";
const peran = "Mahasiswa Informatika yang suka K-drama";
const keahlian = ["HTML", "CSS", "JavaScript"];
const jumlahDrama = 5;

//  Cek dengan console.log 
console.log(nama);
console.log(peran);
console.log(keahlian);
console.log(jumlahDrama);

//  Template literal 
const kalimat = `Nama saya ${nama}, ${peran}, dan saya belajar ${keahlian.length} hal.`;
console.log(kalimat);

//  Lembar C: dua fngsi murni 

// Fungsi 1: bikin kalimat perkenalan
function buatPerkenalan({ nama, peran }) {
  return `${nama} - ${peran}`;
}

// Fungsi 2: format daftar keahlian jadi satu baris
const formatKeahlian = (daftar) => daftar.join(" · ");

//  Test 
console.log(buatPerkenalan({ nama: "Umami Rosana Mukhson", peran: "Mahasiswa Informatika" }));
console.log(formatKeahlian(["HTML", "CSS", "JavaScript"]));

//  Lembar D: array of object dn array mthods 

// 1. Array of object: daftar drama favorit
const daftarDrama = [
  { judul: "Alchemy of Souls",     tahun: 2022, genre: "Fantasy",  rating: 9.9, selesai: true  },
  { judul: "My Liberation Notes",  tahun: 2022, genre: "Slice of Life", rating: 9.8, selesai: true  },
  { judul: "The Good Bad Mother",  tahun: 2023, genre: "Family",   rating: 9.5, selesai: false },
  { judul: "Flower of Evil",       tahun: 2020, genre: "Thriller", rating: 9.4, selesai: true  },
  { judul: "We Are All Trying Here", tahun: 2026, genre: "Comedy", rating: 8.5, selesai: false }
];

// 2. console.table: liat data rapi
console.table(daftarDrama);

// 3. map: ambil judul tok
const daftarJudul = daftarDrama.map((d) => d.judul);
console.log("Judul saja:", daftarJudul);

// 4. filter:  drama yg selesai ditonton
const dramaSelesai = daftarDrama.filter((d) => d.selesai === true);
console.table(dramaSelesai);

// 5. find: cari drama tertentu
const cariDrama = daftarDrama.find((d) => d.judul === "Flower of Evil");
console.log("Cari Flower of Evil:", cariDrama);

// Test: sort pakai salinan
const urutJudul = [...daftarDrama].sort((a, b) => a.judul.localeCompare(b.judul));
console.log("Setelah sort:", urutJudul.map(d => d.judul));
console.log("Data asli:", daftarDrama.map(d => d.judul));

// coba bkin syntax error buat cek di console
const angka = [1, 2, 3];