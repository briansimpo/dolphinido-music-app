<script setup>
const { toggleSidebar } = useSidebarToggle()
</script>
<template>
  <header id="header">
    <div class="container">
      <div class="header-container">
        <div class="d-flex align-items-center">
          <div role="button" class="header-text d-lg-none me-3" @click="toggleSidebar">
            <i class="ri-menu-3-line" />
          </div>
          <AppSearch />
          <div class="header-text d-flex align-items-center text-white">
            <UserLanguageDropdown />
            <UserDropdown />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
