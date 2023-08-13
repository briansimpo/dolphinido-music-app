<script setup>
definePageMeta({
  layout: 'artist',
  middleware: 'artist',
  validate: (route) => {
    return route.params.id !== undefined
  }
})

const route = useRoute()
const { show } = useUserShow(route.params.id)

</script>
<template>
  <div class="under-hero container">
    <SectionPanel>
      <SectionHead>
        Show <span class="text-primary">Details</span>
      </SectionHead>
      <SectionBody>
        <ShowDetails :show="show" />
      </SectionBody>
    </SectionPanel>
  </div>
</template>
