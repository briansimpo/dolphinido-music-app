<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <div>
    <div class="d-flex flex-wrap mb-4">
      <span class="text-dark fs-3 fw-semi-bold">
        {{ props.song.title }}
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
          <span class="ps-2 fw-medium">{{ props.song.album || 'Unknown' }}</span>
        </a>
      </li>

      <li>
        <a href="javascript:void(0);" role="button" class="text-dark d-flex align-items-center" aria-label="Favorite">
          <i class="ri-disc-line" />
          <span class="ps-2 fw-medium">{{ props.song.genre }}</span>
        </a>
      </li>

      <li>
        <a href="javascript:void(0);" role="button" class="text-dark d-flex align-items-center" aria-label="Download">
          <i class="ri-play-list-line" />
          <span class="ps-2 fw-medium">Track {{ props.song.track }}</span>
        </a>
      </li>
      <li>
        <span class="text-dark d-flex align-items-center">
          <i class="ri-time-line" />
          <span class="ps-2 fw-medium">{{ formatDuration(props.song.duration) }}</span>
        </span>
      </li>

      <li>
        <span class="text-dark d-flex align-items-center">
          <i class="ri-calendar-line" />
          <span class="ps-2 fw-medium">{{ formatDate(props.song.release_date, 'yyyy') }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>
