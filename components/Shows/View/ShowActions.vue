<script setup>
import Dialog from 'primevue/dialog'

const props = defineProps({
  show: { type: Object, required: true }
})

const showUpdateDialog = ref(false)

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
        <a href="#" class="btn btn-sm btn-success rounded-pill">
          Publish
        </a>
      </li>

      <li>
        <a href="#" class="btn btn-sm btn-danger rounded-pill">
          Delete
        </a>
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
