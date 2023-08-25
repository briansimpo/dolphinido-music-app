<script setup>
definePageMeta({
  layout: 'artist',
  middleware: ['artist', 'artist_album'],
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
        Album <span class="text-primary">Details</span>
      </SectionHead>
      <SectionBody>
        <div v-if="pending">
          <StateLoader />
        </div>
        <div v-else>
          <AlbumDetails :album="album" />
        </div>
      </SectionBody>
    </SectionPanel>
  </div>
</template>
