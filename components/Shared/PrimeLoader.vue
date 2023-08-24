<script setup>
import ProgressSpinner from 'primevue/progressspinner'
</script>

<template>
  <div class="loader">
    <ProgressSpinner />
  </div>
</template>

<style scoped>
.loader{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}
</style>
