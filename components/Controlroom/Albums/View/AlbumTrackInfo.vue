<script setup>
const props = defineProps({
  song: { type: Object, required: true }
})

const { deleteAlbumTrack } = useAlbumTrackService()
const { refreshData } = useRefresh()

const removeTrack = () => {
  deleteAlbumTrack(props.song.id)
  refreshData()
}
</script>

<template>
  <div>
    <div class="list__content">
      <p href="#" class="list__title text-truncate">
        {{ props.song.title }}
      </p>
      <p class="list__subtitle">
        <span>{{ props.song.genre || 'Unknown Genre' }}</span> <br>
        <span>{{ props.song.year }}</span>
      </p>
    </div>

    <ul class="list__option">
      <li>
        <a href="#" role="button" class="d-inline-flex">
          <i class="ri-play-line fs-5" /> {{ formatCount(props.song.plays) }}
        </a>
      </li>
      <li>
        <a href="#" role="button" class="d-inline-flex">
          <i class="ri-arrow-down-line fs-5" /> {{ formatCount(props.song.downloads) }}
        </a>
      </li>
      <li>{{ formatDuration(props.song.duration) }}</li>
      <li>
        <button class="btn" @click="removeTrack">
          <i class="ri-delete-bin-line" />
        </button>
      </li>
    </ul>
  </div>
</template>
