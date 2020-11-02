<template>
  <div>
    <BaseBanner class="bodymeasurement__title">
      <div class="bodymeasurement__title-content">
        Analyse Your Healthy Diet
      </div>
    </BaseBanner>
    <form @submit.prevent="onSubmit">
      <p>
        <label for="quantity">Quantity: </label>
        <input
          type="number"
          id="quantity"
          min="0"
          placeholder="Quantity"
          v-model="quantity"
        />
        <label for="size"> Size: </label>
        <select id="size" name="size" v-model="size">
          <option value="small">Small </option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
          <option value="cup">Cup</option>
        </select>
      </p>
      <p>
        <label for="item">Item: </label>
        <input
          type="text"
          id="item"
          v-model="item"
          placeholder="Enter the food you like"
        />
      </p>
      <p>
        <input type="submit" value="Add" class="table-button" />
      </p>
    </form>
    <section class="nutritionAnalysis">
      <div class="nutritionAnalysis__info">
        <div class="summary">
          <div v-for="(nutritionData, index) in nutritionData" :key="index">
            {{ nutritionData.ingredients[0].text }}
          </div>
        </div>
        <table>
          <tr>
            <th>Qty</th>
            <th>Unit</th>
            <th>Food</th>
            <th>Calories</th>
            <th>Weight</th>
          </tr>
          <tr v-for="(nutritionData, index) in nutritionData" :key="index">
            <td>{{ nutritionData.ingredients[0].text.split(" ")[0] }}</td>
            <td>{{ nutritionData.ingredients[0].text.split(" ")[1] }}</td>
            <td>{{ nutritionData.ingredients[0].text.split(" ")[2] }}</td>
            <td>{{ nutritionData.calories }}</td>
            <td>{{ nutritionData.totalWeight }}</td>
          </tr>
        </table>
      </div>
      <NutritionCard :nutritionData="nutritionData" class="nutritionFact" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import NutritionCard from "@/components/NutritionCard.vue";
export default {
  components: { NutritionCard },
  data() {
    return {
      quantity: null,
      size: null,
      item: null,
      appID: process.env.VUE_APP_NUTRITION_ANALYSE_APP_ID,
      apiKey: process.env.VUE_APP_NUTRITION_ANALYSE_API_KEY,
      searchUrl:
        "https://cors-anywhere.herokuapp.com/https://api.edamam.com/api/nutrition-data",
      nutritionData: [],
    };
  },
  methods: {
    onSubmit() {
      if (this.quantity && this.size && this.item) {
        let foodSelection = {
          item: this.item,
          size: this.size,
          quantity: this.quantity,
        };

        this.analyse(
          foodSelection.quantity,
          foodSelection.size,
          foodSelection.item
        );
      }
    },
    analyse(quantity, size, item) {
      axios
        .get(
          `${this.searchUrl}?app_id=${this.appID}&app_key=${this.apiKey}&ingr=${quantity}%20${size}%20${item}`
        )
        .then((response) => {
          this.nutritionData.push(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  margin: 20px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.nutritionFact {
  margin: 20px;
}
.summary {
  height: 20vh;
  border: 1px solid black;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
}

.images {
  height: 200px;
}
.bodymeasurement {
  &__title {
    background-image: linear-gradient(
        to right,
        rgba(white, 0.5),
        rgba(white, 0.7)
      ),
      url("../assets/healthfood.jpg");
    background-size: cover;
    font-size: 4em;
    height: 90vh;
    position: relative;
    clip-path: polygon(0 0, 70vw 0, 100vw 15vh, 100vw 95vh, 90vw 95vh, 0 75vh);
    &-content {
      color: black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -60%);
      text-align: center;
    }
  }
}
label {
  margin-right: 5px;
  font-weight: bold;
}
#item,
#size,
#quantity {
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
.nutritionAnalysis {
  display: grid;
  grid-template-columns: 1fr 1fr;
  &__info {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
}
</style>
