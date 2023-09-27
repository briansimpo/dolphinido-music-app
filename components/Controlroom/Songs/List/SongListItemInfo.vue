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
      <span>{{ props.song.album || 'Unknown Album' }}</span> <br>
      <span>{{ props.song.year }}</span>
    </p>
  </div>

  <div class="list__content">
    <p class="list__subtitle">
      <span v-if="props.song.is_free" class="badge bg-primary">Free</span>
      <span v-if="!props.song.is_free" class="badge bg-success">Sale</span>
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
