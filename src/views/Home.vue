<template>
  <div>
    <Hero :title="title" :subtitle="subtitle" />
    <div class="section">
      <div class="container">
        <div class="colmuns is-multiline">
          <div
            class="column is-full"
            v-for="route in $router.options.routes"
            :key="route.path"
          >
            <div class="card" v-if="route.name !== 'Home'">
              <div class="card-content">
                <router-link :to="route.path">{{ route.name }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";

export default {
  name: "Home",
  components: {
    Hero,
  },
  data() {
    return {
      title: "Javascript & Vue",
      subtitle: "Projects",
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 800px !important;
}
</style>
