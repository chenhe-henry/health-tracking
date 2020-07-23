<template>
  <div id="app">
    <h1>Quizzes</h1>
    <router-link class="nav" :to="{ name: 'home' }">HomePage</router-link>|
    <router-link class="nav" :to="{ name: 'quizzes' }">Quizzes</router-link>|
    <router-link class="nav" :to="{ name: 'affirmation' }">Daily Affirmation</router-link>
    <hr />
    <!-- <h1>Hello Deploy</h1>
    <font-awesome-icon :icon="['fas', 'spinner']" spin size="6x" class="linkedin" />
    <font-awesome-icon icon="circle-notch" spin size="6x" />
    <font-awesome-icon :icon="['fab', 'linkedin-in']" class="linkedin" />
    <font-awesome-icon :icon="['fab', 'font-awesome']" />-->
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

  // background-color: rgba(black, 0.1);
}
.nav {
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
}
.linkedin {
  &:hover {
    color: white;
    background-color: blue;
  }
}
</style>
