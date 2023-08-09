<script setup>
definePageMeta({
  layout: 'artist',
  middleware: 'artist'
})

const { albums } = useUserAlbums()

console.log(albums)

</script>

<template>
  <div class="under-hero container">
    <SectionPanel>
      <SectionHead>
        My <span class="text-primary">Albums</span>
      </SectionHead>
      <SectionBody>
        <div class="row">
          <div class="col-xl-3">
            <select class="form-select" aria-label="Filter song">
              <option value="all">
                All
              </option>
              <option value="published">
                Published
              </option>
              <option value="unpublished">
                Unpublished
              </option>
              <option value="for_free">
                For Free
              </option>
              <option value="for_sale">
                For Sale
              </option>
            </select>
          </div>
        </div>
        <AlbumList :albums="albums" />
      </SectionBody>
    </SectionPanel>
  </div>
</template>
