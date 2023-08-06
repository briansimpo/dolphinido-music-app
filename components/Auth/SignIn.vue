<template>
  <div class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-xl-5 col-lg-7 col-md-9 col-sm-11 mx-auto">
          <div class="card">
            <div class="card-body p-sm-5">
              <div class="text-center">
                <h4>Signin to <span class="text-primary">Dolphinido</span></h4>
              </div>

              <div class="mb-3 py-3">
                <GoogleLogin />
              </div>

              <FormLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
