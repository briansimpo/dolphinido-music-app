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
      <ConfirmDialog />
      <Toast position="bottom-right" />
    </NuxtLayout>
  </div>
</template>
