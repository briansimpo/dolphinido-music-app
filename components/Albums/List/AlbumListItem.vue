<script setup>
const props = defineProps({
  album: { type: Object, required: true }
})
</script>

<template>
  <div class="list__item mb-2">
    <AlbumListItemImage :album="props.album" />
    <div class="list__content">
      <NuxtLink :to="'/controlroom/albums/' + props.album.id" class="list__title text-truncate">
        {{ props.album.title }}
      </NuxtLink>
      <p class="list__subtitle text-truncate">
        <a href="#">{{ props.album.genre }}</a>
      </p>
    </div>
    <ul class="list__option">
      <li>
        <a href="#" role="button" class="d-inline-flex" aria-label="Favorite" data-favorite-id="100">
          <i class="ri-heart-line heart-empty" />
          <i class="ri-heart-fill heart-fill" />
        </a>
      </li>
      <li class="dropstart d-inline-flex">
        <a
          class="dropdown-link"
          href="#"
          role="button"
          aria-expanded="false"
        ><i class="ri-more-fill" /></a>
        <ul class="dropdown-menu dropdown-menu-sm" style="">
          <li><a class="dropdown-item" href="javascript:void(0);" role="button" data-favorite-id="100">Favorite</a></li>
          <li><a class="dropdown-item" href="audio/ringtone-1.mp3" download="">Download</a></li>
          <li><a class="dropdown-item" href="javascript:void(0);" role="button">Share</a></li>
          <li class="dropdown-divider" />
          <li>
            <a class="dropdown-item" href="album-details.html">View
              details</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
