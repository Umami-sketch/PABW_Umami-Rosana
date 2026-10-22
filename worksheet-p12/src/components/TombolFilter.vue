<script setup>
import { state, pilihKategori, aturUlang } from '../state.js'
</script>

<template>
  <div id="filter">
    <button :class="{ aktif: state.kategoriAktif === 'semua' }" @click="pilihKategori('semua')">Semua</button>
    <button :class="{ aktif: state.kategoriAktif === 'Fantasy' }" @click="pilihKategori('Fantasy')">Fantasy</button>
    <button :class="{ aktif: state.kategoriAktif === 'Slice of Life' }" @click="pilihKategori('Slice of Life')">Slice of Life</button>
    <button :class="{ aktif: state.kategoriAktif === 'Thriller' }" @click="pilihKategori('Thriller')">Thriller</button>
    <button :class="{ aktif: state.kategoriAktif === 'Horror' }" @click="pilihKategori('Horror')">Horror</button>
    <button id="atur-ulang" @click="aturUlang">Atur ulang</button>
  </div>
</template>