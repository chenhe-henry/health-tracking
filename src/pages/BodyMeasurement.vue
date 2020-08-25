<template>
  <div>
    <h1>Body Measurement</h1>
    <form @submit.prevent="addBodyInfo">
      <p>
        <label for="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          v-model="weight"
          placeholder="Weight in kg"
        />
        kg
      </p>
      <p>
        <label for="height">Height:</label>
        <input id="height" v-model="height" placeholder="Height in m" /> m
      </p>
      <p>
        <label for="date">Date:</label>
        <date-picker v-model="date" valueType="format"></date-picker>
      </p>

      <p>
        <input
          type="submit"
          value="Record your body info"
          class="table-button"
        />
      </p>
    </form>

    <vue-good-table
      class="vue-table"
      :columns="columns"
      :rows="bodyDataBase"
      :fixed-header="false"
      :line-numbers="true"
      compactMode
      :search-options="{
        enabled: true,
      }"
      :pagination-options="{
        enabled: true,
      }"
    >
    </vue-good-table>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: { DatePicker },
  data() {
    return {
      bodyDataBase: [],
      weight: null,
      height: null,
      date: null,
      opeartion: null,
      columns: [
        { label: "Weight (kg)", field: "weight" },
        { label: "Height (m)", field: "height" },
        {
          label: "Date",
          field: "date",
        },
      ],
      rows: [],
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
.bodyMeasurement__table,
th,
td {
  margin: 0 auto;
  border: 1px solid black;
  border-collapse: collapse;
  padding: 20px;
  width: 500px;
}
.table-button {
  background-color: rgb(27, 219, 17);
  color: white;
  font-weight: bold;
  outline: none;
}
.vue-table {
  margin: 0 auto;
  width: 70vw;
}
</style>
