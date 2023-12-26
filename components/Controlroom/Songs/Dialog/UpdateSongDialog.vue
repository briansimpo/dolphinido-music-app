<script setup>
import { inject } from 'vue'

const dialogRef = inject('dialogRef')
const song = dialogRef.value.data.song

const { genres } = useGenres()
const { albums } = useUserAlbums()
const { updateSong } = useSongService()
const { refreshData } = useRefresh()

const form = ref({
  title: song.title,
  year: song.year,
  genre: song.genre_id,
  album: song.album_id
})

function submitForm () {
  updateSong(song.id, form.value)
  dialogRef.value.close()
  refreshData()
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="title" class="form-label fw-medium">Title *</label>
      <InputText
        id="title"
        v-model="form.title"
        type="text"
        class="w-full flex"
        required
      />
    </div>

    <div class="mb-3">
      <label for="genre" class="form-label fw-medium">Genre</label>
      <Dropdown
        v-model="form.genre"
        filter
        :options="genres"
        option-value="id"
        option-label="name"
        placeholder="Select Genre"
        class="w-full flex"
        required
      />
    </div>

    <div class="mb-3">
      <label for="year" class="form-label fw-medium">Release Year</label>
      <InputText
        v-model="form.year"
        type="year"
        class="w-full flex"
        required
      />
    </div>

    <div class="mb-3">
      <label for="album" class="form-label fw-medium">Album</label>
      <Dropdown
        v-model="form.album"
        filter
        show-clear
        :options="albums"
        option-value="id"
        option-label="title"
        placeholder="Select Album"
        class="w-full flex"
      />
    </div>

    <div class="mt-3 col-lg-4 mx-auto">
      <Button type="submit" class="btn btn-primary w-100">
        Save
      </Button>
    </div>
  </form>
</template>
