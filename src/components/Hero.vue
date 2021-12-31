<template>
  <section class="hero">
    <div class="hero-body has-text-centered">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">{{ subtitle }}</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  props: ['title', 'subtitle'],
  data() {
    return {}
  }
}
</script>

<style>
</style>
