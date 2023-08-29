<script setup>

const props = defineProps({
  song: { type: Object, required: true }
})

const { genres } = useGenres()
const { albums } = useUserAlbums()
const { updateSong } = useUserSongService()

const form = ref({
  title: props.song.title,
  track: props.song.track,
  genre: props.song.genre_id,
  album: props.song.album_id,
  release_date: formatDate(props.song.release_date, 'yyyy-MM-dd')
})

function submitForm () {
  updateSong(props.song.id, form.value)
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="title" class="form-label fw-medium">Title *</label>
      <InputText
        id="title"
        v-model="form.title"
        type="text"
        class="w-full flex"
        required
      />
    </div>

    <div class="mb-3">
      <label for="track" class="form-label fw-medium">Track Number *</label>
      <InputNumber
        v-model="form.track"
        :use-grouping="false"
        class="w-full flex"
        required
      />
    </div>

    <div class="mb-3">
      <label for="genre" class="form-label fw-medium">Genre *</label>
      <Dropdown
        v-model="form.genre"
        filter
        :options="genres"
        option-value="id"
        option-label="name"
        placeholder="Select Genre"
        class="w-full flex"
        required
      />
    </div>

    <div class="mb-3">
      <label for="release_date" class="form-label fw-medium">Release Date *</label>
      <Calendar
        v-model="form.release_date"
        date-format="yy-mm-dd"
        show-icon
        class="w-full flex"
        required
      />
    </div>

    <div class="mb-3">
      <label for="album" class="form-label fw-medium select2">Album (Optional)</label>
      <Dropdown
        v-model="form.album"
        filter
        :options="albums"
        option-value="id"
        option-label="title"
        placeholder="Select Album"
        class="w-full flex"
      />
    </div>

    <div class="mt-3 col-lg-4 mx-auto">
      <Button type="submit" class="btn btn-primary w-100">
        Save
      </Button>
    </div>
  </form>
</template>
