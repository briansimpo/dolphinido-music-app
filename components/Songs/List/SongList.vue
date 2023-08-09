<script setup>

const { songs } = useUserSongs()

</script>
<template>
  <div>
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

    <div class="list mt-5">
      <div class="row">
        <div v-if="songs == null">
          <NotFound>songs not found</NotFound>
        </div>
        <div v-else>
          <div v-for="song in songs" :key="song.id" class="col-xl-12 mb-2">
            <SongListItem :song="song" class="mb-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
