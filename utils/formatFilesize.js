export function formatFilesize (sizeBytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

  let index = 0
  while (sizeBytes >= 1024 && index < units.length - 1) {
    sizeBytes /= 1024
    index++
  }

  return `${sizeBytes.toFixed(2)} ${units[index]}`
}
