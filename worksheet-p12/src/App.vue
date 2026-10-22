<!-- src/App.vue -->
<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state, simpan, muat, pulihkan, isiProyek } from './state.js'
import { ambilProyek } from './api.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(async () => {
  pulihkan(muat())
  try {
    const data = await ambilProyek()
    isiProyek(data)
  } catch (galat) {
    state.galat = 'Data gagal dimuat. Periksa koneksi, lalu muat ulang.'
    console.error(galat.message)
  } finally {
    state.memuat = false
  }
})

// Simpan otomatis ke localStorage setiap kali state berubah
watch(state, (nilai) => simpan(nilai), { deep: true })
</script>

<template>
  <div class="page">
    <KepalaProfil :profil="profil" />

    <main class="isi">
      <aside class="sisi">
        <h2>Menu</h2>
        <nav>
          <ul>
            <li><a href="#Daftar-Rincian-Drama">Daftar Rincian Drama</a></li>
            <li><a href="#Poster-Drama">Poster Drama</a></li>
            <li><a href="#Tambah-Drama-Favorit">Tambah Drama Favorit</a></li>
          </ul>
        </nav>
      </aside>

      <div class="utama">
        <TombolFilter />
        <DaftarProyek />

        <section id="Poster-Drama">
          <h2>Poster Drama</h2>
          <div class="galeri">
            <figure class="kartu sorotan">
              <img src="/aos.jpg" alt="Poster drama Alchemy of Souls" width="300" height="360" loading="lazy">
              <figcaption>Poster Drama Alchemy of Souls</figcaption>
            </figure>
            
            <figure class="kartu sorotan">
              <img src="/mylib.jpg" alt="Quotes dari drama My Liberation Notes" width="330" height="410" loading="lazy">
              <figcaption>Quotes My Liberation Notes</figcaption>
            </figure>
          </div>
        </section>

        <FormKontak />
      </div>
    </main>

    <footer class="footer">
      <p>Umami Rosana Mukhson · 25523199 · 2026</p>
    </footer>
  </div>
</template>