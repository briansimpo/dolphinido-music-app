<script setup>
const props = defineProps({
  ahow: { type: Object, required: true }
})
</script>

<template>
  <div class="list__item">
    <ShowListItemImage :show="props.show" />
    <ShowListItemInfo :show="props.show" />
  </div>
</template>
