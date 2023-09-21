<script setup>
import { useDropzone } from 'vue3-dropzone'
import { inject } from 'vue'

const dialogRef = inject('dialogRef')
const song = dialogRef.value.data.song

const { errorMessage } = useToastMessage()
const { updateSongImage } = useSongService()
const { getRootProps, getInputProps } = useDropzone({ onDrop })
const { refreshData } = useRefresh()

const form = ref({
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
  formData.append('cover_image', form.value.cover_image)
  updateSongImage(song.id, formData)
  dialogRef.value.close()
  refreshData()
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
            Upload Artwork
          </button>
        </FileDropzone>
      </div>
      <div v-else>
        <ImagePreview :image="form.cover_image" />
      </div>
    </div>

    <div class="mt-3 col-lg-4 mx-auto">
      <Button type="submit" class="btn btn-primary w-100">
        Save
      </Button>
    </div>
  </form>
</template>
