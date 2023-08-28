<script setup>
const props = defineProps({
  album: { type: Object, required: true }
})

const { songs } = useUserSongs()

const selectedTrack = ref()
const albumTracks = ref([])

const addTrack = () => {
  if (!albumTracks.value.includes(selectedTrack.value)) {
    albumTracks.value.push(selectedTrack.value)
  }
}

const deleteTrack = (id) => {
  albumTracks.value = albumTracks.value.filter(function (track) {
    return track.id !== id
  })
}
</script>

<template>
  <div class="row align-items-center">
    <div class="col-xl-3 col-md-4">
      <div class="cover cover--round">
        <div class="cover__image">
          <Image
            :src="fileUrl(props.album.cover_image)"
            alt="cover image"
          />
        </div>
      </div>
    </div>
    <div class="col-1 d-none d-xl-block" />
    <div class="col-md-8 mt-2 mt-md-0">
      <AlbumInfo :album="props.album" />
      <Dropdown
        v-model="selectedTrack"
        filter
        :options="songs"
        option-label="title"
        placeholder="Add Album Tracks"
        class="w-full md:w-24rem mb-5"
        @change="addTrack"
      />
    </div>
  </div>
  <div class="list mt-8">
    <div class="row">
      <div v-for="song in albumTracks" :key="song.id" class="col-xl-12 mb-2">
        <AlbumTrack :song="song" @click="deleteTrack(song.id) " />
      </div>
    </div>
  </div>
</template>
