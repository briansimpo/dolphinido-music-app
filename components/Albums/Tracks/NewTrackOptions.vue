<script setup>
import Dialog from 'primevue/dialog'

const props = defineProps({
  album: { type: Object, required: true }
})

const showCreateDialog = ref(false)

const { songs } = useUserSongs()

const selectedTrack = ref()
const albumTracks = ref([])

const addTrack = () => {
  if (!albumTracks.value.includes(selectedTrack.value)) {
    albumTracks.value.push(selectedTrack.value)
  }
}

</script>

<template>
  <div class="position-relative">
    <Dropdown
      v-model="selectedTrack"
      filter
      :options="songs"
      option-label="title"
      placeholder="Add Existing Track"
      class="w-full md:w-20rem mb-5 float-start"
      @change="addTrack"
    />
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
</template>
