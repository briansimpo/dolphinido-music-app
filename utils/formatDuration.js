export function formatDuration (duration) {
  const d = Math.round(parseInt(duration))
  const durationMinute = Math.round(parseFloat(d))
  const result = new Date(durationMinute * 1000).toISOString().substr(11, 8)
  return result
}
