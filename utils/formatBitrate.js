export function formatBitrate (bitrate) {
  if (bitrate < 512) {
    return Math.round(bitrate)
  } else {
    return Math.round(bitrate / 1000)
  }
}
