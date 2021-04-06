<template>
  <div class="counter column">
    <div class="section">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-half-desktop is-two-third-tablet">
            <div class="card">
              <div class="card-content has-text-centered content">
                <h1>Counter</h1>
                    <p id="contador" :class="[colorContador]">{{ contador }}</p>
                    <div class="buttons is-centered">
                      <button @click="reducir" class="button is-danger">
                        Reducir
                      </button>
                      <button @click="resetear" class="button is-dark">
                        Resetear
                      </button>
                      <button @click="aumentar" class="button is-success">
                        Aumentar
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
  name: 'Counter',
  data: function () {
    return {
      contador: 0
    }
  },
  computed: {
    colorContador () {
      let color = 'has-text-dark'
      if (this.contador < 0) {
        color = 'has-text-danger'
      }
      if (this.contador > 0) {
        color = 'has-text-success'
      }
      return color
    }
  },
  methods: {
    aumentar () {
      this.contador++
    },
    reducir () {
      this.contador--
    },
    resetear () {
      this.contador = 0
    }
  }
}
</script>

<style lang="css" scoped>
#contador {
  font-size: 100px;
  margin-bottom: 20px;
}
</style>
