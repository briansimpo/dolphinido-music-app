<script setup>
const props = defineProps({
  songs: { type: Object, required: true }
})
</script>
<template>
  <div class="list mt-5">
    <div class="row">
      <div v-if="props.songs == null">
        <NotFound>songs not found</NotFound>
      </div>
      <div v-else>
        <div v-for="song in props.songs" :key="song.id" class="col-xl-12 mb-2">
          <SongListItem :song="song" />
        </div>
      </div>
    </div>
  </div>
</template>
