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
      path: "/covid-tracker",
      name: "home",
      component: HomePage,
    },
    {
      path: "/covid-tracker/countries",
      name: "countries",
      component: Countries,
    },
    {
      path: "/covid-tracker/countries/:countryName",
      name: "country",
      component: Country,
      props: true,
    },
    {
      path: "/covid-tracker/affirmation",
      name: "affirmation",
      component: Affirmation,
    },
  ],
});
