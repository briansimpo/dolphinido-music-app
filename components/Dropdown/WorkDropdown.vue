<script setup>
const { uploadSongDialog } = useSongDialog()

const openUploadDialog = () => {
  uploadSongDialog()
}
</script>

<template>
  <div class="dropdown">
    <a
      id="work_menu"
      href="javascript:void(0);"
      class="header-text d-flex align-items-center"
      role="button"
      data-bs-toggle="dropdown"
      data-bs-auto-close="outside"
      aria-expanded="false"
    >
      <i class="ri-add-box-fill fs-5" />
      <span>Add Work</span>
    </a>
    <ul class="dropdown-menu" aria-labelledby="work_menu">
      <li>
        <button class="dropdown-item d-flex align-items-center" @click="openUploadDialog">
          <i class="ri-music-2-line fs-5" />
          <span class="ps-2">Upload Song</span>
        </button>
      </li>
      <li>
        <NuxtLink to="/controlroom/albums/add" class="dropdown-item d-flex align-items-center">
          <i class="ri-album-line fs-5" />
          <span class="ps-2">Add Album</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/controlroom/shows/add" class="dropdown-item d-flex align-items-center">
          <i class="ri-calendar-event-line fs-5" />
          <span class="ps-2">Add Show</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
