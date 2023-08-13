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
        My <span class="text-primary">Shows</span>
      </SectionHead>
      <SectionBody>
        <ShowList />
      </SectionBody>
    </SectionPanel>
  </div>
</template>
