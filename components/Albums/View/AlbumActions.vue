<script setup>
import Dialog from 'primevue/dialog'
import { useConfirm } from 'primevue/useconfirm'

const props = defineProps({
  album: { type: Object, required: true }
})

const showUpdateDialog = ref(false)

const { publishAlbum, deleteAlbum } = useUserAlbumService()

const confirm = useConfirm()

const handleDelete = () => {
  confirm.require({
    message: 'Are you sure you want to delete ?',
    header: 'Confirmation',
    acceptClass: 'p-button-danger',
    accept: () => {
      deleteAlbum(props.album.id)
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
    },
    reject: () => {}
  })
}
</script>

<template>
  <div>
    <ul v-if="!props.album.is_published" class="info-list">
      <li>
        <button class="btn btn-sm btn-primary" @click="showUpdateDialog = true">
          Update
        </button>
      </li>

      <li>
        <NuxtLink :to=" '/controlroom/albums/'+ props.album.id +'/tracks' " class="btn btn-sm btn-primary">
          Add Song
        </NuxtLink>
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
