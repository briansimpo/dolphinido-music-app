<script setup>
const props = defineProps({
  show: { type: Object, required: true }
})
</script>

<template>
  <div class="row">
    <div class="col-xl-8 px-4 px-md-5 px-xl-0 mx-auto mb-5">
      <span class="text-dark fs-3 fw-semi-bold">
        {{ props.show.title }}
      </span>
    </div>
    <div class="col-xl-8 mx-auto mb-5">
      <ShowImage :show="props.show" />
    </div>
    <div class="col-xl-8 px-4 px-md-5 px-xl-0 mx-auto">
      <ShowInfo :show="props.show" />
      <ShowActions :show="props.show" />
    </div>
  </div>
</template>
