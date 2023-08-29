<script setup>

const props = defineProps({
  song: { type: Object, required: true }
})

</script>

<template>
  <div class="list__item">
    <TrackItemImage :song="props.song" />
    <TrackItemInfo :song="props.song" />
  </div>
</template>
