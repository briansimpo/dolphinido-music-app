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
        My <span class="text-primary">Albums</span>
      </SectionHead>
      <SectionBody>
        <AlbumList />
      </SectionBody>
    </SectionPanel>
  </div>
</template>
