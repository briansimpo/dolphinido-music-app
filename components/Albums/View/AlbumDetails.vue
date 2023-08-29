<script setup>
const props = defineProps({
  album: { type: Object, required: true }
})
</script>

<template>
  <div class="row align-items-center">
    <div class="col-xl-3 col-md-4">
      <AlbumImage :album="props.album" />
    </div>
    <div class="col-1 d-none d-xl-block" />
    <div class="col-md-8 mt-2 mt-md-0">
      <AlbumInfo :album="props.album" />
      <AlbumStats :album="props.album" />
      <AlbumActions :album="props.album" />
    </div>
  </div>
</template>
