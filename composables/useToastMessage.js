import { useToast } from 'primevue/usetoast'

export function useToastMessage () {
  const toast = useToast()

  const errorMessage = (message = 'Oops! an error occured') => {
    toast.add({
      severity: 'error',
      detail: message,
      life: 4000
    })
  }

  const successMessage = (message = 'Operation successful') => {
    toast.add({
      severity: 'success',
      detail: message,
      life: 4000
    })
  }

  return {
    errorMessage,
    successMessage
  }
}
