<script setup>
const { songs } = useUnknownAlbumSongs()

const selectedTrack = ref()
const albumTracks = ref([])

const addTrack = () => {
  if (!albumTracks.value.includes(selectedTrack.value)) {
    albumTracks.value.push(selectedTrack.value)
  }
}

</script>

<template>
  <div class="row">
    <div class="col-lg-12">
      <div class="list mb-8">
        <div v-for="song in albumTracks" :key="song.id" class="col-xl-12 mb-2">
          <AlbumTrack :song="song" />
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <Dropdown
        v-model="selectedTrack"
        filter
        :options="songs"
        option-label="title"
        placeholder="Select Track"
        class="w-full"
        @change="addTrack"
      />
    </div>
  </div>
</template>
