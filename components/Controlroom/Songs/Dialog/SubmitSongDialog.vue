<script setup>
import { inject } from 'vue'

const props = defineProps({
  file: { type: Object, required: true }
})

const dialogRef = inject('dialogRef')

const { createSong } = useSongService()
const { refreshData } = useRefresh()

const form = ref({
  title: removeExtension(props.file.name),
  song_file: props.file
})

function submitForm () {
  const formData = new FormData()
  formData.append('title', form.value.title)
  formData.append('song_file', form.value.song_file)
  createSong(formData)
  dialogRef.value.close()
  refreshData()
}

</script>

<template>
  <form @submit.prevent="submitForm">
    <div class="mb-3">
      <label for="title" class="form-label fw-medium">Title *</label>
      <InputText
        id="title"
        v-model="form.title"
        type="text"
        class="w-full flex"
        required
      />
    </div>

    <div class="mt-3 col-lg-4 mx-auto">
      <Button type="submit" class="btn btn-primary w-100">
        Save
      </Button>
    </div>
  </form>
</template>
