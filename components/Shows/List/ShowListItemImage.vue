<script setup>
const props = defineProps({
  show: { type: Object, required: true }
})
</script>

<template>
  <NuxtLink :to="'/controlroom/shows/' + props.show.id" class="cover_image">
    <img :src="fileUrl(props.show.cover_image)" alt="cover image">
  </NuxtLink>
</template>
