<script setup>
import { ref } from 'vue'

const judul = ref('')
const tahun = ref('')
const genre = ref('')
const sutradara = ref('')
const rating = ref('')

function handleSubmit() {
  console.log('Form disubmit:', {
    judul: judul.value,
    tahun: tahun.value,
    genre: genre.value,
    sutradara: sutradara.value,
    rating: rating.value,
  })
}
</script>

<template>
  <section id="Tambah-Drama-Favorit">
    <h2>Tambah Drama Favorit</h2>
    <form id="formDrama" @submit.prevent="handleSubmit" novalidate>
      <div class="form-kolom">
        <label for="Judul-Drama">Judul Drama</label>
        <input type="text" id="Judul-Drama" v-model="judul" required>
      </div>
      <div class="form-kolom">
        <label for="Tahun">Tahun</label>
        <input type="number" id="Tahun" v-model="tahun" min="1900" max="2026" placeholder="YYYY">
      </div>
      <div class="form-kolom">
        <label for="genre">Genre</label>
        <input type="text" id="genre" v-model="genre" required>
      </div>
      <div class="form-kolom">
        <label for="Sutradara">Sutradara</label>
        <input type="text" id="Sutradara" v-model="sutradara" required>
      </div>
      <div class="form-kolom">
        <label for="Rating">Rating</label>
        <input type="number" id="Rating" v-model="rating" min="1" max="10">
      </div>
      <button type="submit">Simpan</button>
    </form>
  </section>
</template>