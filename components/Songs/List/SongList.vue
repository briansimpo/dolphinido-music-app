<script setup>

const { genres } = useGenres()
const { uploadSongDialog } = useSongDialog()

const config = useRuntimeConfig()
const { token } = useAuthService()
const { errorMessage } = useToastMessage()
const page = ref(1)
const limit = ref(10)
const lastPage = ref(1)
const datalist = ref([])
const pending = ref(false)

const sortings = ref(['Title', 'Artist', 'Album', 'Year', 'Date Created'])

const filter = ref({
  genre: null
})
const sort = ref(null)

onMounted(() => {
  loadData()
})

const loadMore = () => {
  if (page.value <= lastPage.value) {
    page.value += 1
    loadData()
  }
}

const loadData = async () => {
  if (pending.value) {
    return
  }
  pending.value = true

  await $fetch('/portal/songs', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token.value}`
    },
    baseURL: config.public.apiBase,
    params: {
      page: page.value,
      limit: limit.value
    }
  }).then(function (response) {
    appendData(response.data)
    lastPage.value = response.meta.last_page
  }).catch(function () {
    errorMessage('Error loading data')
  }).finally(function () {
    pending.value = false
  })
}

const appendData = (newData) => {
  newData.forEach((data) => {
    datalist.value.push(data)
  })
}

</script>
<template>
  <div class="list list--lg mt-5">
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
                v-model="sort"
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
    <div class="row">
      <div v-if="pending">
        <StateLoader />
      </div>
      <div>
        <div v-for="song in datalist" :key="song.id" class="col-xl-12 mb-2">
          <SongListItem :song="song" class="mb-2" />
        </div>
      </div>
      <div class="mt-5 text-center">
        <LoadMoreButton @click="loadMore" />
      </div>
    </div>
  </div>
</template>
