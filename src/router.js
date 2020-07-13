import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Countries from "@/pages/Countries.vue";
import Affirmation from "@/pages/Affirmation.vue";
import Country from "@/pages/Country.vue";
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
      path: "/countries",
      name: "countries",
      component: Countries,
    },
    {
      path: "/countries/:countryName",
      name: "country",
      component: Country,
      props: true,
    },
    {
      path: "/affirmation",
      name: "affirmation",
      component: Affirmation,
    },
  ],
});
