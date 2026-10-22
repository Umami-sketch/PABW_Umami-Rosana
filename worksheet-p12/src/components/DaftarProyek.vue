<script setup>
import { computed } from 'vue'
import { state, tambahFavorit } from '../state.js'
import { saring } from '../data.js'

const tampil = computed(() => saring(state.daftarProyek, state.kategoriAktif))
</script>

<template>
  <section id="Daftar-Rincian-Drama">
    <h2>Daftar Rincian Drama</h2>

    <p v-if="state.memuat" id="muat">Memuat data...</p>
    <p v-else-if="state.galat" class="pesan-galat">{{ state.galat }}</p>
    <p v-else-if="tampil.length === 0" id="kosong">Belum ada data di kategori ini.</p>

    <ul v-else id="daftar">
      <li v-for="drama in tampil" :key="drama.id" class="kartu-drama">
        <span>{{ drama.judul }} ({{ drama.tahun }}) — Rating: {{ drama.rating }}</span>
        <button class="favorit" @click="tambahFavorit(drama.id)">
          {{ state.favorit.includes(drama.id) ? '★' : '☆' }}
        </button>
      </li>
    </ul>
  </section>
</template>