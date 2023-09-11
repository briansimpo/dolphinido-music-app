<script setup>
const { artistTypes } = useArtistTypes()
const { register } = useRegisterService()
const { user } = useAuthService()

const form = ref({
  name: user.name,
  birthday: null,
  artist_type: null,
  country: null,
  city: null
})

function submitForm () {
  const formData = new FormData()
  formData.append('name', form.value.name)
  formData.append('birthday', formatDate(form.value.birthday, 'yyyy-MM-dd'))
  formData.append('artist_type', form.value.artist_type)
  formData.append('country', form.value.country)
  formData.append('city', form.value.city)
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
        <form class="mt-5" @submit.prevent="submitForm">
          <div class="row">
            <div class="col-lg-12">
              <div class="mb-3">
                <label for="name" class="form-label fw-medium">Name *</label>
                <InputText
                  id="name"
                  v-model="form.name"
                  type="text"
                  class="w-full flex"
                  required
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="birthday" class="form-label fw-medium">Date of Birth *</label>
                <Calendar
                  v-model="form.birthday"
                  date-format="yy-mm-dd"
                  show-icon
                  class="w-full flex"
                  required
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="artist_type" class="form-label fw-medium">Artist Type *</label>

                <Dropdown
                  v-model="form.artist_type"
                  :options="artistTypes"
                  option-value="id"
                  option-label="name"
                  placeholder="Select Artist Type"
                  class="w-full flex"
                  required
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="country" class="form-label fw-medium">Country *</label>
                <InputText
                  id="country"
                  v-model="form.country"
                  type="text"
                  class="w-full flex"
                  required
                />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label for="city" class="form-label fw-medium">City *</label>
                <InputText
                  id="city"
                  v-model="form.city"
                  type="text"
                  class="w-full flex"
                  required
                />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="mt-3 col-lg-4 mx-auto">
              <Button type="submit" class="btn btn-primary w-100">
                Register
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
