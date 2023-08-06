<script setup>

const { signin } = useSignIn()

/** @param {Event} event */
function submitForm (event) {
  const form = event.currentTarget
  const formData = new FormData(form)
  signin(formData)
}
</script>

<template>
  <form method="POST" class="mt-5" @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="username" class="form-label fw-medium">Email</label>
      <input
        id="username"
        type="email"
        name="username"
        class="form-control"
        placeholder="email"
        autocomplete="email"
        required
      >
    </div>

    <div class="mb-2">
      <label for="password" class="form-label fw-medium">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        class="form-control"
        placeholder="password"
        autocomplete="current-password"
        required
      >
    </div>

    <div class="mb-4 text-end">
      <a href="#" class="fw-medium external">Forgot Password</a>
    </div>
    <div class="mb-5">
      <input type="submit" class="btn btn-primary w-100" value="Login">
    </div>
    <p>
      Not registered yet?
      <NuxtLink to="/register" class="fw-medium">
        Register
      </NuxtLink>
    </p>
  </form>
</template>
