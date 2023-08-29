<script setup>

const { pending, songs } = useUserSongs()

</script>
<template>
  <div class="list list--lg mt-5">
    <div class="row">
      <div v-if="pending">
        <StateLoader />
      </div>
      <div>
        <div v-for="song in songs" :key="song.id" class="col-xl-12 mb-2">
          <SongListItem :song="song" class="mb-2" />
        </div>
      </div>
    </div>
  </div>
</template>
