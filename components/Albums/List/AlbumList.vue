<script setup>
const { albums } = useUserAlbums()
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
    <div class="list list--lg mt-5">
      <div class="row">
        <div v-if="albums == null">
          <NotFound>albums not found</NotFound>
        </div>
        <div v-else>
          <div v-for="album in albums" :key="album.id" class="col-xl-12">
            <AlbumListItem :album="album" class="mb-2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
