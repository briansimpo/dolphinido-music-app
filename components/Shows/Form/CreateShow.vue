<script setup>
import { useDropzone } from 'vue3-dropzone'

const { errorMessage } = useToastMessage()
const { countries } = useCountries()
const { createShow } = useShowService()
const { getRootProps, getInputProps } = useDropzone({ onDrop })

const form = ref({
  title: null,
  venue: null,
  event_date: null,
  event_time: null,
  country: null,
  city: null,
  contact_email: null,
  contact_number: null,
  description: null,
  is_free: 1,
  ticket_price: null,
  cover_image: null
})

function onDrop (acceptFiles) {
  const allowedTypes = ['image/png', 'image/jpeg']
  const uploadFile = acceptFiles[0]
  if (allowedTypes.includes(uploadFile.type)) {
    form.value.cover_image = uploadFile
  } else {
    errorMessage('File should be valid image')
  }
}

function submitForm () {
  const formData = new FormData()
  formData.append('title', form.value.title)
  formData.append('venue', form.value.venue)
  formData.append('event_date', formatDate(form.value.event_date, 'yyyy-MM-dd'))
  formData.append('event_time', form.value.event_time)
  formData.append('country', form.value.country)
  formData.append('city', form.value.city)
  formData.append('contact_email', form.value.contact_email)
  formData.append('contact_number', form.value.contact_number)
  formData.append('description', form.value.description)
  formData.append('is_free', form.value.is_free)
  formData.append('ticket_price', form.value.ticket_pric)
  formData.append('cover_image', form.value.cover_image)
  createShow(formData)
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="col-xl-6 mb-4">
      <div v-if="!form.cover_image" v-bind="getRootProps()">
        <FileDropzone>
          <input accept="image/*" v-bind="getInputProps()">
          <span> Upload Cover Image </span>
        </FileDropzone>
      </div>
      <div v-else>
        <ImagePreview :image="form.cover_image" />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 mb-4">
        <label for="title" class="form-label fw-medium">Title *</label>
        <InputText
          v-model="form.title"
          input-id="title"
          type="text"
          class="form-control"
          required
        />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 mb-4">
        <label for="venue" class="form-label fw-medium">Venue *</label>
        <InputText
          v-model="form.venue"
          input-id="venue"
          type="text"
          class="form-control"
          required
        />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6 mb-4">
        <label for="date" class="form-label fw-medium">Date *</label>
        <Calendar
          v-model="form.event_date"
          input-id="date"
          date-format="yy-mm-dd"
          show-icon
          style="display: flex; width:auto"
          required
        />
      </div>
      <div class="col-sm-6 mb-4">
        <label for="time" class="form-label fw-medium">Time *</label>
        <Calendar
          v-model="form.event_time"
          input-id="time"
          show-icon
          show-time
          time-only
          style="display: flex; width:auto"
          required
        />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6 mb-4">
        <label for="email" class="form-label fw-medium">Contact Email *</label>
        <InputText
          v-model="form.contact_email"
          input-id="email"
          type="email"
          class="form-control"
          required
        />
      </div>
      <div class="col-sm-6 mb-4">
        <label for="phone" class="form-label fw-medium">Contact Number *</label>
        <InputMask
          v-model="form.contact_number"
          input-id="phone"
          type="phone"
          mask="(265) 999-999-999"
          class="form-control"
          required
        />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6 mb-4">
        <label for="country" class="form-label fw-medium">Country *</label>
        <Dropdown
          v-model="form.country"
          input-id="country"
          filter
          :options="countries"
          placeholder="Select Country"
          class="form-control"
          required
        />
      </div>
      <div class="col-sm-6 mb-4">
        <label for="city" class="form-label fw-medium">City *</label>
        <InputText
          v-model="form.city"
          input-id="city"
          type="text"
          size="large"
          class="form-control"
          required
        />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 mb-4">
        <label for="description" class="form-label fw-medium">Describe the show </label>
        <Textarea
          v-model="form.description"
          input-id="description"
          cols="30"
          rows="4"
          class="form-control"
          placeholder="Write few words about the show"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 d-flex align-items-center mb-4">
        <div class="form-check me-4">
          <RadioButton
            v-model="form.is_free"
            input-id="free"
            :value="1"
          />
          <label for="free" class="ml-2">Free</label>
        </div>
        <div class="form-check">
          <RadioButton
            v-model="form.is_free"
            input-id="paid"
            :value="0"
          />
          <label for="paid" class="ml-2">Paid</label>
        </div>
      </div>
    </div>

    <div v-if="!form.is_free" class="row">
      <div class="col-sm-12">
        <label for="ticket_price" class="form-label fw-medium">Ticke Price *</label>
        <InputNumber
          v-model="form.ticket_price"
          input-id="ticket_price"
          :min-fraction-digits="2"
          style="display: flex; width:auto"
        />
      </div>
    </div>

    <div class="mt-3 col-lg-4 mx-auto">
      <Button type="submit" class="btn btn-primary w-100">
        Save
      </Button>
    </div>
  </form>
</template>
