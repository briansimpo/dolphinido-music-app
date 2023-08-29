<script setup>

const { user, role } = useAuthService()

</script>
<template>
  <div class="dropdown ms-3 ms-sm-4">
    <a
      id="user_menu"
      href="#"
      class="avatar header-text"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <UserAvatar :user="user" />
      <span class="ps-2 d-none d-sm-block">{{ user.name }}</span>
    </a>

    <ul class="dropdown-menu dropdown-menu-md dropdown-menu-end" aria-labelledby="user_menu">
      <li>
        <div class="py-2 px-3 avatar avatar--lg">
          <UserAvatar :user="user" />
          <div class="avatar__content">
            <span class="avatar__title">{{ user.name }}</span>
            <span class="avatar__subtitle">{{ role }}</span>
          </div>
        </div>
      </li>
      <li>
        <a class="dropdown-item d-flex align-items-center" href="#">
          <i class="ri-user-3-line fs-5" />
          <span class="ps-2">Profile</span>
        </a>
      </li>

      <li>
        <a class="dropdown-item d-flex align-items-center" href="#">
          <i class="ri-money-dollar-box-line fs-5" />
          <span class="ps-2">Credit</span>
        </a>
      </li>

      <li>
        <a class="dropdown-item d-flex align-items-center" href="#">
          <i class="ri-settings-line fs-5" />
          <span class="ps-2">Settings</span>
        </a>
      </li>

      <li>
        <SignOut />
      </li>
    </ul>
  </div>
</template>
