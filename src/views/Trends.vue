<template>
  <div class="column">
    <div class="section">
      <div class="container">
        <textarea
          id="keywords-area"
          v-model="keywordList"
          class="textarea"
          placeholder="Keywords"
        ></textarea>
        <button class="button" @click="enviar">Enviar</button>
        <div class="container" id="resultados"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Trends',
  data: function () {
    return {
      keywordList: ['mdf', 'aglomerado'],
      scriptCompleto: ''
    }
  },
  computed: {
    keywordListOptimiced () {
      return this.keywordList.join().split(',')
    }
  },
  methods: {
    crearScript () {

    },
    enviar () {
      this.keywordList.forEach(item => {
        var textScript = `console.log('${item}') `
        this.scriptCompleto = this.scriptCompleto + textScript
      })
      var nuevoScript = document.createElement('script')
      nuevoScript.text = 'console.log("Hola")'
      console.log(this.nuevoScript)
      document.getElementById('resultados').appendChild(this.nuevoScript)
    }
  }
}
</script>

<style>
</style>
