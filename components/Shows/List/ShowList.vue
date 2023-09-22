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

  await $fetch('/portal/shows', {
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
    <div v-if="pending">
      <StateLoader />
    </div>

    <div v-else class="list list--lg mt-5">
      <div class="row">
        <div v-for="show in datalist" :key="show.id" class="col-xl-4">
          <ShowListItem :show="show" class="mb-4" />
        </div>
        <div class="mt-5 text-center">
          <Button size="small" @click="loadMore">
            <i class="ri-loader-3-fill" />
            <span> Load more</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
