<script setup>
import { useConfirm } from 'primevue/useconfirm'

const props = defineProps({
  album: { type: Object, required: true }
})

const { publishAlbum, deleteAlbum } = useAlbumService()
const { updateAlbumDialog, addAlbumTrackDialog } = useAlbumDialog()
const { refreshData } = useRefresh()

const confirm = useConfirm()

const handleDelete = () => {
  confirm.require({
    message: 'Are you sure you want to delete ?',
    header: 'Confirmation',
    acceptClass: 'p-button-danger',
    accept: () => {
      deleteAlbum(props.album.id)
      navigateTo('/controlroom/albums', { external: true })
    },
    reject: () => {}
  })
}

const handlePublish = () => {
  confirm.require({
    message: 'Are you sure you want to publish ?',
    header: 'Confirmation',
    accept: () => {
      publishAlbum(props.album.id)
      refreshData()
    },
    reject: () => {}
  })
}

const openUpdateDialog = () => {
  updateAlbumDialog(props.album)
}

const openTrackDialog = () => {
  addAlbumTrackDialog(props.album)
}
</script>

<template>
  <div>
    <ul v-if="!props.album.is_published" class="info-list">
      <li>
        <button class="btn btn-sm btn-primary" @click="openUpdateDialog">
          Update
        </button>
      </li>

      <li>
        <button class="btn btn-sm btn-success" @click="handlePublish">
          Publish
        </button>
      </li>

      <li>
        <button class="btn btn-sm btn-danger" @click="handleDelete">
          Delete
        </button>
      </li>

      <li>
        <button class="btn btn-sm btn-primary" @click="openTrackDialog">
          Add Track
        </button>
      </li>
    </ul>
  </div>
</template>
