<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <div class="list__content">
    <p href="#" class="list__title text-truncate">
      {{ props.song.title }}
    </p>
    <p class="list__subtitle">
      <span>{{ props.song.genre }}</span> <br>
      <span>{{ formatDate(props.song.release_date, 'yyyy') }}</span>
    </p>
  </div>
</template>
