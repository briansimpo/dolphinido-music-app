<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <div class="list__item">
    <SongImage :song="props.song" />
    <SongContent :song="props.song" />
    <SongDropdown :song="props.song" />
  </div>
</template>
