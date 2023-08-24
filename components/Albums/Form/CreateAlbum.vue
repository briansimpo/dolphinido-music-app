<script setup>

import { useDropzone } from 'vue3-dropzone'

const coverImage = ref(null)

const { getRootProps, getInputProps } = useDropzone({
  onDrop
})

function onDrop (acceptFiles) {
  const allowedTypes = ['image/png', 'image/jpeg']
  const uploadFile = acceptFiles[0]
  if (allowedTypes.includes(uploadFile.type)) {
    coverImage.value = uploadFile
  } else {
    alert('File should be valid image')
  }
}

const { genres } = useGenres()
const { albumReleases } = useAlbumReleases()
const { createAlbum } = useAlbumService()

/** @param {Event} event */
function submitForm (event) {
  const form = event.currentTarget
  const formData = new FormData(form)
  formData.append('cover_image', coverImage.value)
  createAlbum(formData)
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="col-xl-6 mb-4">
      <div v-if="!coverImage" v-bind="getRootProps()">
        <FileDropzone>
          <input accept="image/*" v-bind="getInputProps()">
          <span> Upload Album Cover </span>
        </FileDropzone>
      </div>
      <div v-else>
        <ImagePreview :image="coverImage" />
      </div>
    </div>
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
    <div class="mt-3 col-lg-4 mx-auto">
      <button type="submit" class="btn btn-primary w-100">
        Submit
      </button>
    </div>
  </form>
</template>
