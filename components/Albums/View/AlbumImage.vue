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
            <span v-if="!props.album.is_published" class="badge rounded-pill bg-danger p-2">Hidden</span>
          </li>
        </ul>
      </div>
      <div v-if="!showUpdateDialog" class="cover__image">
        <Image
          :src="fileUrl(props.album.cover_image)"
          alt="cover image"
          @click="showUpdateDialog = true"
        />
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
