export function fileUrl (filePath) {
  const config = useRuntimeConfig()
  const url = config.public.backendUrl + '/' + filePath
  return url
}
