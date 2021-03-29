<template>
<div class="home column" :style="{ 'background-color': backgroundColor }">
  <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="card content p-4">
            <div class="columns is-multiline">
              <div class="column is-full">
                <h3 class="has-text-centered">Color Sector: {{ backgroundColor }}</h3>
              </div>
              <div class="column">
                <div class="field is-grouped is-grouped-centered">
                  <div class="control">
                    <button class="button is-dark" @click="colorAletorio">
                      Color Aletorio
                    </button>
                  </div>
                  <div class="control">
                    <div class="field has-addons">
                      <div class="control">
                        <input @keyup="verificarFormatoColor(colorManual)" @keyup.enter="cambiarColorManualmente" v-model="colorManual" class="input" :class="validez ? 'has-text-dark' : 'has-text-danger'" type="text" placeholder="HEX Color" />
                      </div>
                      <div class="control">
                        <a class="button is-info" @click="cambiarColorManualmente">Cambiar</a>
                      </div>
                    </div>
                  </div>
                </div>
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
  name: 'ColorSelector',
  components: {},
  mounted () {
    this.crearColorAleatorio()
  },
  data: function () {
    return {
      caracteres: 'ABCDEF1234567890',
      backgroundColor: '',
      colorManual: '',
      validez: false
    }
  },
  methods: {
    colorAletorio () {
      this.crearColorAleatorio()
    },
    crearColorAleatorio () {
      this.colorManual = ''
      this.validez = ''
      let colorAleatorio = ''
      for (let i = 0; i < 6; i++) {
        var numeroAleatorio = Math.floor(
          Math.random() * (this.caracteres.length - 0) + 0
        )
        colorAleatorio = colorAleatorio + this.caracteres[numeroAleatorio]
      }
      colorAleatorio = '#' + colorAleatorio
      this.backgroundColor = colorAleatorio
    },
    cambiarColorManualmente () {
      if (this.validez === true) {
        this.colorManual[0] === '#' ? this.backgroundColor = this.colorManual : this.backgroundColor = '#' + this.colorManual
      }
    },
    verificarFormatoColor (colorParaVerificar) {
      this.colorValido(false)

      if (colorParaVerificar[0] === '#') {
        colorParaVerificar = colorParaVerificar.substring(1)
      }

      if (colorParaVerificar.length === 3 || colorParaVerificar.length === 6) {

      } else {
        this.colorValido(false)
        return false
      }

      for (var caracter of colorParaVerificar) {
        if (this.caracteres.indexOf(caracter.toUpperCase()) === -1) {
          this.colorValido(false)
          return false
        }
      }

      this.colorValido(true)
      return colorParaVerificar
    },
    colorValido (estado) {
      this.validez = estado
    }
  }
}
</script>

<style>
</style>
