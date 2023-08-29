export function formatBitrate (bitrate) {
  if (bitrate < 512) {
    return Math.round(bitrate) + 'Bps'
  } else {
    return Math.round(bitrate / 1000) + 'Bps'
  }
}
