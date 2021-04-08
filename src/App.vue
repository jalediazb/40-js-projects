<template>
  <div id="app" class="has-background-light">
    <div class="columns is-marginless">
      <div class="column is-one-fifth">
        <div class="section">
          <div class="container">
            <h1 class="title"><router-link to="/" class="has-text-dark">Javascript</router-link></h1>
            <h2 class="subtitle"><router-link to="/" class="has-text-grey">Projects</router-link></h2>
            <ul id="nav">

              <li>
                <router-link to="/color-selector"
                  >Selector de Color</router-link
                >
              </li>
              <li>
                <router-link to="/counter">Counter</router-link>
              </li>
              <li>
                <router-link to="/review-carousel">Review Carousel</router-link>
              </li>
              <li>
                <router-link to="/responsive-navbar"
                  >Responsive Navbar</router-link
                >
              </li>
              <li>
                <router-link to="/trends">Google Trends</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <router-view />
    </div>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
}

</style>
