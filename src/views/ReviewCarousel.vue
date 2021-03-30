<template>
  <div class="column">
    <div class="section">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-half-desktop is-two-third-tablet">
            <div class="card content">
              <div class="card-content has-text-centered">
                <figure class="retrato image is-96x96">
                  <img class="is-rounded" :src="listaUsuarios.results[usuarioActivo].picture.large">
                </figure>
                <h3 class="title is-5">{{ listaUsuarios.results[usuarioActivo].name.first }} {{ listaUsuarios.results[usuarioActivo].name.last }}</h3>
                <h4 class="subtitle is-5 has-text-grey-lighter">{{ listaUsuarios.results[usuarioActivo].location.city }}</h4>
                <p class="buttons is-centered">
                  <button @click="anterior" class="button is-small" :disabled="usuarioActivo <= 0">Anterior</button>
                  <button @click="siguiente" class="button is-small" :disabled="usuarioActivo >= listaUsuarios.results.length - 1">Siguiente</button>
                </p>
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
  name: 'ReviewCarousel',
  mounted () {
    fetch('https://randomuser.me/api/?results=5')
      .then(response => response.json())
      .then(data => { this.listaUsuarios = data })
  },
  data: function () {
    return {
      listaUsuarios: '',
      usuarioActivo: 0
    }
  },
  methods: {
    anterior () {
      this.usuarioActivo--
    },
    siguiente () {
      this.usuarioActivo++
    }
  }
}
</script>

<style lang="css" scoped>
figure.retrato {
  margin: 0 auto 15px auto;
}

</style>
