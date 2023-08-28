<script setup>
import Dialog from 'primevue/dialog'
import { useConfirm } from 'primevue/useconfirm'

const props = defineProps({
  show: { type: Object, required: true }
})

const showUpdateDialog = ref(false)

const { publishShow, deleteShow } = useShowService()

const confirm = useConfirm()

const handleDelete = () => {
  confirm.require({
    message: 'Are you sure you want to delete ?',
    header: 'Confirmation',
    acceptClass: 'p-button-danger',
    accept: () => {
      deleteShow(props.show.id)
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
    },
    reject: () => {}
  })
}

</script>

<template>
  <div>
    <ul v-if="!props.show.is_published" class="info-list">
      <li>
        <button class="btn btn-sm btn-primary rounded-pill" @click="showUpdateDialog = true">
          Update
        </button>
      </li>

      <li>
        <button class="btn btn-sm btn-success rounded-pill" @click="handlePublish">
          Publish
        </button>
      </li>

      <li>
        <button class="btn btn-sm btn-danger rounded-pill" @click="handleDelete">
          Delete
        </button>
      </li>
    </ul>
    <Dialog
      v-model:visible="showUpdateDialog"
      modal
      header="Update Show"
      :style="{ width: '40vw' }"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
    >
      <UpdateShow :show="props.show" />
    </Dialog>
  </div>
</template>
