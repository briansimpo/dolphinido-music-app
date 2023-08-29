<script setup>
const { pending, albums } = useUserAlbums()
</script>
<template>
  <div>
    <div class="list list--lg mt-5">
      <div class="row">
        <div v-if="pending">
          <StateLoader />
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
