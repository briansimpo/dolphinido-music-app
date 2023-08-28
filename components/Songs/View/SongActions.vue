<script setup>
import Dialog from 'primevue/dialog'
import { useConfirm } from 'primevue/useconfirm'

const props = defineProps({
  song: { type: Object, required: true }
})

const showUpdateDialog = ref(false)

const { publishSong, deleteSong } = useSongService()

const confirm = useConfirm()

const handleDelete = () => {
  confirm.require({
    message: 'Are you sure you want to delete ?',
    header: 'Confirmation',
    acceptClass: 'p-button-danger',
    accept: () => {
      deleteSong(props.song.id)
    },
    reject: () => {}
  })
}

const handlePublish = () => {
  confirm.require({
    message: 'Are you sure you want to publish ?',
    header: 'Confirmation',
    accept: () => {
      publishSong(props.song.id)
    },
    reject: () => {}
  })
}

</script>

<template>
  <div>
    <ul v-if="!props.song.is_published" class="info-list">
      <li>
        <button class="btn btn-sm btn-primary" @click="showUpdateDialog = true">
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
    </ul>
    <Dialog
      v-model:visible="showUpdateDialog"
      modal
      header="Update Song"
      :style="{ width: '40vw' }"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
    >
      <UpdateSong :song="props.song" />
    </Dialog>
  </div>
</template>
