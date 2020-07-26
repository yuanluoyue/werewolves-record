<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from './page/Home'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
/* @import 'assets/css/base.css'; */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
