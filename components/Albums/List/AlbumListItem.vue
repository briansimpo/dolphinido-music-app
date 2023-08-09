<script setup>
const props = defineProps({
  album: { type: Object, required: true }
})
</script>

<template>
  <div class="list__item">
    <AlbumListItemImage :album="props.album" />
    <AlbumListItemInfo :album="props.album" />
  </div>
</template>
