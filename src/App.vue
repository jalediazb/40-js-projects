<template>
  <div id="app">
    <div class="columns is-marginless">
      <div class="column is-one-fifth has-background-light">
        <div class="section">
          <div class="container">
            <ul id="nav">
              <li><router-link to="/">Home</router-link></li>
              <li>
                <router-link to="/color-selector">Color Selector</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <router-view />
    </div>
  </div>
</template>

<style scoped>
.columns {
  min-height: 100vh;
}
</style>
