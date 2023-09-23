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

  await $fetch('/portal/albums', {
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
  <div>
    <div class="list list--lg mt-5">
      <div class="row">
        <div v-if="pending">
          <StateLoader />
        </div>
        <div v-else>
          <div v-for="album in datalist" :key="album.id" class="col-xl-12">
            <AlbumListItem :album="album" class="mb-2" />
          </div>
        </div>
        <div class="mt-5 text-center">
          <LoadMoreButton @click="loadMore" />
        </div>
      </div>
    </div>
  </div>
</template>
