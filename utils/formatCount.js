export function formatCount (count) {
  if (count == null) {
    return 0
  }
  if (count >= 1000 && count < 1e6) {
    return (count / 1e3).toFixed(0) + 'K'
  } else if (count >= 1e6 && count < 1e9) {
    return (count / 1e6).toFixed(0) + 'M'
  } else if (count >= 1e9) {
    return (count / 1e9).toFixed(0) + 'B'
  } else {
    return count.toLocaleString()
  }
}
