<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `Dolphinido - ${titleChunk}` : 'Dolphinido'
  }
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
