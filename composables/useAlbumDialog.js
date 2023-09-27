import { useDialog } from 'primevue/usedialog'

const updateAlbumComponent = defineAsyncComponent(() =>
  import('../components/Controlroom/Albums/Dialog/UpdateAlbumDialog.vue')
)

const updateAlbumImageComponent = defineAsyncComponent(() =>
  import('../components/Controlroom/Albums/Dialog/UpdateAlbumImageDialog.vue')
)

const addAlbumTrackComponent = defineAsyncComponent(() =>
  import('../components/Controlroom/Albums/Dialog/AddAlbumTrackDialog.vue')
)

export function useAlbumDialog () {
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

  const addAlbumTrackDialog = (album) => {
    dialog.open(addAlbumTrackComponent, {
      data: { album },
      props: {
        header: 'Add Album Track',
        style: { width: '40vw' },
        breakpoints: { '960px': '75vw', '640px': '90vw' },
        modal: true
      }
    })
  }

  return {
    updateAlbumDialog,
    updateAlbumImageDialog,
    addAlbumTrackDialog
  }
}
