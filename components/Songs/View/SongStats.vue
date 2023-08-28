<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <div>
    <ul class="info-list mb-4">
      <li>
        <div class="d-flex align-items-center">
          <button type="button" class="btn btn-sm btn-icon btn-primary rounded-pill">
            <i class="ri-play-fill icon-play" />
            <!--<i class="ri-pause-fill icon-pause" />-->
          </button>
        </div>
      </li>

      <li>
        <a
          href="javascript:void(0);"
          role="button"
          class="text-dark d-flex align-items-center"
          :favorite-id="props.song.id"
        >
          <i class="ri-heart-line heart-empty" />
          <!--<i class="ri-heart-fill heart-fill" />-->
          <span class="ps-2 fw-medium">{{ formatCount(props.song.likes) }}</span>
        </a>
      </li>
      <li>
        <a href="javascript:void(0);" role="button" class="text-dark d-flex align-items-center" aria-label="Download">
          <i class="ri-download-2-line" />
          <span class="ps-2 fw-medium"> {{ formatCount(props.song.downloads) }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
