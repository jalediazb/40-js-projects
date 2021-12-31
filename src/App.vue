<template>
  <div id="app" class="has-background-white">
    <Navbar />
    <section class="section">
      <router-view />
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style scoped>
#app {
  min-height: 100vh;
}
</style>
