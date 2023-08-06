<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <div class="list__item">
    <SongItemImage :song="props.song" />
    <SongItemContent :song="props.song" />
    <SongItemOptions :song="props.song" />
    <SongItemDropdown :song="props.song" />
  </div>
</template>
