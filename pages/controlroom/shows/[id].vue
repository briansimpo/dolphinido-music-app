<script setup>
definePageMeta({
  layout: 'artist',
  middleware: 'artist',
  validate: (route) => {
    return route.params.id !== undefined
  }
})

const route = useRoute()
const { pending, show } = useUserShow(route.params.id)

</script>
<template>
  <div class="under-hero container">
    <SectionPanel>
      <SectionHead>
        Show <span class="text-primary">Details</span>
      </SectionHead>
      <SectionBody>
        <div v-if="pending">
          <StateLoader />
        </div>
        <div v-else>
          <ShowDetails :show="show" />
        </div>
      </SectionBody>
    </SectionPanel>
  </div>
</template>
