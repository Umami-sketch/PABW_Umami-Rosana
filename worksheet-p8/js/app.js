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