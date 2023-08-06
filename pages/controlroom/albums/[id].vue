<script setup>
definePageMeta({
  layout: 'artist',
  middleware: 'artist',
  validate: (route) => {
    return route.params.id !== undefined
  }
})

const route = useRoute()
const { album } = useGetAlbum(route.params.id)

</script>
<template>
  <div class="under-hero container">
    <SectionPanel>
      <SectionHead>
        <h1 class="display-6 d-block">
          Album <span class="text-primary">Content</span>
        </h1>
      </SectionHead>
      <SectionBody>
        <AlbumDetails :album="album" />
      </SectionBody>
    </SectionPanel>

    <SectionPanel>
      <SectionBody>
        <AlbumTracks :album="album" />
      </SectionBody>
    </SectionPanel>
  </div>
</template>
