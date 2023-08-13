<script setup>
definePageMeta({
  layout: 'artist',
  middleware: 'artist',
  validate: (route) => {
    return route.params.id !== undefined
  }
})

const route = useRoute()
const { song } = useUserSong(route.params.id)

</script>
<template>
  <div class="under-hero container">
    <SectionPanel>
      <SectionHead>
        Song <span class="text-primary">Details</span>
      </SectionHead>
      <SectionBody>
        <SongDetails :song="song" />
      </SectionBody>
    </SectionPanel>
  </div>
</template>
