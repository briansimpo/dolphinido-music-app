<script setup>

import { useDropzone } from 'vue3-dropzone'

const { errorMessage } = useToastMessage()
const { genres } = useGenres()
const { albumReleases } = useAlbumReleases()
const { createAlbum } = useUserAlbumService()
const { getRootProps, getInputProps } = useDropzone({ onDrop })

const form = ref({
  title: null,
  genre: null,
  album_release: null,
  release_date: null,
  cover_image: null
})

function onDrop (acceptFiles) {
  const allowedTypes = ['image/png', 'image/jpeg']
  const uploadFile = acceptFiles[0]
  if (allowedTypes.includes(uploadFile.type)) {
    form.value.cover_image = uploadFile
  } else {
    errorMessage('File should be valid image')
  }
}

function submitForm () {
  const formData = new FormData()
  formData.append('title', form.value.title)
  formData.append('genre', form.value.genre)
  formData.append('album_release', form.value.album_release)
  formData.append('release_date', formatDate(form.value.release_date, 'yyyy-MM-dd'))
  formData.append('cover_image', form.value.cover_image)
  createAlbum(formData)
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="col-xl-12 mb-4">
      <div v-if="!form.cover_image" v-bind="getRootProps()">
        <FileDropzone>
          <input accept="image/*" v-bind="getInputProps()">
          <span class="d-block fs-6 mt-2 mb-2">
            Drag & Drop or click to Upload
          </span>
          <button type="button" class="btn btn-light-primary">
            Upload Album Cover
          </button>
        </FileDropzone>
      </div>
      <div v-else>
        <ImagePreview :image="form.cover_image" />
      </div>
    </div>

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
      <label for="genre" class="form-label fw-medium">Genre *</label>
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
      <label for="genre" class="form-label fw-medium">Album Release *</label>
      <Dropdown
        v-model="form.album_release"
        :options="albumReleases"
        option-value="id"
        option-label="name"
        placeholder="Select Release"
        class="w-full flex"
        required
      />
    </div>

    <div class="mb-3">
      <label for="release_date" class="form-label fw-medium">Release Date *</label>
      <Calendar
        v-model="form.release_date"
        date-format="yy-mm-dd"
        show-icon
        class="w-full flex"
        required
      />
    </div>

    <div class="mt-3 col-lg-4 mx-auto">
      <Button type="submit" class="btn btn-primary w-100">
        Save
      </Button>
    </div>
  </form>
</template>
