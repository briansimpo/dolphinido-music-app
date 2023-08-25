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
      <NuxtLoadingIndicator />
      <NuxtPage />
      <Toast />
    </NuxtLayout>
  </div>
</template>
