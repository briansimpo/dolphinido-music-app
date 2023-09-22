<script setup>
const song = ref({
  title: null,
  artist: null
})

function repeat () {
  // repeat
}

function next () {
  // next
}

function previous () {
  // prev
}

function shuffle () {
  // shuffle
}

function pausePlay () {
  // pause play
}

function isPlaying () {
  return true
}

function isPaused () {
  return false
}

</script>
<template>
  <div id="player" class="show">
    <div class="container">
      <div class="player-container">
        <div class="player-progress">
          <progress class="amplitude-buffered-progress player-progress__bar" value="0" />
          <progress class="amplitude-song-played-progress player-progress__bar" />
          <input type="range" class="amplitude-song-slider player-progress__slider">
        </div>
        <div class="cover d-flex align-items-center">
          <div class="cover__image">
            <img src="/images/cover/small/1.jpg" alt="">
          </div>
          <div class="cover__content ps-3 d-none d-sm-block">
            <a href="#" class="cover__title text-truncate">
              {{ song.title }}
            </a>
            <a href="#" class="cover__subtitle text-truncate">
              {{ song.artist }}
            </a>
          </div>
        </div>
        <div class="player-control">
          <button
            type="button"
            class="amplitude-repeat btn btn-icon me-4 d-none d-md-block"
            aria-label="Repeat"
            @click="repeat"
          >
            <i class="ri-repeat-2-fill fs-5" />
          </button>
          <button
            type="button"
            class="amplitude-prev btn btn-icon"
            aria-label="Backward"
            @click="previous"
          >
            <i class="ri-skip-back-mini-fill" />
          </button>
          <button
            type="button"
            class="amplitude-play-pause btn btn-icon btn-default rounded-pill"
            aria-label="Play pause"
            @click="pausePlay"
          >
            <i v-if="isPaused" class="ri-play-fill icon-play" />
            <i v-if="isPlaying" class="ri-pause-fill icon-pause" />
          </button>
          <button
            type="button"
            class="amplitude-next btn btn-icon"
            aria-label="Forward"
            @click="next"
          >
            <i class="ri-skip-forward-mini-fill" />
          </button>
          <button
            type="button"
            class="amplitude-shuffle amplitude-shuffle-off btn btn-icon ms-4 d-none d-md-block"
            aria-label="Shuffle"
            @click="shuffle"
          >
            <i class="ri-shuffle-fill fs-5" />
          </button>
        </div>
        <div class="player-info">
          <div class="me-4 d-none d-xl-block">
            <span class="amplitude-current-minutes" />:<span class="amplitude-current-seconds" /> /
            <span class="amplitude-duration-minutes" />:<span class="amplitude-duration-seconds" />
          </div>
          <div class="player-volume dropdown d-none d-md-block">
            <button
              class="btn btn-icon"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-label="Volume"
              aria-expanded="false"
            >
              <i class="ri-volume-mute-fill fs-5 d-none" />
              <i class="ri-volume-down-fill fs-5" />
              <i class="ri-volume-up-fill fs-5 d-none" />
            </button>
            <div class="dropdown-menu prevent-click">
              <input
                type="range"
                class="amplitude-volume-slider"
                value="50"
                min="0"
                max="100"
                aria-label="Volume slider"
              >
            </div>
          </div>
          <div class="dropstart d-none d-md-block">
            <button
              class="btn btn-icon"
              data-bs-toggle="dropdown"
              aria-label="Song options"
              aria-expanded="false"
            >
              <i class="ri-more-2-fill fs-5" />
            </button>
            <ul
              id="player_options"
              class="dropdown-menu dropdown-menu-sm"
            >
              <li>
                <a
                  class="dropdown-item"
                  href="javascript:void(0);"
                  role="button"
                  data-favorite-id="1"
                >Favorite</a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="javascript:void(0);"
                  role="button"
                  data-playlist-id="1"
                >Add to playlist</a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="audio/ringtone-1.mp3"
                  download
                >Download</a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="javascript:void(0);"
                  role="button"
                >Share</a>
              </li>
              <li class="dropdown-divider" />
              <li>
                <a
                  class="dropdown-item"
                  href="song-details.html"
                >View details</a>
              </li>
            </ul>
          </div>
          <div class="playlist dropstart me-3">
            <button
              class="btn btn-icon"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-label="Playlist"
              aria-expanded="false"
            >
              <i class="ri-play-list-fill fs-5" />
            </button>
            <div class="dropdown-menu playlist__dropdown">
              <div
                class="playlist__head d-flex align-items-center justify-content-between"
              >
                <h6 class="mb-0">
                  Next Lineup
                </h6>
                <a
                  id="clear_playlist"
                  href="javascript:void(0);"
                  role="button"
                  class="btn btn-link"
                >Clear</a>
              </div>
              <div
                id="playlist"
                class="list playlist__body"
                data-scroll="true"
              >
                <div
                  class="col-sm-8 col-10 mx-auto mt-5 text-center"
                >
                  <i class="ri-music-2-line mb-3" />
                  <p>
                    No songs, album or playlist are
                    added on lineup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
