<script setup>

const props = defineProps({
  show: { type: Object, required: true }
})

const { countries } = useCountries()
const { updateShow } = useShowService()

const form = ref({
  title: props.show.title,
  venue: props.show.venue,
  event_date: formatDate(props.show.event_date, 'yyyy-MM-dd'),
  event_time: props.venue.event_time,
  country: props.show.country,
  city: props.show.city,
  contact_email: props.show.contact_email,
  contact_number: props.show.contact_number,
  description: props.show.description,
  is_free: props.show.is_free,
  ticket_price: props.show.ticket_price
})

function submitForm () {
  updateShow(props.show.id, form.value)
}

</script>

<template>
  <form @submit.prevent="submitForm">
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
