<template>
  <div id="app"><NavBar /><router-view></router-view></div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: { NavBar },
};
</script>

<style lang="scss">
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  font-weight: 500;
  margin-bottom: 5vh;
  // background: linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff);
}
*,
*::before,
*::after {
  // box-sizing: border-box;
  // margin: 0;
  // padding: 0;
}
</style>
