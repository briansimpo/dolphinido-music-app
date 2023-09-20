<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <div class="list__cover">
    <img :src="fileUrl(props.song.cover_image)" alt="cover image">
    <a
      href="javascript:void(0);"
      class="btn btn-play btn-sm btn-default btn-icon rounded-pill"
      aria-label="Play pause"
    >
      <i class="ri-play-fill icon-play" />
      <!--<i class="ri-pause-fill icon-pause" />-->
    </a>
  </div>
</template>
