<script setup>
const props = defineProps({
  file: { type: Object, required: true }
})

const { genres } = useGenres()
const { albums } = useUserAlbums()
const { addSong } = useAddSong()

/** @param {Event} event */
function submitForm (event) {
  const form = event.currentTarget
  const formData = new FormData(form)
  formData.append('song_file', props.file)
  addSong(formData)
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="title" class="form-label fw-medium">Official Title *</label>
      <input
        id="title"
        name="title"
        type="text"
        class="form-control"
        required
      >
    </div>

    <div class="mb-3">
      <label for="genre" class="form-label fw-medium select2">Genre *</label>
      <select id="genre" name="genre" class="form-control" required>
        <option v-for="genre in genres" :key="genre.id" :value="genre.id">
          {{ genre.name }}
        </option>
      </select>
    </div>

    <div class="mb-3">
      <label for="release_date" class="form-label fw-medium">Release Date *</label>
      <input id="release_date" name="release_date" type="date" class="form-control" required>
    </div>

    <div class="mb-3">
      <label for="album" class="form-label fw-medium select2">Album (Optional)</label>
      <select id="album" name="album" class="form-control">
        <option value="">
          None
        </option>
        <option v-for="album in albums" :key="album.id" :value="album.id">
          {{ album.title }}
        </option>
      </select>
    </div>

    <div class="mb-3">
      <label for="cover_image" class="form-label fw-medium">Cover Image *</label>
      <input
        id="cover_image"
        name="cover_image"
        accept="image/*"
        type="file"
        class="form-control"
      >
    </div>

    <div class="mt-3 col-lg-4 mx-auto">
      <button type="submit" class="btn btn-primary w-100">
        Submit
      </button>
    </div>
  </form>
</template>
