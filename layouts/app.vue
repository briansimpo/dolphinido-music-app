<template>
  <div id="wrapper">
    <AppSidebar />
    <AppHeader />
    <div id="page_content">
      <div class="hero" style="background-color: #8DD5FA; height: 12em" />
      <slot />
      <AppFooter />
    </div>
  </div>
</template>
