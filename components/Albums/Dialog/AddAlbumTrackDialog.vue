<script setup>
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
  <div>
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
</template>
