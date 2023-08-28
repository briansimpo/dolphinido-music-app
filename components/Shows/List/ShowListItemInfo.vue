<script setup>
const props = defineProps({
  show: { type: Object, required: true }
})
</script>

<template>
  <div class="cover__foot mt-3 px-2">
    <NuxtLink :to="'/controlroom/shows/' + props.show.id" class="cover__title fs-6 mb-3">
      {{ props.show.title }}
    </NuxtLink>
    <p class="cover__subtitle d-flex mb-2">
      <i class="ri-map-pin-fill fs-6" />
      <span class="ms-1 fw-semi-bold">{{ props.show.venue }}, {{ props.show.city }} - {{ props.show.country }}</span>
    </p>
  </div>
</template>
