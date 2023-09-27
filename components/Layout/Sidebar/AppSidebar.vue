<script setup>
import { OnClickOutside } from '@vueuse/components'

const { toggleSidebar, closeSidebar } = useSidebarToggle()
const { authenticated, user } = useAuthService()
</script>

<template>
  <OnClickOutside @trigger="closeSidebar">
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
        <UserMenu />
      </div>

      <div class="sidebar-foot">
        <NuxtLink v-if="authenticated && user.is_artist" to="/controlroom" class="btn btn-primary d-flex">
          <div class="btn__wrap">
            <i class="ri-account-box-fill" />
            <span>Control Room</span>
          </div>
        </NuxtLink>

        <NuxtLink v-if="authenticated && user.is_fan" to="/become-artist" class="btn btn-primary d-flex">
          <div class="btn__wrap">
            <i class="ri-account-box-fill" />
            <span>Become An Artist</span>
          </div>
        </NuxtLink>
      </div>
    </aside>
  </OnClickOutside>
</template>

<style>
.sidebar-body{
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
