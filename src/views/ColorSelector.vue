<template>
  <div class="color-selector column">
    <div class="section">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column is-half-desktop is-two-third-tablet">
            <div class="card">
              <div
                class="card-image"
                style="min-height: 60px"
                :style="{ 'background-color': backgroundColor }"
              ></div>
              <div class="card-content has-text-centered">
                <h3 class="title">Color: {{ backgroundColor }}</h3>
                <p class="mb-5">
                  <button
                    class="button is-fullwidth is-dark"
                    @click="colorAletorio"
                  >
                    Color Aletorio
                  </button>
                </p>
                <div class="control">
                  <div class="field has-addons">
                    <div class="control is-expanded">
                      <input
                        @keyup="verificarFormatoColor(colorManual)"
                        @keyup.enter="cambiarColorManualmente"
                        v-model="colorManual"
                        class="input"
                        :class="validez ? 'has-text-dark' : 'has-text-danger'"
                        type="text"
                        placeholder="HEX Color"
                      />
                    </div>
                    <div class="control">
                      <a class="button is-info" @click="cambiarColorManualmente"
                        >Cambiar</a
                      >
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
  name: "ColorSelector",
  components: {},
  mounted() {
    this.crearColorAleatorio();
  },
  data: function () {
    return {
      caracteres: "ABCDEF1234567890",
      backgroundColor: "",
      colorManual: "",
      validez: false,
      title: "Javascript & Vue",
      subtitle: "Projects",
    };
  },
  methods: {
    colorAletorio() {
      this.crearColorAleatorio();
    },
    crearColorAleatorio() {
      this.colorManual = "";
      this.validez = "";
      let colorAleatorio = "";
      for (let i = 0; i < 6; i++) {
        var numeroAleatorio = Math.floor(
          Math.random() * (this.caracteres.length - 0) + 0
        );
        colorAleatorio = colorAleatorio + this.caracteres[numeroAleatorio];
      }
      colorAleatorio = "#" + colorAleatorio;
      this.backgroundColor = colorAleatorio;
    },
    cambiarColorManualmente() {
      if (this.validez === true) {
        this.colorManual[0] === "#"
          ? (this.backgroundColor = this.colorManual)
          : (this.backgroundColor = "#" + this.colorManual);
      }
    },
    verificarFormatoColor(colorParaVerificar) {
      this.colorValido(false);

      if (colorParaVerificar[0] === "#") {
        colorParaVerificar = colorParaVerificar.substring(1);
      }

      if (colorParaVerificar.length === 3 || colorParaVerificar.length === 6) {
      } else {
        this.colorValido(false);
        return false;
      }

      for (var caracter of colorParaVerificar) {
        if (this.caracteres.indexOf(caracter.toUpperCase()) === -1) {
          this.colorValido(false);
          return false;
        }
      }

      this.colorValido(true);
      return colorParaVerificar;
    },
    colorValido(estado) {
      this.validez = estado;
    },
  },
};
</script>

<style>
</style>
