<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <ul class="list__option">
    <li>{{ formatDuration(props.song.duration) }}</li>
    <li>
      <a href="javascript:void(0);" role="button" class="d-inline-flex">
        <i class="ri-delete-bin-line" />
      </a>
    </li>
  </ul>
</template>
