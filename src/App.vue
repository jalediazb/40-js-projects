<template>
  <div id="app" class="has-background-white">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a role="button" class="navbar-burger ml-0" aria-label="menu" aria-expanded="false" @click="toggleNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
        <a class="navbar-item has-text-weight-bold" href="/">Javascript & <span class="has-text-success mx-1">Vue</span> Projets</a>
      </div>
      <div class="navbar-urls" :class="{enabled: navbarStatus}">
        <div class="section mt-5">
          <ul>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="columns is-marginless">
      <div class="column is-one-fifth">
        <div class="section">
          <div class="container">
            <h1 class="title">
              <router-link to="/" class="has-text-dark">Javascript</router-link>
            </h1>
            <h2 class="subtitle">
              <router-link to="/" class="has-text-grey">Projects</router-link>
            </h2>
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

<script>
export default {
  name: 'App',
  data: function () {
    return {
      navbarStatus: false
    }
  },
  methods: {
    toggleNavbar () {
      this.navbarStatus = !this.navbarStatus
      // if (this.navbarStatus === true) {
      //   this.navbarStatus = false
      // } else {
      //   this.navbarStatus = true
      // }
      console.log(this.navbarStatus)
    }
  }
}
</script>

<style scoped>
#app {
  min-height: 100vh;
}
@media (min-width: 1024px) {
  .navbar-burger {
    display: block;
  }
}
.navbar-burger {
  z-index: 200;
}
.navbar-urls {
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0000009e;
  width: 0;
  height: 100%;
  transition: all 0.5s;
  overflow: hidden;
}
.navbar-urls.enabled {
  width: 100%;
}
</style>
