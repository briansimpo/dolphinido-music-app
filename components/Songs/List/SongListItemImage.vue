<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
const { currentTrack, isPlaying, play, pause, playOrPause } = useAudioPlayer()
</script>

<template>
  <div class="list__cover">
    <img :src="fileUrl(props.song.cover_image)" alt="cover image">
    <button
      v-if="!isPlaying"
      class="btn btn-play btn-sm btn-default btn-icon rounded-pill"
      @click="playOrPause(props.song)"
    >
      <i class="ri-play-fill icon-play" />
    </button>
    <button
      v-if="currentTrack && currentTrack.id !== props.song.id"
      class="btn btn-play btn-sm btn-default btn-icon rounded-pill"
      @click="play(props.song)"
    >
      <i class="ri-play-fill icon-play" />
    </button>
    <button
      v-if="isPlaying"
      class="btn btn-play btn-sm btn-default btn-icon rounded-pill"
      @click="pause"
    >
      <i class="ri-play-fill icon-play" />
    </button>
  </div>
</template>
