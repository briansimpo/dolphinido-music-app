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
        Add <span class="text-primary">Song</span>
      </SectionHead>
      <SectionBody>
        <div class="col-lg-8 mx-auto">
          <UploadSong />
        </div>
      </SectionBody>
    </SectionPanel>
  </div>
</template>
