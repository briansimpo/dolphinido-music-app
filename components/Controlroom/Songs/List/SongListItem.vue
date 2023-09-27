<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <div class="list__item">
    <SongListItemImage :song="props.song" />
    <SongListItemInfo :song="props.song" />
    <SongListItemActions :song="props.song" />
  </div>
</template>
