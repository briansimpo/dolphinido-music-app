<script setup>
const { pending, shows } = useUserShows()
</script>
<template>
  <div>
    <div v-if="pending">
      <StateLoader />
    </div>

    <div v-else class="list list--lg mt-5">
      <div class="row">
        <div v-for="show in shows" :key="show.id" class="col-xl-4">
          <ShowListItem :show="show" class="mb-4" />
        </div>
      </div>
    </div>
  </div>
</template>
