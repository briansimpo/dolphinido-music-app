<script setup>
import Dialog from 'primevue/dialog'

const props = defineProps({
  album: { type: Object, required: true }
})

const showCreateDialog = ref(false)

</script>

<template>
  <div>
    <div class="list mt-6">
      <div class="row mb-3">
        <div class="col-lg-12">
          <button class="btn btn-sm btn-primary" @click="showCreateDialog = true">
            Add Tack
          </button>
        </div>
      </div>
      <div class="row">
        <div v-for="song in props.album.tracks" :key="song.id" class="col-xl-12 mb-2">
          <TrackItem :song="song" />
        </div>
      </div>
    </div>

    <Dialog
      v-model:visible="showCreateDialog"
      modal
      header="New Track"
      :style="{ width: '40vw' }"
      :breakpoints="{ '960px': '75vw', '641px': '100vw' }"
    >
      <NewTrack :album="props.album" />
    </Dialog>
  </div>
</template>
