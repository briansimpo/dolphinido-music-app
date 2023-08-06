export function useFileUpload () {
  function uploadFile (file) {
    if (!file) {
      return null
    } else {
      file = new Blob(file)
    }
    const readData = (f) => {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.readAsDataURL(f)
      })
    }
    const data = readData(file)
    return data
  }

  return {
    uploadFile
  }
}
