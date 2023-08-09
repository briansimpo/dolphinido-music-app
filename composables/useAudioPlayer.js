export function useAudioPlayer () {
  const isPlaying = ref(false)
  const audio = ref(null)
  const tracks = ref(null)
  const currentTrack = ref(null)
  // const trackTime = ref(null)
  // const currentVolume = ref(80)
  // const isLyrics = ref(false)
  // const lyricsPosition = ref('00:00')

  function loadTracks (tracks) {
    tracks.value = tracks
  }

  function play (track) {
    currentTrack.value = track

    if (audio.value && audio.value.src) {
      audio.value.pause()
      isPlaying.value = false
      audio.value.src = ''
    }

    audio.value = new Audio()
    audio.value.src = fileUrl(track.file)

    setTimeout(() => {
      isPlaying.value = true
      audio.value.play()
    }, 200)
  }

  function pause () {
    isPlaying.value = false
    audio.value.pause()
  }

  function playOrPause (track) {
    if (!audio.value || !audio.value.src || (currentTrack.value.id !== track.value.id)) {
      play(track)
      return
    }
    pause()
  }

  function prevTrack (currentTrack) {
    if (tracks.value === null) {
      return
    }
    const track = tracks.value[currentTrack.track - 2]
    play(track)
  }

  function nextTrack (currentTrack) {
    if (currentTrack.track === tracks.value.length) {
      const track = tracks.value[0]
      play(track)
    } else {
      const track = tracks.value[currentTrack.track]
      play(track)
    }
  }

  function playFromFirst () {
    resetPlayer()
    const track = tracks.value[0]
    play(track)
  }

  function resetPlayer () {
    isPlaying.value = false
    audio.value = null
    tracks.value = null
    currentTrack.value = null
  }

  return {
    isPlaying,
    currentTrack,
    loadTracks,
    play,
    pause,
    playOrPause,
    prevTrack,
    nextTrack,
    playFromFirst,
    resetPlayer
  }
}
