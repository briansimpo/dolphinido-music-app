<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <ul class="list__option">
    <li>
      <a href="javascript:void(0);" role="button" class="d-inline-flex">
        <i class="ri-play-line fs-5" /> 67k
      </a>
    </li>
    <li>
      <a href="javascript:void(0);" role="button" class="d-inline-flex">
        <i class="ri-arrow-down-line fs-5" /> 67k
      </a>
    </li>

    <li>{{ formatDuration(props.song.duration) }}</li>
  </ul>
</template>
