<template>
  <div class="hello">
    <h1>COVID-19 Tracker</h1>
    <h1>Last updated @ {{ generalCase.last_update }}</h1>
    <h1>Total cases: {{ generalCase.total_cases }}</h1>
    <h1>Currently infected: {{ generalCase.currently_infected }}</h1>
    <h1>Total recovered: {{ generalCase.recovery_cases }}</h1>
    <h1>Total death: {{ generalCase.death_cases }}</h1>
  </div>
</template>

<script>
import CaseService from "@/services/CaseService.js";
export default {
  name: "HelloWorld",

  data() {
    return {
      generalCase: {},
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
