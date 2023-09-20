<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <div class="list__content">
    <NuxtLink :to="`/controlroom/songs/${props.song.id}`" class="list__title text-truncate">
      {{ props.song.title }}
    </NuxtLink>
    <p class="list__subtitle">
      <span>{{ props.song.album || 'Unknown' }}</span> <br>
      <span>{{ formatDate(props.song.release_date, 'yyyy') }}</span>
    </p>
  </div>

  <ul class="list__option">
    <li>
      <a href="#" role="button" class="d-inline-flex">
        <i class="ri-play-line" /> {{ formatCount(props.song.plays) }}
      </a>
    </li>
    <li>
      <a href="#" role="button" class="d-inline-flex">
        <i class="ri-arrow-down-line" /> {{ formatCount(props.song.downloads) }}
      </a>
    </li>

    <li>{{ formatDuration(props.song.duration) }}</li>
  </ul>
</template>
