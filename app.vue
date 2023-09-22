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
      <DynamicDialog />
      <Toast position="bottom-right" />
      <AudioPrayer />
    </NuxtLayout>
  </div>
</template>
