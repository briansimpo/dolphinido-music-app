<template>
  <!-- <div class="loading">
    <div class="spinner" />
  </div> -->
  <div id="line_loader" />
  <div id="loader">
    <div class="loader">
      <div class="loader__eq mx-auto">
        <span /> <span /> <span /> <span /> <span />
        <span />
      </div>
      <span class="loader__text mt-2">Loading</span>
    </div>
  </div>
</template>
<style scoped>

.loading{
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.spinner{
  width:40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
}
</style>
