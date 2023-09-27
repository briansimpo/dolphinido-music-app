<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <div class="row align-items-center">
    <div class="col-xl-3 col-md-4">
      <SongImage :song="props.song" />
    </div>
    <div class="col-1 d-none d-xl-block" />
    <div class="col-md-8 mt-2 mt-md-0">
      <SongInfo :song="props.song" />
      <SongStats :song="props.song" />
      <SongActions :song="props.song" />
    </div>
  </div>
</template>
