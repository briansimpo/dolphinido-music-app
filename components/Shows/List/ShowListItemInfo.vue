<script setup>
const props = defineProps({
  show: { type: Object, required: true }
})
</script>

<template>
  <div class="list__content">
    <NuxtLink :to="'/controlroom/shows/' + props.show.id" class="list__title text-truncate">
      {{ props.show.title }}
    </NuxtLink>
  </div>

  <ul class="list__option">
    <li>
      <a href="#" role="button" class="d-inline-flex">
        <i class="ri-heart-line heart-empty" />
        00
      </a>
    </li>
    <li>
      <a href="#" role="button" class="d-inline-flex">
        <i class="ri-arrow-down-line fs-5" /> 00
      </a>
    </li>
  </ul>
</template>
