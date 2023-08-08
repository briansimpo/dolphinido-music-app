<script setup>

const { genres } = useGenres()
const { albumReleases } = useAlbumReleases()
const { addAlbum } = useAddAlbum()

/** @param {Event} event */
function submitForm (event) {
  const form = event.currentTarget
  const formData = new FormData(form)
  addAlbum(formData)
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
      <label for="album_release" class="form-label fw-medium select2">Album Release *</label>
      <select id="album_release" name="album_release" class="form-control">
        <option v-for="albumRelease in albumReleases" :key="albumRelease.id" :value="albumRelease.id">
          {{ albumRelease.name }}
        </option>
      </select>
    </div>

    <div class="mb-3">
      <label for="release_date" class="form-label fw-medium">Release Date *</label>
      <input id="release_date" name="release_date" type="date" class="form-control" required>
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
