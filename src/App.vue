<template>
  <div id="app">
    <div class="columns is-marginless">
      <div class="column is-one-fifth has-background-light">
        <div class="section">
          <div class="container">
            <ul id="nav">
              <li><router-link to="/">Inicio</router-link></li>
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
            </ul>
          </div>
        </div>
      </div>

      <router-view />
    </div>
  </div>
</template>

<style scoped>
.columns {
  min-height: 100vh;
}
</style>
