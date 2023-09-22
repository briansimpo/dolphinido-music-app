<script setup>
import { useConfirm } from 'primevue/useconfirm'

const props = defineProps({
  show: { type: Object, required: true }
})

const { publishShow, deleteShow } = useShowService()
const { updateShowDialog } = useShowDialog()
const { refreshData } = useRefresh()

const confirm = useConfirm()

const handleDelete = () => {
  confirm.require({
    message: 'Are you sure you want to delete ?',
    header: 'Confirmation',
    acceptClass: 'p-button-danger',
    accept: () => {
      deleteShow(props.show.id)
      navigateTo('/controlroom/shows', { external: true })
    },
    reject: () => {}
  })
}

const handlePublish = () => {
  confirm.require({
    message: 'Are you sure you want to publish ?',
    header: 'Confirmation',
    accept: () => {
      publishShow(props.show.id)
      refreshData()
    },
    reject: () => {}
  })
}

const openUpdateDialog = () => {
  updateShowDialog(props.show)
}

</script>

<template>
  <div>
    <ul v-if="!props.show.is_published" class="info-list">
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
