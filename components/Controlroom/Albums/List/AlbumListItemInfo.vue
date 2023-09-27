<script setup>
const props = defineProps({
  album: { type: Object, required: true }
})
</script>

<template>
  <div class="list__content">
    <NuxtLink :to="`/controlroom/albums/${props.album.id}`" class="list__title text-truncate">
      {{ props.album.title }}
    </NuxtLink>
    <p class="list__subtitle">
      <span>{{ props.album.genre }}</span> <br>
      <span>{{ props.album.release_year }}</span>
    </p>
  </div>

  <ul class="list__option">
    <li>
      <a href="#" role="button" class="d-inline-flex">
        <i v-if="props.album.likes <= 0" class="ri-heart-line heart-empty" />
        <i v-else class="ri-heart-fill heart-fill" />
        {{ formatCount(props.album.likes) }}
      </a>
    </li>
    <li>
      <a href="#" role="button" class="d-inline-flex">
        <i class="ri-arrow-down-line" /> {{ formatCount(props.album.downloads) }}
      </a>
    </li>
  </ul>
</template>
