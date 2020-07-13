<template>
  <div class="idd">
    <h1>hello</h1>
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
  data() {
    return {
      allCase: {},
      search: "",
    };
  },
  created() {
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

<style lang="scss" scoped>
.imgs {
  height: 90px;
  width: 120px;
}
ul {
  list-style-type: none;
  padding: 0;
}
.listing {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
