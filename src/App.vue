<template>
  <div id="app">
    <router-link class="nav" :to="{ name: 'home' }">HomePage</router-link>|
    <router-link class="nav" :to="{ name: 'allcountries' }"
      >All Countries</router-link
    >|
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  margin: 20px;
  text-decoration: none;
  color: grey;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    color: black;
  }
}
</style>
