<script setup>
const props = defineProps({
  album: { type: Object, required: true }
})
</script>

<template>
  <div>
    <div class="d-flex flex-wrap mb-4">
      <span class="text-dark fs-3 fw-semi-bold">
        {{ props.album.title }}
      </span>
    </div>
    <ul class="info-list mb-4">
      <li>
        <a
          href="javascript:void(0);"
          role="button"
          class="text-dark d-flex align-items-center"
        >
          <i class="ri-album-line" />
          <span class="ps-2 fw-medium">{{ props.album.album_release }}</span>
        </a>
      </li>

      <li>
        <a href="javascript:void(0);" role="button" class="text-dark d-flex align-items-center" aria-label="Favorite">
          <i class="ri-disc-line" />
          <span class="ps-2 fw-medium">{{ props.album.genre }}</span>
        </a>
      </li>

      <li>
        <a href="javascript:void(0);" role="button" class="text-dark d-flex align-items-center" aria-label="Download">
          <i class="ri-play-list-line" />
          <span class="ps-2 fw-medium">{{ props.album.track_count }} Tracks</span>
        </a>
      </li>
      <li>
        <span class="text-dark d-flex align-items-center">
          <i class="ri-calendar-line" />
          <span class="ps-2 fw-medium">{{ props.album.release_year }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>
