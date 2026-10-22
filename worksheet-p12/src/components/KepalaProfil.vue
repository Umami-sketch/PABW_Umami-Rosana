<script setup>
const props = defineProps({
  profil: { type: Object, required: true },
})
</script>

<template>
  <header>
    <div class="header-baris">
      <input type="checkbox" id="tema" class="pengalih-tema">
      <label for="tema" class="tombol-tema">Tema gelap</label>
      <h1>Daftar drama korea favorit saya</h1>
    </div>
    <p style="margin-top: var(--space-2); font-size: var(--text-sm);">
      {{ props.profil.nama }} — {{ props.profil.peran }}
    </p>
  </header>
</template>