<script setup>
import { useDropzone } from 'vue3-dropzone'
import Dropdown from 'primevue/dropdown'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Calendar from 'primevue/calendar'

const props = defineProps({
  file: { type: Object, required: true }
})

const { genres } = useGenres()
const { albums } = useUserAlbums()
const { createSong } = useSongService()
const { getRootProps, getInputProps } = useDropzone({ onDrop })

const form = ref({
  title: null,
  track: null,
  genre: null,
  album: null,
  release_date: null,
  cover_image: null,
  song_file: props.file
})

function onDrop (acceptFiles) {
  const allowedTypes = ['image/png', 'image/jpeg']
  const uploadFile = acceptFiles[0]
  if (allowedTypes.includes(uploadFile.type)) {
    form.value.cover_image = uploadFile
  } else {
    alert('File should be valid image')
  }
}

function submitForm () {
  createSong(form.value)
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="col-xl-6 mb-4">
      <div v-if="!form.cover_image" v-bind="getRootProps()">
        <FileDropzone>
          <input accept="image/*" v-bind="getInputProps()">
          <span>Upload Artwork </span>
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
        class="form-control"
      />
    </div>

    <div class="mb-3">
      <label for="track" class="form-label fw-medium">Track Number *</label>
      <InputNumber
        v-model="form.track"
        :use-grouping="false"
        style="display: flex; width:auto"
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
        class="form-control"
      />
    </div>

    <div class="mb-3">
      <label for="release_date" class="form-label fw-medium">Release Date *</label>
      <Calendar
        v-model="form.release_date"
        date-format="yy-mm-dd"
        show-icon
        style="display: flex; width:auto"
      />
    </div>

    <div class="mb-3">
      <label for="album" class="form-label fw-medium select2">Album (Optional)</label>
      <Dropdown
        v-model="form.album"
        filter
        :options="albums"
        option-value="id"
        option-label="title"
        placeholder="Select Album"
        class="form-control"
      />
    </div>

    <div class="mt-3 col-lg-4 mx-auto">
      <button type="submit" class="btn btn-primary w-100">
        Submit
      </button>
    </div>
  </form>
</template>
