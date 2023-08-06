<script setup>
const { toggleSidebar } = useSidebarToggle()
</script>

<template>
  <aside id="sidebar">
    <div class="sidebar-head d-flex align-items-center justify-content-between">
      <h3>
        <NuxtLink to="/" class="brand">
          Dolphinido
        </NuxtLink>
      </h3>

      <div role="button" class="sidebar-toggler" @click="toggleSidebar">
        <div class="d-none d-lg-block">
          <i class="ri-menu-3-line sidebar-menu-1" />
          <i class="ri-menu-line sidebar-menu-2" />
        </div>
        <i class="ri-menu-fold-line d-lg-none" />
      </div>
    </div>

    <div class="sidebar-body">
      <ArtistMenu />
    </div>

    <div class="sidebar-foot">
      <NuxtLink to="/discover" class="btn btn-primary d-flex">
        <div class="btn__wrap">
          <i class="ri-music-2-fill" />
          <span>Discover</span>
        </div>
      </NuxtLink>
    </div>
  </aside>
</template>

<style>
.sidebar-body {
    overflow-y: auto;
}

/* width */
.sidebar-body::-webkit-scrollbar {
    width: 4px;
}

/* Handle */
.sidebar-body::-webkit-scrollbar-thumb {
    background: rgb(197, 193, 193);
    border-radius: 2px;
}
</style>
