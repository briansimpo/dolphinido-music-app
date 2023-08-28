<script setup>
definePageMeta({
  layout: 'artist',
  middleware: ['artist'],
  validate: (route) => {
    return route.params.id !== undefined
  }
})

const route = useRoute()
const { pending, album } = useUserAlbum(route.params.id)

</script>
<template>
  <div class="under-hero container">
    <SectionPanel>
      <SectionHead>
        Album <span class="text-primary">Tracks</span>
      </SectionHead>
      <SectionBody>
        <div v-if="pending">
          <StateLoader />
        </div>
        <div v-else>
          <AddAlbumTracks :album="album" />
        </div>
      </SectionBody>
    </SectionPanel>
  </div>
</template>
