<script setup>
const props = defineProps({
  album: { type: Object, required: true }
})
</script>

<template>
  <SongsList :songs="props.album.songs" />
</template>
