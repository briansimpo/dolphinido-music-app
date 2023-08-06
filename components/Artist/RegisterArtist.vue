<script setup>
const { artistTypes } = useArtistTypes()
const { register } = useBecomeArtist()

/** @param {Event} event */
function submitForm (event) {
  const form = event.currentTarget
  const formData = new FormData(form)
  register(formData)
}

</script>

<template>
  <div class="col-lg-8 col-md-6 col-sm-12 mx-auto">
    <div class="mx-auto text-center">
      <h1 class="display-6">
        Artist Account
      </h1>
    </div>
    <div class="card mt-4">
      <div class="card-body">
        <form class="mt-5" enctype="multipart/form-data" @submit.prevent="submitForm">
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label for="name" class="form-label fw-medium">Name *</label>
                <input id="name" name="name" type="text" class="form-control" required>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="birthday" class="form-label fw-medium">Date of Birth *</label>
                <input id="birthday" name="birthday" type="date" class="form-control" required>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="artist_type" class="form-label fw-medium">Artist Type *</label>
                <select id="artist_type" v-model="form.artist_type" class="form-control" required>
                  <option v-for="type in artistTypes" :key="type.id" :value="type.id">
                    {{ type.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="country" class="form-label fw-medium">Country *</label>
                <input id="country" name="country" type="text" class="form-control" required>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="city" class="form-label fw-medium">City *</label>
                <input id="city" name="city" type="text" class="form-control" required>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="mt-3 col-lg-4 mx-auto">
              <button type="submit" class="btn btn-primary w-100">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
