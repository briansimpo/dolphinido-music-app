<script setup>
import Dialog from 'primevue/dialog'

const props = defineProps({
  show: { type: Object, required: true }
})

const showUpdateDialog = ref(false)

</script>

<template>
  <div>
    <div class="cover cover--round">
      <div class="cover__head">
        <ul class="cover__label d-flex">
          <li>
            <span v-if="props.show.is_free" class="badge rounded-pill bg-primary p-2">Free</span>
          </li>
          <li>
            <span v-if="!props.show.is_published" class="badge rounded-pill bg-danger p-2">Hidden</span>
          </li>
        </ul>
      </div>
      <div v-if="!showUpdateDialog" class="cover__image">
        <Image
          :src="fileUrl(props.show.cover_image)"
          alt="cover image"
          @click="showUpdateDialog = true"
        />
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
