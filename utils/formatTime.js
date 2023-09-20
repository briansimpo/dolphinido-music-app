export function formatTime (dateString) {
  // Create a Date object from the input string
  const dateObject = new Date(dateString)

  // Extract hours, minutes, and seconds
  const hours = String(dateObject.getHours()).padStart(2, '0')
  const minutes = String(dateObject.getMinutes()).padStart(2, '0')
  const seconds = String(dateObject.getSeconds()).padStart(2, '0')

  // Format the time in MySQL format (HH:MM:SS)
  const time = `${hours}:${minutes}:${seconds}`

  return time
}
