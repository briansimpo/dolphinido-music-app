<script setup>
import { useDropzone } from 'vue3-dropzone'

const coverImage = ref(null)

const { getRootProps, getInputProps } = useDropzone({
  onDrop
})

function onDrop (acceptFiles) {
  const allowedTypes = ['image/png', 'image/jpeg']
  const uploadFile = acceptFiles[0]
  if (allowedTypes.includes(uploadFile.type)) {
    coverImage.value = uploadFile
  } else {
    alert('File should be valid image')
  }
}

const { addShow } = useAddShow()

/** @param {Event} event */
function submitForm (event) {
  const form = event.currentTarget
  const formData = new FormData(form)
  formData.append('cover_image', coverImage.value)
  addShow(formData)
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="col-xl-6 mb-4">
      <div v-if="!coverImage" v-bind="getRootProps()">
        <FileDropzone>
          <input accept="image/*" v-bind="getInputProps()">
          <span> Cover Image </span>
        </FileDropzone>
      </div>
      <div v-else>
        <ImagePreview :image="coverImage" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 mb-4">
        <input
          type="text"
          name="title"
          class="form-control"
          placeholder="Event name"
        >
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 mb-4">
        <input
          type="text"
          name="venue"
          class="form-control"
          placeholder="Event Venue"
        >
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6 mb-4">
        <input
          type="date"
          name="event_date"
          class="form-control"
          placeholder="Event Date"
        >
      </div>
      <div class="col-sm-6 mb-4">
        <input
          type="time"
          name="event_time"
          class="form-control"
          placeholder="Event Time"
        >
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6 mb-4">
        <input
          type="text"
          name="country"
          class="form-control"
          placeholder="Country"
        >
      </div>
      <div class="col-sm-6 mb-4">
        <input
          type="text"
          name="city"
          class="form-control"
          placeholder="City"
        >
      </div>
    </div>

    <div class="row">
      <div class="col-sm-6 mb-4">
        <input
          type="email"
          name="contact_email"
          class="form-control"
          placeholder="Contact Email"
        >
      </div>
      <div class="col-sm-6 mb-4">
        <input
          type="text"
          name="contact_number"
          class="form-control"
          placeholder="Contact Number"
        >
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 mb-4">
        <textarea
          id="description"
          name="description"
          cols="30"
          rows="4"
          class="form-control"
          placeholder="Write few words about event"
        />
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 d-flex align-items-center mb-4">
        <div class="form-check me-4">
          <input
            id="free"
            class="form-check-input"
            type="radio"
            name="is_free"
            value="1"
            checked="checked"
          >
          <label
            class="form-check-label"
            for="free"
          >Free</label>
        </div>
        <div class="form-check">
          <input
            id="free"
            class="form-check-input"
            type="radio"
            value="0"
            name="is_free"
          >
          <label
            class="form-check-label"
            for="paid"
          >Paid</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <div class="input-group mb-3">
          <span id="basic-addon1" class="input-group-text">
            <i class="ri-money-dollar-circle-line" />
          </span>
          <input
            type="text"
            name="ticket_price"
            class="form-control"
            placeholder="Ticket price"
          >
        </div>
        <div class="form-text">
          Please add ticket price if
          Event is paid
        </div>
      </div>
    </div>

    <div class="mt-3 col-lg-4 mx-auto">
      <button type="submit" class="btn btn-primary w-100">
        Submit
      </button>
    </div>
  </form>
</template>
