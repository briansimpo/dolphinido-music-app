<script setup>
const props = defineProps({
  show: { type: Object, required: true }
})
</script>

<template>
  <div class="col-xl-4 col-md-6">
    <div class="cover cover--round">
      <ShowListItemImage :show="props.show" />
      <ShowListItemInfo :show="props.show" />
    </div>
  </div>
</template>
