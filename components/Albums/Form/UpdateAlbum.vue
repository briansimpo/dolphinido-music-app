<script setup>

const props = defineProps({
  album: { type: Object, required: true }
})

const { genres } = useGenres()
const { albumReleases } = useAlbumReleases()
const { updateAlbum } = useUserAlbumService()

const form = ref({
  title: props.album.title,
  genre: props.album.genre_id,
  album_release: props.album.album_release_id,
  release_date: formatDate(props.album.release_date, 'yyyy-MM-dd')
})

function submitForm () {
  updateAlbum(props.album.id, form.value)
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
      <label for="genre" class="form-label fw-medium">Album Release *</label>
      <Dropdown
        v-model="form.album_release"
        :options="albumReleases"
        option-value="id"
        option-label="name"
        placeholder="Select Release"
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

    <div class="mt-3 col-lg-4 mx-auto">
      <Button type="submit" class="btn btn-primary w-100 float-left">
        Save
      </Button>
    </div>
  </form>
</template>
