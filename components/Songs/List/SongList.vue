<script setup>

const config = useRuntimeConfig()
const { token } = useAuthService()
const { errorMessage } = useToastMessage()
const page = ref(1)
const limit = ref(10)
const lastPage = ref(1)
const datalist = ref([])
const pending = ref(false)

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
        <Button class="btn btn-primary" @click="loadMore">
          <div class="btn__wrap">
            <i class="ri-loader-3-fill" /> <span>Load more</span>
          </div>
        </Button>
      </div>
    </div>
  </div>
</template>
