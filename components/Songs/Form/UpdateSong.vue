<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})

const { genres } = useGenres()
const { albums } = useUserAlbums()
const { updateSong } = useSongService()

/** @param {Event} event */
function submitForm (event) {
  const form = event.currentTarget
  const formData = new FormData(form)
  updateSong(props.song.id, formData)
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="title" class="form-label fw-medium">Title *</label>
      <input
        id="title"
        name="title"
        type="text"
        :value="props.song.title"
        class="form-control"
        required
      >
    </div>

    <div class="mb-3">
      <label for="genre" class="form-label fw-medium select2">Genre *</label>
      <select id="genre" name="genre" :value="props.song.genre_id" class="form-control" required>
        <option v-for="genre in genres" :key="genre.id" :value="genre.id">
          {{ genre.name }}
        </option>
      </select>
    </div>

    <div class="mb-3">
      <label for="release_date" class="form-label fw-medium">Release Date *</label>
      <input
        id="release_date"
        name="release_date"
        :value="formatDate(props.song.release_date)"
        class="form-control"
        required
      >
    </div>

    <div class="mb-3">
      <label for="album" class="form-label fw-medium select2">Album (Optional)</label>
      <select id="album" name="album" :value="props.song.album_id" class="form-control">
        <option value="">
          None
        </option>
        <option v-for="album in albums" :key="album.id" :value="album.id">
          {{ album.title }}
        </option>
      </select>
    </div>

    <div class="mt-3 col-lg-4 mx-auto">
      <button type="submit" class="btn btn-primary w-100">
        Submit
      </button>
    </div>
  </form>
</template>
