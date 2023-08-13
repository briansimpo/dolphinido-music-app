<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})
</script>

<template>
  <div>
    <ul v-if="!props.song.is_published" class="info-list">
      <li>
        <a href="#" class="btn btn-sm btn-primary rounded-pill">
          Update Song
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
