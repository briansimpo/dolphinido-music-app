export function formatDuration (duration, format = 'm') {
  const d = Math.round(parseInt(duration))
  const durationMinute = Math.round(parseFloat(d))

  const result = new Date(durationMinute * 1000)

  if (format === 'm') {
    return result.toISOString().substr(14, 5)
  } else if (format === 'h') {
    return result.toISOString().substr(11, 8)
  }
}
