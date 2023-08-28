<script setup>
import { useDropzone } from 'vue3-dropzone'

const props = defineProps({
  album: { type: Object, required: true }
})

const { errorMessage } = useToastMessage()
const { updateAlbumImage } = useAlbumService()
const { getRootProps, getInputProps } = useDropzone({ onDrop })

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
  updateAlbumImage(props.album.id, formData)
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="col-xl-12 mb-4">
      <div v-if="!form.cover_image" v-bind="getRootProps()">
        <FileDropzone>
          <input accept="image/*" v-bind="getInputProps()">
          <span>Upload Album Cover </span>
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
