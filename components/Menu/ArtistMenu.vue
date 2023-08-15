<template>
  <nav class="navbar d-block p-0">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="" class="nav-link d-flex align-items-center">
          <i class="ri-dashboard-line fs-5" />
          <span class="ps-3">Dashboard</span>
        </a>
      </li>

      <li class="nav-item nav-item--head">
        <span class="nav-item--head__text">Add Work</span>
        <span class="nav-item--head__dots">...</span>
      </li>

      <li class="nav-item">
        <NuxtLink to="/controlroom/songs/add" class="nav-link d-flex align-items-center">
          <i class="ri-add-circle-line fs-5" />
          <span class="ps-3">Add Song</span>
        </NuxtLink>
      </li>

      <li class="nav-item">
        <NuxtLink to="/controlroom/albums/add" class="nav-link d-flex align-items-center">
          <i class="ri-add-box-line fs-5" />
          <span class="ps-3">Add Album</span>
        </NuxtLink>
      </li>

      <li class="nav-item">
        <NuxtLink to="/controlroom/shows/add" class="nav-link d-flex align-items-center">
          <i class="ri-add-circle-line fs-5" />
          <span class="ps-3">Add Show</span>
        </NuxtLink>
      </li>

      <li class="nav-item nav-item--head">
        <span class="nav-item--head__text">My Work</span>
        <span class="nav-item--head__dots">...</span>
      </li>

      <li class="nav-item">
        <NuxtLink to="/controlroom/songs" class="nav-link d-flex align-items-center">
          <i class="ri-music-2-line fs-5" />
          <span class="ps-3">Songs</span>
        </NuxtLink>
      </li>

      <li class="nav-item">
        <NuxtLink to="/controlroom/albums" class="nav-link d-flex align-items-center">
          <i class="ri-album-line fs-5" />
          <span class="ps-3">Albums</span>
        </NuxtLink>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link d-flex align-items-center">
          <i class="ri-calendar-event-line fs-5" />
          <span class="ps-3">Shows</span>
        </a>
      </li>

      <li class="nav-item nav-item--head">
        <span class="nav-item--head__text">Revenue</span>
        <span class="nav-item--head__dots">...</span>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link d-flex align-items-center">
          <i class="ri-shopping-cart-line fs-5" />
          <span class="ps-3">Sales</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link d-flex align-items-center">
          <i class="ri-money-dollar-box-line fs-5" />
          <span class="ps-3">Royalties</span>
        </a>
      </li>

      <li class="nav-item nav-item--head">
        <span class="nav-item--head__text">Reach Out</span>
        <span class="nav-item--head__dots">...</span>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link d-flex align-items-center">
          <i class="ri-mail-send-line fs-5" />
          <span class="ps-3">Fan Reach</span>
        </a>
      </li>

      <li class="nav-item">
        <a href="#" class="nav-link d-flex align-items-center">
          <i class="ri-user-follow-line fs-5" />
          <span class="ps-3">Artist Connect</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
