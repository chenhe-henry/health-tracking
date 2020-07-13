<template>
  <div class="hello">
    <div></div>
    <div class="content">
      <h1>Last updated @ {{ generalCase.last_update }}</h1>
      <h1>Total cases: {{ generalCase.total_cases }}</h1>
      <h1>Currently infected: {{ generalCase.currently_infected }}</h1>
      <h1>Total recovered: {{ generalCase.recovery_cases }}</h1>
      <h1>Total death: {{ generalCase.death_cases }}</h1>
    </div>
  </div>
</template>

<script>
import CaseService from "@/services/CaseService.js";
export default {
  name: "HomePage",

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
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
.hello {
  margin-top: -2.5vh;

  height: 92.8vh;
}
a {
  color: #42b983;
}
.content {
  margin: 10vh 0;
}
</style>
