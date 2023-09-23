<script setup>
definePageMeta({
  layout: 'guest',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/discover'
  }
})
</script>
<template>
  <div>
    <div class="container-fluid px-xl-4">
      <div class="main-hero mx-auto" style="background-color: #E4FBFA">
        <div class="container">
          <div class="col-xl-6 col-lg-8 col-md-9 fs-5">
            <h2 class="main-hero__title">
              We are passionate about <br><span class="text-primary">music and your music career.</span>
            </h2>
            <div class="me-sm-5">
              <p>Build your career on Dolphinido. Sell your music on our music store and use our music recognition and monitoring services to earn a fortune. </p>

              <NuxtLink to="/register" class="btn btn-lg btn-primary">
                Join for Free
              </NuxtLink>
              <NuxtLink to="/login" class="btn btn-lg btn-outline-dark ms-2 ">
                Login
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-section">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-4">
            <img src="/images/background/about.jpg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-8 fs-5">
            <div class="pe-5 justify-content-evenly">
              <h2 class="my-4">
                <span class="text-primary">Our</span> Inspiration
              </h2>
              <p>We understand that music is a universal language and we all find music as the best friend in happiness and sorrow times. It makes us feel special and gives us enthusiasm.</p>
              <p>While we all agree that music is our best friend, we must acknowledge and reward artists and contributors for their work in the music industry.</p>
              <p>Dolphinido is a platform for artists who need to build their career and create a fortune out of their music and talent. It is also a platform for music lovers and enthusiasts who would love to promote various artists.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-section bg-light">
      <div class="container">
        <div class="col-xl-6 col-lg-8 mx-auto text-center fs-5 mb-4">
          <h2>What we <span class="text-primary">offer</span></h2>
          <p>We have a range of services for the best experience in the music industry</p>
        </div>
        <div class="feature">
          <div class="row g-4 g-md-5">
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="card h-100 py-2">
                <div class="card-body">
                  <div class="feature__icon" style="color: var(--bs-blue)">
                    <i class="ri-music-2-fill fs-4" />
                  </div>
                  <h5 class="mt-4 mb-3">
                    Music Recognition
                  </h5>
                  <p>
                    Recognize a song playing in close proximity and retrieve it from our music database using our audio tracking service.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="card h-100 py-2">
                <div class="card-body">
                  <div class="feature__icon" style="color: var(--bs-pink)">
                    <i class="ri-broadcast-fill fs-4 " />
                  </div>
                  <h5 class="mt-4 mb-3">
                    Music Monitoring
                  </h5>
                  <p>
                    Monitor music airplay on radio stations or monitor background music on TV stations with our music monitoring service.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="card h-100 py-2">
                <div class="card-body">
                  <div class="feature__icon" style="color: var(--bs-purple)">
                    <i class="ri-music-fill fs-4" />
                  </div>
                  <h5 class="mt-4 mb-3">
                    Music Store
                  </h5>
                  <p>
                    Sell your music to new or existing fans on Dolphinido. Set your price for a single track or album, and keep 90% of the sales you make.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="card h-100 py-2">
                <div class="card-body">
                  <div class="feature__icon" style="color: var(--bs-purple)">
                    <i class="ri-global-fill fs-4" />
                  </div>
                  <h5 class="mt-4 mb-3">
                    Music Promotion
                  </h5>
                  <p>
                    Advertise your music to fans anywhere and anytime. Choose where to advertise, and our promotion service will reach your fans.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="card h-100 py-2">
                <div class="card-body">
                  <div class="feature__icon" style="color: var(--bs-purple)">
                    <i class="ri-calendar-event-fill fs-4" />
                  </div>
                  <h5 class="mt-4 mb-3">
                    Events
                  </h5>
                  <p>
                    Create musical events and let your fans subscribe to them at a price or free of charge.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="card h-100 py-2">
                <div class="card-body">
                  <div class="feature__icon" style="color: var(--bs-indigo)">
                    <i class="ri-donut-chart-fill fs-4" />
                  </div>
                  <h5 class="mt-4 mb-3">
                    Opportunities
                  </h5>
                  <p>
                    Expand your connections in the music industry and find opportunities that match your sound and goals.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="card h-100 py-2">
                <div class="card-body">
                  <div class="feature__icon" style="color: var(--bs-red)">
                    <i class="ri-question-answer-fill fs-4" />
                  </div>
                  <h5 class="mt-4 mb-3">
                    Fan Reach
                  </h5>
                  <p>
                    Easily send email and social media messages to your fans from one convenient place.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
              <div class="card h-100 py-2">
                <div class="card-body">
                  <div class="feature__icon" style="color: var(--bs-green)">
                    <i class="ri-user-4-fill fs-4" />
                  </div>
                  <h5 class="mt-4 mb-3">
                    Artiste Connect
                  </h5>
                  <p>
                    Connect with new or existing artists. Make collaborations and sign up for music deals to expand your career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-section ">
      <div class="container text-center">
        <h2 class="mb-5">
          How to get
          <span class="text-primary">started</span>
        </h2>
        <div class="row g-5 fs-6">
          <div class="col-lg-4 col-sm-6">
            <div class="px-xl-3">
              <i class="ri-file-list-3-line fs-3" style="color: var(--bs-pink);" />
              <h4 class="mt-4">
                1. Register for membership
              </h4>
              <p>Simply provide your name, email and password and you're good to go.</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="px-xl-3">
              <i class="ri-file-upload-line fs-3" style="color: var(--bs-purple);" />
              <h4 class="mt-4">
                2. Upload your work
              </h4>
              <p>Upload your songs and reach your fans instantly anywhere in the world. </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-6">
            <div class="px-xl-3">
              <i class="ri-headphone-line fs-3" style="color: var(--bs-indigo);" />
              <h4 class="mt-4">
                3. Access unlimited music
              </h4>
              <p>Stream online or download to play offline from our music library.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-section bg-light">
      <div class="container">
        <div class="col-xl-7 col-lg-10 fs-5 mx-auto text-center">
          <h2>
            Join
            <span class="text-primary">now</span>
          </h2>
          <p>Just a few clicks and you start building your music career.</p>

          <NuxtLink to="/register" class="btn btn-lg btn-default external mt-3">
            Register
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
