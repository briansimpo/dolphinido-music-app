<script setup>

const { signup } = useSignUp()

/** @param {Event} event */
function submitForm (event) {
  const form = event.currentTarget
  const formData = new FormData(form)
  signup(formData)
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
                  <input id="name" type="text" name="name" class="form-control" required>
                </div>

                <div class="mb-3">
                  <label for="username" class="form-label fw-medium">Email</label>
                  <input id="username" type="email" name="username" class="form-control" required>
                </div>
                <div class="mb-2">
                  <label for="password" class="form-label fw-medium">Password</label>
                  <input id="password" type="password" name="password" class="form-control" required>
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
                  <input type="submit" class="btn btn-primary w-100" value="Register">
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
