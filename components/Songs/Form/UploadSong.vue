<script setup>
import { useDropzone } from 'vue3-dropzone'

const file = ref(null)

const { getRootProps, getInputProps } = useDropzone({
  onDrop
})

function onDrop (acceptFiles) {
  const allowedTypes = ['audio/mpeg']
  const uploadFile = acceptFiles[0]
  if (allowedTypes.includes(uploadFile.type)) {
    file.value = uploadFile
  } else {
    alert('File should be mp3')
  }
}

function deleteFile () {
  file.value = null
}
</script>

<template>
  <div>
    <div v-if="file">
      <div class="card">
        <div class="card-header">
          <div class="file-item">
            <span>{{ file.name }}</span>
            <button class="btn btn-danger" @click="deleteFile">
              Cancel
            </button>
          </div>
        </div>
        <div class="card-body">
          <CreateSong :file="file" />
        </div>
      </div>
    </div>
    <div v-else v-bind="getRootProps()">
      <div class="card">
        <div class="card-body">
          <FileDropzone>
            <input accept="mp3" v-bind="getInputProps()">
            <span> Click to Upload your Song </span>
          </FileDropzone>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.file-item {
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(255 167 18 / 20%);
  padding: 7px;
  padding-left: 15px;
  margin-top: 10px;
}

</style>
