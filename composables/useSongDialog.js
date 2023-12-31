import { useDialog } from 'primevue/usedialog'

const uploadSongComponent = defineAsyncComponent(() =>
  import('../components/Controlroom/Songs/Dialog/UploadSongDialog.vue')
)

const updateSongComponent = defineAsyncComponent(() =>
  import('../components/Controlroom/Songs/Dialog/UpdateSongDialog.vue')
)

const updateSongImageComponent = defineAsyncComponent(() =>
  import('../components/Controlroom/Songs/Dialog/UpdateSongImageDialog.vue')
)

export function useSongDialog () {
  const dialog = useDialog()

  const uploadSongDialog = () => {
    dialog.open(uploadSongComponent, {
      props: {
        header: 'Upload Song',
        style: { width: '40vw' },
        breakpoints: { '960px': '75vw', '640px': '90vw' },
        modal: true
      }
    })
  }

  const updateSongDialog = (song) => {
    dialog.open(updateSongComponent, {
      data: { song },
      props: {
        header: 'Upload Song',
        style: { width: '40vw' },
        breakpoints: { '960px': '75vw', '640px': '90vw' },
        modal: true
      }
    })
  }

  const updateSongImageDialog = (song) => {
    dialog.open(updateSongImageComponent, {
      data: { song },
      props: {
        header: 'Update Artwork',
        style: { width: '40vw' },
        breakpoints: { '960px': '75vw', '640px': '90vw' },
        modal: true
      }
    })
  }

  return {
    uploadSongDialog,
    updateSongDialog,
    updateSongImageDialog
  }
}
