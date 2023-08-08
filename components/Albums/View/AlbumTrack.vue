<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <div class="list__item">
    <TrackImage :song="props.song" />
    <TrackContent :song="props.song" />
    <TrackOptions :song="props.song" />
  </div>
</template>
