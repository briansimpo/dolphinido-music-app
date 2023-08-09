<script setup>
definePageMeta({
  layout: 'artist',
  middleware: 'artist'
})
</script>

<template>
  <div class="under-hero container">
    <SectionPanel>
      <SectionHead>
        My <span class="text-primary">Songs</span>
      </SectionHead>
      <SectionBody>
        <SongList />
      </SectionBody>
    </SectionPanel>
  </div>
</template>
