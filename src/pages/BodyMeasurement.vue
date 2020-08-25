<template>
  <div>
    <BaseBanner class="bodymeasurement__title">
      <div class="bodymeasurement__title-content">
        Record your lastest<span class="coloredTitle"> body info</span> here!
      </div>
    </BaseBanner>
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
.coloredTitle {
  color: rgb(27, 219, 17);
}
.bodymeasurement {
  &__title {
    background-image: linear-gradient(
      to right,
      rgb(17, 212, 199),
      rgb(224, 28, 185)
    );
    font-size: 4em;
    height: 10vh;
    &-content {
      color: white;
    }
  }
}
label {
  margin-right: 5px;
  font-weight: bold;
}
#weight,
#height {
  padding: 0 1%;
  height: 3vh;
  font-size: 1em;
  font-weight: bold;
  border: 1px solid #17a2b8;
  border-radius: 5px;
}
.table-button {
  text-decoration: none;
  padding: 0 2%;
  height: 4vh;
  font-size: 1.5em;
  font-weight: bold;
  border: 1px solid #17a2b8;
  border-radius: 5px;
  color: #17a2b8;
  background-color: white;
  transition: all 0.4s;
  &:hover,
  &:active,
  &:focus {
    color: white;
    background-color: #17a2b8;
  }
}
.vue-table {
  margin: 0 auto;
  width: 70vw;
}
</style>
