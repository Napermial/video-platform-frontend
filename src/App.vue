<template>
  <div id="app">
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Details from './components/Details'

export default {
  name: 'app',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Main,
    // eslint-disable-next-line vue/no-unused-components
    Details
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
