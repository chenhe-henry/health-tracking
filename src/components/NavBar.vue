<template>
  <div class="navbar">
    <router-link
      v-for="(nav, index) in navigations"
      :key="index"
      class="nav"
      :to="{ name: nav.linkTo }"
      ><font-awesome-icon :icon="nav.icon" /> {{ nav.name }}</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      navigations: [
        { linkTo: "home", icon: ["fas", "home"], name: "Home" },
        {
          linkTo: "bodymeasurement",
          icon: ["fas", "weight"],
          name: "Body Measurement",
        },
        {
          linkTo: "nutritionanalysis",
          icon: ["fas", "table"],
          name: "Nutrition Analysis",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/custom.scss";
.navbar {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  @media (min-width: $laptop-md) {
    flex-direction: row;
    justify-content: space-between;
  }
}
.nav {
  font-size: $font-display;
  margin: 0 2em;
  text-decoration: none;
  color: grey;
  font-weight: bold;
  transition: all 0.2s;
  &:hover,
  &:focus {
    color: black;
  }
  &:focus {
    outline: none;
  }
  &.router-link-exact-active {
    color: #17a2b8;
  }
}
</style>
