<template>
  <div>
    <h1>Body Measurement</h1>
    <form @submit.prevent="addBodyInfo">
      <p>
        <label for="weight">Weight:</label>
        <input type="number" id="weight" v-model="weight" placeholder="Weight in kg" /> kg
      </p>
      <p>
        <label for="height">Height:</label>
        <input id="height" v-model="height" placeholder="Height in m" /> m
      </p>
      <p>
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="date" /> m
      </p>
      <p>
        <input type="submit" value="Record your body info" />
      </p>
    </form>

    <table>
      <thead>
        <tr>
          <th>Weight</th>
          <th>Height</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bodyData, n) in bodyDataBase" :key="bodyData.index">
          <td>{{ bodyData.weight }}kg</td>
          <td>{{ bodyData.height }}m</td>
          <td>{{ bodyData.date }}</td>
          <button @click="removeBodyInfo(n)">Remove</button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bodyDataBase: [],
      weight: null,
      height: null,
      date: null,
    };
  },
  mounted() {
    if (localStorage.getItem("bodyDataBase")) {
      try {
        this.bodyDataBase = JSON.parse(localStorage.getItem("bodyDataBase"));
      } catch (e) {
        localStorage.removeItem("bodyDataBase");
      }
    }
  },
  methods: {
    addBodyInfo() {
      if (!this.weight || !this.height || !this.date) {
        return;
      }
      let bodyInfo = {
        weight: this.weight,
        height: this.height,
        date: this.date,
      };
      this.bodyDataBase.push(bodyInfo);
      this.weight = "";
      this.height = "";
      this.date = "";
      this.saveBodyInfo();
    },
    removeBodyInfo(x) {
      this.bodyDataBase.splice(x, 1);
      this.saveBodyInfo();
    },
    saveBodyInfo() {
      const parsed = JSON.stringify(this.bodyDataBase);
      localStorage.setItem("bodyDataBase", parsed);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>