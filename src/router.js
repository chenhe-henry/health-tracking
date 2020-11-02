import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Affirmation from "@/pages/Affirmation.vue";

import NutritionAnalysis from "@/pages/NutritionAnalysis.vue";
import BodyMeasurement from "@/pages/BodyMeasurement.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/nutritionanalysis",
      name: "nutritionanalysis",
      component: NutritionAnalysis,
    },
    {
      path: "/bodymeasurement",
      name: "bodymeasurement",
      component: BodyMeasurement,
    },
    {
      path: "/affirmation",
      name: "affirmation",
      component: Affirmation,
    },
  ],
});
