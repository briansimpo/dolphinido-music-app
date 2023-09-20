import { useDialog } from 'primevue/usedialog'

const updateAlbumComponent = defineAsyncComponent(() =>
  import('../components/Albums/Form/UpdateAlbum.vue')
)

const updateAlbumImageComponent = defineAsyncComponent(() =>
  import('../components/Albums/Form/UpdateAlbumImage.vue')
)

export function useAlbumFormDialog () {
  const dialog = useDialog()

  const updateAlbumDialog = (album) => {
    dialog.open(updateAlbumComponent, {
      data: { album },
      props: {
        header: 'Update Album',
        style: { width: '40vw' },
        breakpoints: { '960px': '75vw', '640px': '90vw' },
        modal: true
      }
    })
  }

  const updateAlbumImageDialog = (album) => {
    dialog.open(updateAlbumImageComponent, {
      data: { album },
      props: {
        header: 'Update Album Cover',
        style: { width: '40vw' },
        breakpoints: { '960px': '75vw', '640px': '90vw' },
        modal: true
      }
    })
  }

  return {
    updateAlbumDialog,
    updateAlbumImageDialog
  }
}
