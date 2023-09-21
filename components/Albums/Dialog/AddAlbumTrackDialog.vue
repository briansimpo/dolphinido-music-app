<script setup>
import { inject } from 'vue'
const dialogRef = inject('dialogRef')
const album = dialogRef.value.data.album

const { songs } = useUserSongs()
const { createAlbumTrack } = useAlbumTrackService()
const { refreshData } = useRefresh()

const track = ref()
const albumTracks = ref([])
const form = ref({
  album: album.id,
  songs: []
})

const addTrack = () => {
  if (!albumTracks.value.includes(track.value)) {
    albumTracks.value.push(track.value)
    track.value = null
  }
}

const removeTrack = (song) => {
  const index = albumTracks.value.indexOf(song)
  if (index !== -1) {
    albumTracks.value.splice(index, 1)
  }
}

const saveTracks = () => {
  for (const albumTrack of albumTracks.value) {
    form.value.songs.push(albumTrack.id)
  }
  createAlbumTrack(form.value)
  dialogRef.value.close()
  refreshData()
}

</script>

<template>
  <div class="row">
    <div class="col-lg-12">
      <Button class="mb-4" @click="saveTracks">
        Save
      </Button>
    </div>
    <div class="col-lg-12">
      <div id="tracks">
        <div class="list">
          <div v-for="song in albumTracks" :key="song.id" class="col-xl-12 mb-2">
            <div class="list__item">
              <AlbumTrackImage :song="song" />
              <div class="list__content">
                <p href="#" class="list__title text-truncate">
                  {{ song.title }}
                </p>
                <p class="list__subtitle">
                  <span>{{ formatDate(song.release_date, 'yyyy') }}</span>
                </p>
              </div>
              <ul class="list__option">
                <li>
                  <button class="btn" @click="removeTrack(song)">
                    <i class="ri-delete-bin-line" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-12">
      <Dropdown
        v-model="track"
        filter
        :options="songs"
        option-label="title"
        placeholder="Select Track"
        class="w-full mt-4"
        @change="addTrack"
      />
    </div>
  </div>
</template>

<style lang="scss" scope>

#tracks{
  height: 250px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
}

</style>
