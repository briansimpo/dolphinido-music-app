<script setup>
const props = defineProps({
  album: { type: Object, required: true }
})
</script>

<template>
  <NuxtLink :to="`/controlroom/albums/${props.album.id}`" class="list__cover">
    <img :src="props.album.image_url" alt="cover image">
  </NuxtLink>
</template>
