<template>
  <div class="navbar">
    <router-link class="nav" :to="{ name: 'home' }"
      ><font-awesome-icon :icon="['fas', 'home']" /> Home</router-link
    >
    <router-link class="nav" :to="{ name: 'bodymeasurement' }"
      ><font-awesome-icon :icon="['fas', 'weight']" /> Body
      Measurement</router-link
    >
    <router-link class="nav" :to="{ name: 'nutritionanalysis' }">
      <font-awesome-icon :icon="['fas', 'table']" /> Nutrition
      Analysis</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$router);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.navbar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-evenly;
}
.nav {
  font-size: 1.5em;
  margin: 0 20px;
  text-decoration: none;
  color: grey;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    color: black;
  }
  &::after {
    content: counter(4);
  }
  &.router-link-exact-active {
    color: #17a2b8;
  }
}
</style>
