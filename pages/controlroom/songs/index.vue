<script setup>
definePageMeta({
  layout: 'artist',
  middleware: 'artist'
})

const { songs } = useUserSongs()

</script>

<template>
  <div class="under-hero container">
    <SectionPanel>
      <SectionHead>
        <h1 class="display-6 d-block">
          My <span class="text-primary">Songs</span>
        </h1>
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

        <SongList>
          <div class="row">
            <div v-for="song in songs" :key="song.id" class="col-xl-12 mb-2">
              <SongItem :song="song" />
            </div>
            <div v-if="songs === null" class="list">
              <SongsNotFound />
            </div>
          </div>
        </SongList>
      </SectionBody>
    </SectionPanel>
  </div>
</template>
