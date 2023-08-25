<script setup>
definePageMeta({
  layout: 'artist',
  middleware: ['artist'],
  validate: (route) => {
    return route.params.id !== undefined
  }
})

const route = useRoute()
const { pending, song } = useUserSong(route.params.id)

</script>
<template>
  <div class="under-hero container">
    <SectionPanel>
      <SectionHead>
        Song <span class="text-primary">Details</span>
      </SectionHead>
      <SectionBody>
        <div v-if="pending">
          <StateLoader />
        </div>
        <div v-else>
          <SongDetails :song="song" />
        </div>
      </SectionBody>
    </SectionPanel>
  </div>
</template>
