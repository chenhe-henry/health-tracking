<template>
  <div class="navbar">
    <div>
      <router-link class="nav" :to="{ name: 'home' }"
        ><font-awesome-icon :icon="['fas', 'home']" /> Home</router-link
      >|
      <router-link class="nav" :to="{ name: 'bodymeasurement' }"
        ><font-awesome-icon :icon="['fas', 'weight']" /> Body
        Measurement</router-link
      >|
      <router-link class="nav" :to="{ name: 'nutritionanalysis' }">
        <font-awesome-icon :icon="['fas', 'table']" /> Nutrition
        Analysis</router-link
      >
    </div>
    <!-- <div v-if="weatherData" class="weather__block">
      <div>{{ weatherData.name }}</div>
      <div>{{ weatherData.main.temp }}&deg;C</div>
      <div>{{ weatherData.weather[0].main }}</div>
      <img
        :src="
          `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
        "
        :alt="weatherData.weather[0].main"
      />
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      weatherData: null,
      lat: null,
      lon: null,
      apiUrl: "https://api.openweathermap.org/data/2.5/",
      weatherAPI: process.env.VUE_APP_WEATHER_API_KEY,
    };
  },
  mounted() {
    this.getLocation();
  },
  methods: {
    getLocation() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.getWeatherByCoords();
      });
    },
    getWeatherByCoords() {
      axios
        .get(
          `${this.apiUrl}weather?q=sydney&appid=${this.weatherAPI}&units=metric`
        )
        .then((response) => {
          this.weatherData = response.data;
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>
// .weather__block {
//   display: grid;
//   grid-template-rows: 1fr 1fr;
//   grid-template-columns: 1fr 1fr;
// }
.navbar {
  display: grid;
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
