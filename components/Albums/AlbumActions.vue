<script setup>
const props = defineProps({
  album: { type: Object, required: true }
})
</script>

<template>
  <div>
    <ul v-if="!props.album.is_published" class="info-list">
      <li>
        <a href="#" class="btn btn-sm btn-primary rounded-pill">
          Add Song
        </a>
      </li>

      <li>
        <a href="#" class="btn btn-sm btn-success rounded-pill">
          Publish
        </a>
      </li>

      <li>
        <a href="#" class="btn btn-sm btn-danger rounded-pill">
          Delete
        </a>
      </li>
    </ul>
  </div>
</template>
