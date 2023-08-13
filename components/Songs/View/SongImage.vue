<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <div class="cover cover--round">
    <div class="cover__head">
      <ul class="cover__label d-flex">
        <li>
          <span v-if="props.song.is_free" class="badge rounded-pill bg-primary p-2">Free</span>
        </li>
        <li>
          <span v-if="!props.song.is_published" class="badge rounded-pill bg-danger p-2">Hidden</span>
        </li>
      </ul>
    </div>
    <div class="cover__image">
      <img :src="fileUrl(props.song.cover_image)" alt="cover image">
    </div>
  </div>
</template>
