<script setup>
import Dialog from 'primevue/dialog'

const props = defineProps({
  show: { type: Object, required: true }
})

const showUpdateDialog = ref(false)

</script>

<template>
  <div>
    <div v-if="!showUpdateDialog" class="cover cover--round">
      <div class="cover__head">
        <ul class="cover__label d-flex">
          <li>
            <span v-if="props.show.is_free" class="badge rounded-pill bg-primary p-2">Free</span>
          </li>
          <li>
            <span v-if="props.show.is_published" class="badge rounded-pill bg-success p-2">Published</span>
          </li>
          <li>
            <span v-if="!props.show.is_published" class="badge rounded-pill bg-danger p-2">Hidden</span>
          </li>
        </ul>
      </div>
      <div class="cover__image">
        <Image
          :src="fileUrl(props.show.cover_image)"
          alt="cover image"
        />
        <button
          v-if="!props.show.is_published"
          class="btn btn-play btn-sm btn-default btn-icon rounded-pill"
          @click="showUpdateDialog = true"
        >
          <i class="ri-pencil-fill" />
        </button>
      </div>
    </div>

    <Dialog
      v-model:visible="showUpdateDialog"
      modal
      header="Update Cover Image"
      :style="{ width: '30vw' }"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
    >
      <UpdateShowImage :show="props.show" />
    </Dialog>
  </div>
</template>
