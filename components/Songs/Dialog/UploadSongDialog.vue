<script setup>
import { useDropzone } from 'vue3-dropzone'

const file = ref(null)

const { errorMessage } = useToastMessage()
const { getRootProps, getInputProps } = useDropzone({ onDrop })

function onDrop (acceptFiles) {
  const allowedTypes = ['audio/mpeg']
  const uploadFile = acceptFiles[0]
  if (allowedTypes.includes(uploadFile.type)) {
    file.value = uploadFile
  } else {
    errorMessage('File should be mp3')
  }
}

</script>

<template>
  <div>
    <div v-if="file">
      <CreateSongForm :file="file" />
    </div>
    <div v-else v-bind="getRootProps()">
      <FileDropzone>
        <input accept="mp3" v-bind="getInputProps()">
        <span class="d-block fs-6 mt-2 mb-2">
          Drag & Drop or click to Upload
        </span>
        <button type="button" class="btn btn-light-primary">
          Upload Song
        </button>
      </FileDropzone>
    </div>
  </div>
</template>
