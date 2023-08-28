<script setup>
const { pending, shows } = useUserShows()
</script>
<template>
  <div>
    <div class="row">
      <div class="col-xl-3">
        <select class="form-select" aria-label="Filter song">
          <option value="all">
            All
          </option>
          <option value="published">
            Published
          </option>
          <option value="unpublished">
            Unpublished
          </option>
          <option value="for_free">
            For Free
          </option>
          <option value="for_sale">
            For Sale
          </option>
        </select>
      </div>
    </div>

    <div v-if="pending">
      <StateLoader />
    </div>

    <div v-else class="list list--lg mt-5">
      <div class="row">
        <div v-for="show in shows" :key="show.id" class="col-xl-4">
          <ShowListItem :show="show" />
        </div>
      </div>
    </div>
  </div>
</template>
