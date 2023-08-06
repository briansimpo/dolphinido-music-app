<script setup>
import { useDropzone } from 'vue3-dropzone'

const file = ref(null)

const { getRootProps, getInputProps } = useDropzone({
  onDrop
})

function onDrop (acceptFiles) {
  file.value = acceptFiles[0]
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
          <SongUpload :file="file" />
        </div>
      </div>
    </div>
    <div v-else v-bind="getRootProps()">
      <div class="card">
        <div class="card-body">
          <div class="dropzone">
            <input accept="mp3" v-bind="getInputProps()">
            <p>
              Drag and drop your song here, or Click to select file
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.dropzone {
  border: 2px dashed #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: all 0.3s ease;
  background: #fff;
}

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
