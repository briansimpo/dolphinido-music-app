<template>
  <header id="main_header">
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <h3>
          <NuxtLink to="/" class="brand">
            Dolphinido
          </NuxtLink>
        </h3>
        <div class="d-flex align-items-center navbar-ex">
          <NuxtLink to="/register" class="btn btn-sm btn-primary">
            Join for Free
          </NuxtLink>
          <NuxtLink to="/login" class="btn btn-sm btn-outline-dark ms-2">
            Login
          </NuxtLink>

          <button
            class="navbar-toggler ms-3 ms-sm-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="ri-menu-3-fill" />
          </button>
        </div>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav mt-4 mt-lg-0 mx-auto fw-semi-bold">
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/discover">
                Discover
              </NuxtLink>
            </li>

            <li class="nav-item">
              <NuxtLink class="nav-link" to="/charts">
                Charts
              </NuxtLink>
            </li>

            <li class="nav-item">
              <NuxtLink class="nav-link" to="/events">
                Events
              </NuxtLink>
            </li>

            <li class="nav-item">
              <NuxtLink class="nav-link" to="/contact">
                Contact us
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
