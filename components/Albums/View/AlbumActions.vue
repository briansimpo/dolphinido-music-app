<script setup>
import Dialog from 'primevue/dialog'

const props = defineProps({
  album: { type: Object, required: true }
})

const showUpdateDialog = ref(false)
const { publishAlbum, deleteAlbum } = useAlbumService()
</script>

<template>
  <div>
    <ul v-if="!props.album.is_published" class="info-list">
      <li>
        <button class="btn btn-sm btn-primary rounded-pill" @click="showUpdateDialog = true">
          Update
        </button>
      </li>

      <li>
        <a href="#" class="btn btn-sm btn-primary rounded-pill">
          Add Song
        </a>
      </li>

      <li>
        <button class="btn btn-sm btn-success rounded-pill" @click="publishAlbum(props.album.id)">
          Publish
        </button>
      </li>

      <li>
        <button class="btn btn-sm btn-danger rounded-pill" @click="deleteAlbum(props.album.id)">
          Delete
        </button>
      </li>
    </ul>

    <Dialog
      v-model:visible="showUpdateDialog"
      modal
      header="Update Album"
      :style="{ width: '40vw' }"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
    >
      <UpdateAlbum :album="props.album" />
    </Dialog>
  </div>
</template>
