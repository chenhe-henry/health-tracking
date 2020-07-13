<template>
  <div class="hello">
    <h1>COVID-19 Tracker</h1>
    <h1>Last updated @ {{ generalCase.last_update }}</h1>
    <h1>Total cases: {{ generalCase.total_cases }}</h1>
    <h1>Currently infected: {{ generalCase.currently_infected }}</h1>
    <h1>Total recovered: {{ generalCase.recovery_cases }}</h1>
    <h1>Total death: {{ generalCase.death_cases }}</h1>
    <input v-model="search" />
    <div class="listing">
      <ul v-for="allCase in allCase.rows" :key="allCase.id">
        <li v-if="search.length === 0">
          <img :src="allCase.flag" :alt="allCase.country" class="imgs" />
          <h1>
            {{ allCase.country }}:
            {{ allCase.total_cases }}
          </h1>
          <h2>New cases: {{ allCase.new_cases }}</h2>
        </li>
        <li v-else-if="search.toLowerCase() === allCase.country.toLowerCase()">
          <img :src="allCase.flag" :alt="allCase.country" class="imgs" />
          <h1>
            {{ allCase.country }}:
            {{ allCase.total_cases }}
          </h1>
          <h2>New cases: {{ allCase.new_cases }}</h2>
        </li>
        <li v-else></li>
      </ul>
    </div>
  </div>
</template>

<script>
import CaseService from "@/services/CaseService.js";
export default {
  name: "HelloWorld",

  data() {
    return {
      generalCase: {},
      allCase: {},
      search: "",
    };
  },

  created() {
    CaseService.getGeneralInfo()
      .then((res) => {
        this.generalCase = res.data.data;
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    CaseService.getSpecificListing()
      .then((res) => {
        this.allCase = res.data.data;
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
.imgs {
  height: 90px;
  width: 120px;
}

.listing {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
