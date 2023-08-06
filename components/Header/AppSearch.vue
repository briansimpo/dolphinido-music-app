<script setup>
import { OnClickOutside } from '@vueuse/components'
const { openSearch, closeSearch } = useAppSearch()
</script>

<template>
  <form id="search_form" action="#" class="ms-3 ms-sm-4">
    <label for="search_input">
      <i class="ri-search-2-line" />
    </label>
    <input id="search_input" type="text" placeholder="Search here..." class="form-control form-control-sm" @click="openSearch">
  </form>

  <OnClickOutside @trigger="closeSearch">
    <div id="search_results" class="search pb-3 overflow-auto overflow-y-scroll no-scrollbar">
      <div class="search__head">
        <div class="search__head__filter">
          <button type="button" class="btn btn-sm btn-light-primary active">
            Trending
          </button>
          <button type="button" class="btn btn-sm btn-light-primary">
            Artists
          </button>
          <button type="button" class="btn btn-sm btn-light-primary">
            Songs
          </button>
          <button type="button" class="btn btn-sm btn-light-primary">
            Albums
          </button>
        </div>
      </div>
      <div class="search__body" data-scroll="true">
        <div class="mb-4">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <span class="search__title">Artists</span>
            <a href="artists.html" class="btn btn-link">View All</a>
          </div>
          <div class="row g-4 list">
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="list__item">
                <a href="artist-details.html" class="list__cover">
                  <img src="images/cover/large/5.jpg" alt="Jina Moore">
                </a>
                <div class="list__content">
                  <a href="artist-details.html" class="list__title text-truncate">
                    Jina Moore
                  </a>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="list__item">
                <a
                  href="artist-details.html"
                  class="list__cover"
                ><img
                  src="images/cover/large/6.jpg"
                  alt="Rasomi Pelina"
                ></a>
                <div class="list__content">
                  <a
                    href="artist-details.html"
                    class="list__title text-truncate"
                  >Rasomi Pelina</a>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="list__item">
                <a
                  href="artist-details.html"
                  class="list__cover"
                ><img
                  src="images/cover/large/7.jpg"
                  alt="Pimila Holliwy"
                ></a>
                <div class="list__content">
                  <a
                    href="artist-details.html"
                    class="list__title text-truncate"
                  >Pimila Holliwy</a>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="list__item">
                <a
                  href="artist-details.html"
                  class="list__cover"
                ><img
                  src="images/cover/large/8.jpg"
                  alt="Karen Jennings"
                ></a>
                <div class="list__content">
                  <a
                    href="artist-details.html"
                    class="list__title text-truncate"
                  >Karen Jennings</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <div
            class="d-flex align-items-center justify-content-between mb-3"
          >
            <span class="search__title">Songs</span>
            <a href="songs.html" class="btn btn-link">View All</a>
          </div>
          <div class="row g-4 list">
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="list__item">
                <a
                  href="song-details.html"
                  class="list__cover"
                ><img
                  src="images/cover/small/6.jpg"
                  alt="Hey not me"
                ></a>
                <div class="list__content">
                  <a
                    href="song-details.html"
                    class="list__title text-truncate"
                  >Hey not me</a>
                  <p class="list__subtitle text-truncate">
                    <a href="artist-details.html">Rasomi Pelina</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="list__item">
                <a
                  href="song-details.html"
                  class="list__cover"
                ><img
                  src="images/cover/small/7.jpg"
                  alt="Deep inside"
                ></a>
                <div class="list__content">
                  <a
                    href="song-details.html"
                    class="list__title text-truncate"
                  >Deep inside</a>
                  <p class="list__subtitle text-truncate">
                    <a href="artist-details.html">Pimila Holliwy</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="list__item">
                <a
                  href="song-details.html"
                  class="list__cover"
                ><img
                  src="images/cover/small/8.jpg"
                  alt="Sadness"
                ></a>
                <div class="list__content">
                  <a
                    href="song-details.html"
                    class="list__title text-truncate"
                  >Sadness</a>
                  <p class="list__subtitle text-truncate">
                    <a href="artist-details.html">Karen Jennings</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="list__item">
                <a
                  href="song-details.html"
                  class="list__cover"
                ><img
                  src="images/cover/small/9.jpg"
                  alt="Electric wave"
                ></a>
                <div class="list__content">
                  <a
                    href="song-details.html"
                    class="list__title text-truncate"
                  >Electric wave</a>
                  <p class="list__subtitle text-truncate">
                    <a href="artist-details.html">Lenisa Gory</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="d-flex align-items-center justify-content-between mb-3"
          >
            <span class="search__title">Albums</span>
            <a href="albums.html" class="btn btn-link">View All</a>
          </div>
          <div class="row g-4 list">
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="list__item">
                <a
                  href="album-details.html"
                  class="list__cover"
                ><img src="images/cover/small/1.jpg" alt="Mummy"></a>
                <div class="list__content">
                  <a
                    href="album-details.html"
                    class="list__title text-truncate"
                  >Mummy</a>
                  <p class="list__subtitle text-truncate">
                    <a href="artist-details.html">Arebica Luna</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="list__item">
                <a
                  href="album-details.html"
                  class="list__cover"
                ><img
                  src="images/cover/small/2.jpg"
                  alt="Hot shot"
                ></a>
                <div class="list__content">
                  <a
                    href="album-details.html"
                    class="list__title text-truncate"
                  >Hot shot</a>
                  <p class="list__subtitle text-truncate">
                    <a href="artist-details.html">Gerrina Linda</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="list__item">
                <a
                  href="album-details.html"
                  class="list__cover"
                ><img
                  src="images/cover/small/3.jpg"
                  alt="Own way"
                ></a>
                <div class="list__content">
                  <a
                    href="album-details.html"
                    class="list__title text-truncate"
                  >Own way</a>
                  <p class="list__subtitle text-truncate">
                    <a href="artist-details.html">Zunira Willy & Nutty Nina</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6">
              <div class="list__item">
                <a
                  href="album-details.html"
                  class="list__cover"
                ><img
                  src="images/cover/small/4.jpg"
                  alt="Say yes"
                ></a>
                <div class="list__content">
                  <a
                    href="album-details.html"
                    class="list__title text-truncate"
                  >Say yes</a>
                  <p class="list__subtitle text-truncate">
                    <a href="artist-details.html">Johnny Marro</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </OnClickOutside>
</template>

<style>
.search {
    overflow-y: auto;
}

/* width */
.search::-webkit-scrollbar {
    width: 4px;
}

/* Handle */
.search::-webkit-scrollbar-thumb {
    background: rgb(197, 193, 193);
    border-radius: 2px;
}
</style>
