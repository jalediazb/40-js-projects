<template>
  <nav
    class="navbar has-shadow is-spaced"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item has-text-weight-bold"
        >Javascript &
        <span class="has-text-success mx-1">Vue</span> Projets</router-link
      >
      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': navbarStatus }"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleNavbar"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-urls" :class="{ enabled: navbarStatus }">
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
</template>

<script>
export default {
  name: 'Navbar',
  data: function () {
    return {
      navbarStatus: false
    }
  },
  methods: {
    toggleNavbar() {
      this.navbarStatus = !this.navbarStatus
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .navbar {
    display: block;
  }
  .navbar-burger {
    display: block;
  }
}
.navbar-burger {
  z-index: 200;
}
.navbar-urls {
  position: fixed;
  top: 52px;
  left: 0;
  background-color: #fff;
  width: 100%;
  height: 0;
  transition: all 0.5s;
  overflow: hidden;
  box-shadow: 0 8px 16px rgb(10 10 10 / 10%);
}
.navbar-urls.enabled {
  height: calc(100vh - 52px);
}
@media (min-width: 1024px) {
  .navbar-urls {
    top: 84px;
  }
  .navbar-urls.enabled {
    height: calc(100vh - 84px);
  }
}
</style>