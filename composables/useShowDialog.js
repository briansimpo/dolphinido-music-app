import { useDialog } from 'primevue/usedialog'

const updateShowComponent = defineAsyncComponent(() =>
  import('../components/Shows/Dialog/UpdateShowDialog.vue')
)

const updateShowImageComponent = defineAsyncComponent(() =>
  import('../components/Shows/Dialog/UpdateShowImageDialog.vue')
)

export function useShowDialog () {
  const dialog = useDialog()

  const updateShowDialog = (show) => {
    dialog.open(updateShowComponent, {
      data: { show },
      props: {
        header: 'Update Show',
        style: { width: '40vw' },
        breakpoints: { '960px': '75vw', '640px': '90vw' },
        modal: true
      }
    })
  }

  const updateShowImageDialog = (show) => {
    dialog.open(updateShowImageComponent, {
      data: { show },
      props: {
        header: 'Update Show Image',
        style: { width: '40vw' },
        breakpoints: { '960px': '75vw', '640px': '90vw' },
        modal: true
      }
    })
  }

  return {
    updateShowDialog,
    updateShowImageDialog
  }
}
