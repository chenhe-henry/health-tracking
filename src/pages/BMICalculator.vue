<template>
  <div>
    <h1>What’s BMI?</h1>
    <h3>BMI compares your weight to your height, and is calculated by dividing your weight (in kilograms) by your height (in metres squared). It gives you an idea of whether you’re "underweight", a "healthy" weight, "overweight", or "obese" for your height. BMI is one type of tool to help health professionals assess the risk for chronic disease.</h3>
    <img :src="getLogosUrl('bmi.jpeg')" alt="Body Mass Index" />
    <form @submit.prevent="calculate">
      <p>
        <label for="weight">Weight:</label>
        <input type="number" id="weight" v-model="weight" placeholder="Weight in kg" /> kg
      </p>
      <p>
        <label for="height">Height:</label>
        <input id="height" v-model="height" placeholder="Height in m" /> m
      </p>
      <p>
        <input type="submit" value="Calculate Your BMI" />
      </p>
      <div v-show="BMIresult != ''">
        <p>Your BMI Result is {{BMIresult}}</p>
        <p
          v-if="BMIresult < 18.5 "
          class="BMI__result-purple"
        >You are considered underweight and possibly malnourished.</p>
        <p
          v-else-if="BMIresult >= 18.5 && BMIresult < 25 "
          class="BMI__result-blue"
        >You are within a healthy weight range for young and middle-aged adults.</p>
        <p
          v-else-if="BMIresult >= 25 && BMIresult < 30 "
          class="BMI__result-green"
        >You are considered overweight.</p>
        <p
          v-else-if="BMIresult >= 30 && BMIresult < 40"
          class="BMI__result-orange"
        >You are considered obese.</p>
        <p v-else class="BMI__result-red">You are considered morbidly obese.</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weight: "",
      height: "",
      BMIresult: "",
    };
  },
  mounted() {
    if (localStorage.weight) {
      this.weight = localStorage.weight;
    }
    if (localStorage.height) {
      this.height = localStorage.height;
    }
  },

  methods: {
    calculate() {
      localStorage.weight = this.weight;
      localStorage.height = this.height;
      this.BMIresult = this.weight / (this.height ^ 2);
    },
    getLogosUrl(pic) {
      return require(`../assets/cards/${pic}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.BMI {
  &__result {
    &-purple {
      font-weight: bold;
      color: rgb(218, 20, 218);
    }
    &-blue {
      font-weight: bold;
      color: blue;
    }
    &-green {
      font-weight: bold;
      color: green;
    }
    &-orange {
      font-weight: bold;
      color: orange;
    }
    &-red {
      font-weight: bold;
      color: red;
    }
  }
}
</style>