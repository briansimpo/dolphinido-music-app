<script setup>
import { useConfirm } from 'primevue/useconfirm'

const props = defineProps({
  song: { type: Object, required: true }
})

const { publishSong, deleteSong } = useSongService()
const { updateSongDialog } = useSongDialog()
const { refreshData } = useRefresh()

const confirm = useConfirm()

const handleDelete = () => {
  confirm.require({
    message: 'Are you sure you want to delete ?',
    header: 'Confirmation',
    acceptClass: 'p-button-danger',
    accept: () => {
      deleteSong(props.song.id)
      navigateTo('/controlroom/songs', { external: true })
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
      refreshData()
    },
    reject: () => {}
  })
}

const openUpdateDialog = () => {
  updateSongDialog(props.song)
}

</script>

<template>
  <div>
    <ul v-if="!props.song.is_published" class="info-list">
      <li>
        <Button text @click="openUpdateDialog">
          Update
        </Button>
      </li>
      <li>
        <Button text @click="handlePublish">
          Publish
        </Button>
      </li>
      <li>
        <Button severity="danger" text @click="handleDelete">
          Delete
        </Button>
      </li>
    </ul>
  </div>
</template>
