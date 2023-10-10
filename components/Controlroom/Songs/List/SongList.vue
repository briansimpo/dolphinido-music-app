<script setup>
const { genres } = useGenres()
const { uploadSongDialog } = useSongDialog()

const filter = ref({
  genre: null,
  sort: null,
  page: 1,
  limit: 5
})

const sortings = ref([
  'title',
  'artist',
  'album',
  'year'
])

const { pending, data, loadMore } = useDataFetch('/portal/songs', filter.value)

</script>
<template>
  <div class="list list--lg mt-5">
    <div v-if="pending">
      <StateLoader />
    </div>
    <div v-else>
      <div class="row mb-6">
        <div class="col-lg-6 mb-2">
          <Button icon="pi pi-upload" label="Upload" @click="uploadSongDialog" />
        </div>
        <div class="col-lg-6">
          <div class="row">
            <div class="col-lg-6 mb-2">
              <div class="p-float-label">
                <Dropdown
                  v-model="filter.genre"
                  filter
                  show-clear
                  :options="genres"
                  option-value="id"
                  option-label="name"
                  placeholder="Genre"
                  class="w-full flex"
                  required
                />
                <label for="dd-city">Genre</label>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="p-float-label">
                <Dropdown
                  v-model="filter.sort"
                  show-clear
                  :options="sortings"
                  placeholder="Sort By"
                  class="w-full flex"
                  required
                />
                <label for="dd-city">Sort By</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="data.length > 0" class="row">
        <div class="col-lg-12">
          <div v-for="song in data" :key="song.id">
            <SongListItem :song="song" class="mb-2" />
          </div>
          <div class="mt-5 text-center">
            <LoadMoreButton @click="loadMore" />
          </div>
        </div>
      </div>
      <div v-else class="row">
        <div class="text-center mb-4">
          <p class="display-5 email">
            You do not have any songs
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
