<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <div class="list__item">
    <AlbumTrackImage :song="props.song" />
    <AlbumTrackInfo :song="props.song" />
  </div>
</template>
