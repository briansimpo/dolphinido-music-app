import { useDialog } from 'primevue/usedialog'

const uploadSongComponent = defineAsyncComponent(() =>
  import('../components/Songs/Form/UploadSong.vue')
)

const updateSongComponent = defineAsyncComponent(() =>
  import('../components/Songs/Form/UpdateSong.vue')
)

const updateSongImageComponent = defineAsyncComponent(() =>
  import('../components/Songs/Form/UpdateSongImage.vue')
)

export function useSongFormDialog () {
  const dialog = useDialog()

  const uploadSongDialog = () => {
    dialog.open(uploadSongComponent, {
      props: {
        header: 'Update Song',
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
