<script setup>
const props = defineProps({
  album: { type: Object, required: true }
})
</script>

<template>
  <div class="list">
    <div class="row">
      <div v-if="props.album.tracks == null">
        <NotFound>tracks not found</NotFound>
      </div>
      <div v-else>
        <div v-for="song in props.album.tracks" :key="song.id" class="col-xl-12 mb-2">
          <AlbumTrack :song="song" />
        </div>
      </div>
    </div>
  </div>
</template>
