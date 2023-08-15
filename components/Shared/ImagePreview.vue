<script setup>
const props = defineProps({
  image: { type: Object, required: true }
})
const imagePreview = URL.createObjectURL(props.image)
</script>

<template>
  <div class="cover">
    <div class="cover__image">
      <img :src="imagePreview" alt="cover image">
    </div>
  </div>
</template>
