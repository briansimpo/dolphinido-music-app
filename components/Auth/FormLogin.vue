<script setup>

const { signin } = useSignIn()

const form = ref({
  username: null,
  password: null
})

function submitForm () {
  signin(form.value)
}
</script>

<template>
  <form class="mt-5" @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="username" class="form-label fw-medium">Email</label>
      <InputText
        v-model="form.username"
        input-id="username"
        type="email"
        class="form-control"
        required
      />
    </div>

    <div class="mb-2">
      <label for="password" class="form-label fw-medium">Password</label>
      <InputText
        v-model="form.password"
        input-id="password"
        type="password"
        class="form-control"
        required
      />
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
