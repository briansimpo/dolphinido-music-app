<script setup>
const props = defineProps({
  user: { type: Object, default: null }
})
</script>

<template>
  <div class="avatar__image">
    <img v-if="props.user.profile_image_url" :src="props.user.profile_image_url" alt="user">
    <img v-else src="/images/users/thumb.jpg" alt="user">
  </div>
</template>
