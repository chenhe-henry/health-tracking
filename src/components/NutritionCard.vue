<template>
  <div class="container">
    <h1>Nutrition Facts</h1>
    <table>
      <tr>
        <th></th>
        <th>Total Amount</th>
        <th>Recommended</th>
      </tr>
      <tr>
        <td>Calories(kcal)</td>
        <td>{{ totalCalories }}</td>
        <td>8,700</td>
      </tr>
      <tr>
        <td>Protein(g)</td>
        <td>{{ totalProtein }}</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Fat(g)</td>
        <td>{{ totalFat }}</td>
        <td>70</td>
      </tr>
      <tr>
        <td>Saturated Fatty Acids(g)</td>
        <td>{{ totalSaturatedFat }}</td>
        <td>24</td>
      </tr>
      <tr>
        <td>Carbs(g)</td>
        <td>{{ totalCarb }}</td>
        <td>310</td>
      </tr>
      <tr>
        <td>Sugars(g)</td>
        <td>{{ totalSugar }}</td>
        <td>90</td>
      </tr>
      <tr>
        <td>Sodium (mg)</td>
        <td>{{ totalSodium }}</td>
        <td>2300</td>
      </tr>
      <tr>
        <td>Dietary Fibre(g)</td>
        <td>{{ totalFiber }}</td>
        <td>30</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    nutritionData: Array,
  },
  computed: {
    totalCalories() {
      let totalCalories = this.nutritionData.reduce(
        (accum, item) => accum + item.calories,
        0
      );
      return totalCalories;
    },
    totalProtein() {
      let totalProtein = this.nutritionData.reduce(
        (accum, item) => accum + item.totalNutrients.PROCNT.quantity,
        0
      );
      return totalProtein.toFixed(3);
    },
    totalFat() {
      let totalFat = this.nutritionData.reduce(
        (accum, item) => accum + item.totalNutrients.FAT.quantity,
        0
      );
      return totalFat.toFixed(3);
    },
    totalSaturatedFat() {
      let totalSaturatedFat = this.nutritionData.reduce(
        (accum, item) => accum + item.totalNutrients.FASAT.quantity,
        0
      );
      return totalSaturatedFat.toFixed(3);
    },

    totalCarb() {
      let totalCarb = this.nutritionData.reduce(
        (accum, item) => accum + item.totalNutrients.CHOCDF.quantity,
        0
      );
      return totalCarb.toFixed(3);
    },
    totalSugar() {
      let totalSugar = this.nutritionData.reduce(
        (accum, item) => accum + item.totalNutrients.SUGAR.quantity,
        0
      );
      return totalSugar.toFixed(3);
    },
    totalSodium() {
      let totalSodium = this.nutritionData.reduce(
        (accum, item) => accum + item.totalNutrients.NA.quantity,
        0
      );
      return totalSodium.toFixed(3);
    },
    totalFiber() {
      let totalFiber = this.nutritionData.reduce(
        (accum, item) => accum + item.totalNutrients.FIBTG.quantity,
        0
      );
      return totalFiber.toFixed(3);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid black;
  border-radius: 5px;
}
table {
  margin: 0 auto;
}
</style>
