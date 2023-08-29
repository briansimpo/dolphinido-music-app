<script setup>
const props = defineProps({
  album: { type: Object, required: true }
})

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
  <div class="row align-items-center">
    <div class="col-lg-12">
      <div class="list">
        <div class="card">
          <div class="card-header">
            <span class="text-dark fs-3">
              {{ props.album.title }}
            </span>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="position-reletive">
                <Dropdown
                  v-model="selectedTrack"
                  filter
                  :options="songs"
                  option-label="title"
                  placeholder="Add Existing Track"
                  class="w-full md:w-20rem mb-5 float-start"
                  @change="addTrack"
                />

                <Button class="float-end" size="small">
                  New Track
                </Button>
              </div>
            </div>
            <div class="row mt-4">
              <div v-for="song in albumTracks" :key="song.id" class="col-xl-12 mb-2">
                <AlbumTrack :song="song" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
