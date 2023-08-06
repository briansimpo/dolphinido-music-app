<script setup>
definePageMeta({
  layout: 'guest',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/discover'
  }
})

</script>
<template>
  <div>
    <div class="main-section">
      <div class="container">
        <div class="col-xl-6 col-lg-8 mx-auto text-center fs-5 mb-5">
          <h2>Get In <span class="text-primary">Touch</span></h2>
          <p>Got any question or need any clarification? Contact us now</p>
        </div>
        <div class="col-xl-8 col-lg-10 mx-auto mb-5">
          <div class="card p-lg-4">
            <div class="card-body">
              <form action="#" class="row">
                <div class="col-sm-6 mb-4">
                  <label
                    for="f_name"
                    class="form-label fw-medium"
                  >First name</label>
                  <input
                    id="f_name"
                    type="text"
                    class="form-control"
                    placeholder="First name"
                  >
                </div>
                <div class="col-sm-6 mb-4">
                  <label
                    for="l_name"
                    class="form-label fw-medium"
                  >Last name</label>
                  <input
                    id="l_name"
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  >
                </div>
                <div class="col-sm-6 mb-4">
                  <label
                    for="email"
                    class="form-label fw-medium"
                  >Email</label>
                  <input
                    id="email"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                  >
                </div>
                <div class="col-sm-6 mb-4">
                  <label
                    for="phone"
                    class="form-label fw-medium"
                  >Phone number</label>
                  <input
                    id="phone"
                    type="text"
                    class="form-control"
                    placeholder="Phone number"
                  >
                </div>
                <div class="col-12 mb-4">
                  <label
                    for="message"
                    class="form-label fw-medium"
                  >Message</label>
                  <textarea
                    id="message"
                    name="message"
                    cols="30"
                    rows="4"
                    class="form-control"
                    placeholder="Write here..."
                  />
                </div>
                <div class="col-12 text-center">
                  <button
                    type="button"
                    class="btn btn-primary"
                    style="min-width: 180px"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-section bg-light">
      <div class="container">
        <div class="col-xl-7 col-lg-10 fs-5 mx-auto text-center">
          <h2>
            Join
            <span class="text-primary">Now</span>
          </h2>
          <p>Just a few clicks and you start building your music career.</p>

          <NuxtLink to="/register" class="btn btn-lg btn-default external mt-3">
            Register
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
