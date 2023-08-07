<template>
  <div class="dropzone text-center">
    <div class="dz-message">
      <i class="ri-upload-cloud-2-line fs-2 text-dark" />
      <span class="d-block fs-6 mt-2">
        <slot />
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.dropzone {
  border: 2px dashed #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: all 0.3s ease;
  background: #fff;
}
</style>
