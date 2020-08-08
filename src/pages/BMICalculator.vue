<template>
  <div>
    <h1>What’s BMI?</h1>
    <h3>BMI compares your weight to your height, and is calculated by dividing your weight (in kilograms) by your height (in metres squared). It gives you an idea of whether you’re "underweight", a "healthy" weight, "overweight", or "obese" for your height. BMI is one type of tool to help health professionals assess the risk for chronic disease.</h3>
    <img src="https://chenhe-henry.github.io/health-tracking/bmi.jpeg" alt="Body Mass Index" />
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
        <p v-if="BMIresult < 18.5">You are considered underweight and possibly malnourished.</p>
        <p
          v-else-if="BMIresult >= 18.5 && BMIresult < 24.9 "
        >You are within a healthy weight range for young and middle-aged adults.</p>
        <p v-else-if="BMIresult >= 25 && BMIresult < 29.9 ">You are considered overweight.</p>
        <p v-else>You are considered obese.</p>
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
  methods: {
    calculate() {
      this.BMIresult = this.weight / (this.height ^ 2);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>