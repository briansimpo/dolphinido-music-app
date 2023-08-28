<script setup>
import Dialog from 'primevue/dialog'

const props = defineProps({
  song: { type: Object, required: true }
})

const showUpdateDialog = ref(false)

</script>

<template>
  <div>
    <div v-if="!showUpdateDialog" class="cover cover--round">
      <div class="cover__head">
        <ul class="cover__label d-flex">
          <li>
            <span v-if="props.song.is_free" class="badge rounded-pill bg-primary p-2">Free</span>
          </li>
          <li>
            <span v-if="!props.song.is_published" class="badge rounded-pill bg-danger p-2">Hidden</span>
          </li>
        </ul>
      </div>
      <div class="cover__image">
        <Image
          :src="fileUrl(props.song.cover_image)"
          alt="cover image"
        />
        <button
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
      header="Update Artwork"
      :style="{ width: '30vw' }"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
    >
      <UpdateSongImage :song="props.song" />
    </Dialog>
  </div>
</template>
