// js/app.js
import { ambilProyek } from "./api.js";
import { isiProyek, pulihkan, muat } from "./state.js";
import { tampilkanGalat, aturMemuat } from "./dom.js";
import { pasangPendengar } from "./events.js";

async function mulai() {
  pulihkan(muat());  // Pulihkan preferensi filter & favorit dari localStorage
  pasangPendengar(); // Pasang semua event listener

  aturMemuat(true);
  try {
    const data = await ambilProyek();
    isiProyek(data); // Simpan data dan panggil render(state)
  } catch (galat) {
    tampilkanGalat("Data gagal dimuat. Periksa koneksi, lalu muat ulang.");
    console.error(galat.message);
  } finally {
    aturMemuat(false);
  }
}

mulai();