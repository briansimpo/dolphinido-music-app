<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>
<template>
  <ul class="list__option">
    <li class="dropstart d-inline-flex">
      <a
        class="dropdown-link"
        href="javascript:void(0);"
        role="button"
        data-bs-toggle="dropdown"
        aria-label="Cover options"
        aria-expanded="false"
      >
        <i class="ri-more-fill" />
      </a>
      <ul class="dropdown-menu dropdown-menu-sm">
        <li>
          <a class="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="1">
            Add to playlist
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="javascript:void(0);" role="button" :data-id="props.song.id">
            Download
          </a>
        </li>
        <li>
          <a class="dropdown-item" href="javascript:void(0);" role="button" data-playlist-id="1">
            Play
          </a>
        </li>
      </ul>
    </li>
  </ul>
</template>
