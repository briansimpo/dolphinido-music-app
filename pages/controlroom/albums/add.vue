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
        <h1 class="display-6 d-block">
          Add <span class="text-primary">Album</span>
        </h1>
      </SectionHead>
      <SectionBody>
        <div class="col-lg-8 mx-auto">
          <div class="card">
            <div class="card-body">
              <AddAlbum />
            </div>
          </div>
        </div>
      </SectionBody>
    </SectionPanel>
  </div>
</template>
