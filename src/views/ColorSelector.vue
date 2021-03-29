<template>
  <div class="home column">
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="card p-4">
              <div class="columns">
                <div class="column">
                  <button class="button" @click="colorAletorio">
                    Color Aletorio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Color Selector",
  components: {},
  data: function () {
    return {
      backgroundColor: "",
    };
  },
  methods: {},
};
</script>

<style>
</style>