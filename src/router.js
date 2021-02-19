import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Affirmation from "@/pages/Affirmation.vue";
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
      component: () => import("@/pages/NutritionAnalysis.vue"),
    },
    {
      path: "/bodymeasurement",
      name: "bodymeasurement",
      component: () => import("@/pages/BodyMeasurement.vue"),
    },
    {
      path: "/affirmation",
      name: "affirmation",
      component: Affirmation,
    },
  ],
});
