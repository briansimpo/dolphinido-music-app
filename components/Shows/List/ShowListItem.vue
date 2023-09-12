<script setup>
const props = defineProps({
  show: { type: Object, required: true }
})
</script>

<template>
  <div class="cover cover--round">
    <NuxtLink :to="'/controlroom/shows/' + props.show.id" class="cover__image">
      <img :src="props.show.cover_image" alt="Event cover">
    </NuxtLink>
    <div class="cover__foot mt-3 px-2">
      <NuxtLink :to="'/controlroom/shows/' + props.show.id" class="cover__title fs-6 mb-3">
        {{ props.show.title }}
      </NuxtLink>
      <p class="cover__subtitle d-flex mb-2">
        <i class="ri-map-pin-fill fs-6" />
        <span class="ms-1 fw-semi-bold">{{ props.show.venue }}, {{ props.show.city }} - {{ props.show.country }}</span>
      </p>
      <p class="cover__subtitle d-flex mb-2">
        <i class="ri-calendar-fill fs-6" />
        <span class="ms-1 fw-semi-bold">{{ formatDate(props.show.event_date) }}</span>
      </p>
    </div>
  </div>
</template>
