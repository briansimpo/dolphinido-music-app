<script setup>
import Dialog from 'primevue/dialog'

const props = defineProps({
  album: { type: Object, required: true }
})

const showUpdateDialog = ref(false)

</script>

<template>
  <div>
    <div class="cover cover--round">
      <div class="cover__head">
        <ul class="cover__label d-flex">
          <li>
            <span v-if="props.album.is_free" class="badge rounded-pill bg-primary p-2">Free</span>
          </li>
          <li>
            <span v-if="props.album.is_published" class="badge rounded-pill bg-success p-2">Published</span>
          </li>
          <li>
            <span v-if="!props.album.is_published" class="badge rounded-pill bg-danger p-2">Hidden</span>
          </li>
        </ul>
      </div>
      <div class="cover__image">
        <Image
          :src="props.album.cover_image"
          alt="cover image"
        />
        <button
          v-if="!props.album.is_published"
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
      header="Update Album Cover"
      :style="{ width: '30vw' }"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
    >
      <UpdateAlbumImage :album="props.album" />
    </Dialog>
  </div>
</template>
