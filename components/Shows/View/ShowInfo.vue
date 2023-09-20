<script setup>
const props = defineProps({
  show: { type: Object, required: true }
})
</script>

<template>
  <div class="row fs-6 mb-4">
    <div class="col-sm-6">
      <div class="d-flex align-items-center mb-3">
        <i class="ri-map-pin-2-fill fs-5" />
        <a href="#" class="ms-3 text-dark">
          {{ props.show.venue }}, {{ props.show.city }} - {{ props.show.country }}
        </a>
      </div>
      <div class="d-flex align-items-center mb-3">
        <i class="ri-calendar-fill fs-5" />
        <a href="#" class="ms-3 text-dark">
          {{ formatDate(props.show.event_date) }} <br>
        </a>
      </div>
      <div class="d-flex align-items-center mb-3">
        <i class="ri-time-fill fs-5" />
        <a href="#" class="ms-3 text-dark">
          {{ props.show.event_time }} <br>
        </a>
      </div>
    </div>

    <div class="col-sm-6">
      <div class="d-flex align-items-center mb-3">
        <i class="ri-phone-fill fs-5" />
        <a href="#" class="ms-3 text-dark">
          {{ props.show.contact_number }}
        </a>
      </div>
      <div class="d-flex align-items-center mb-3">
        <i class="ri-mail-fill fs-5" />
        <a href="#" class="ms-3 text-dark">
          {{ props.show.contact_email }}
        </a>
      </div>
      <div class="d-flex align-items-center mb-3">
        <i class="ri-money-dollar-box-fill fs-5" />
        <a href="#" class="ms-3 text-dark">
          {{ formatCurrency(props.show.ticket_price) }}
        </a>
      </div>
      <div v-if="props.show.seats" class="d-flex align-items-center mb-3">
        <i class="ri-user-fill fs-5" />
        <a href="#" class="ms-3 text-dark">
          {{ props.show.seats }}
        </a>
      </div>
    </div>
  </div>
  <p class="justify-content-center">
    {{ props.show.description }}
  </p>
</template>
