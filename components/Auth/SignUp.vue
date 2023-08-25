<script setup>

const { signup } = useSignUp()

const form = ref({
  name: null,
  email: null,
  password: null
})

function submitForm () {
  signup(form.value)
}

</script>
<template>
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-7 col-md-9 col-sm-11 mx-auto">
          <div class="card">
            <div class="card-body p-sm-5">
              <div class="text-center">
                <h4>Register with <span class="text-primary">Dolphinido</span></h4>
              </div>

              <form class="mt-5" @submit.prevent="submitForm">
                <div class="mb-3">
                  <label for="name" class="form-label fw-medium">Name</label>
                  <InputText
                    v-model="form.name"
                    input-id="name"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>

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

                <div class="mb-4">
                  <div class="form-check mb-0">
                    <input id="agree" class="form-check-input" type="checkbox" required>
                    <label class="form-check-label" for="agree">
                      I agree <a href="#">Terms and Conditions</a>
                    </label>
                  </div>
                </div>
                <div class="mb-5">
                  <Button type="submit" class="btn btn-primary w-100">
                    Register
                  </Button>
                </div>
                <p>
                  Do you have an Account?
                  <NuxtLink to="/login" class="fw-medium">
                    Login
                  </NuxtLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
