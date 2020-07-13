import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import AllCountries from "@/components/AllCountries.vue";
import Affirmation from "@/components/Affirmation.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/allcountries",
      name: "allcountries",
      component: AllCountries,
    },
    {
      path: "/affirmation",
      name: "affirmation",
      component: Affirmation,
    },
  ],
});
