<script setup>
const props = defineProps({
  albums: { type: Object, required: true }
})
</script>
<template>
  <div class="list list--lg mt-5">
    <div class="row">
      <div v-if="props.albums == null">
        <NotFound>albums not found</NotFound>
      </div>
      <div v-else>
        <div v-for="album in props.albums" :key="album.id" class="col-xl-12">
          <AlbumListItem :album="album" />
        </div>
      </div>
    </div>
  </div>
</template>
