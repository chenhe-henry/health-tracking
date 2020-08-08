import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import Affirmation from "@/pages/Affirmation.vue";
import Quiz from "@/pages/Quiz.vue";
import Quizzes from "@/pages/Quizzes.vue";
import Gallery from "@/pages/Gallery.vue";
import BodyMeasurement from "@/pages/BodyMeasurement.vue";
import BMICalculator from "@/pages/BMICalculator.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/gallery",
      name: "gallery",
      component: Gallery,
    },
    {
      path: "/bodymeasurement",
      name: "bodymeasurement",
      component: BodyMeasurement,
    },
    {
      path: "/bmicalculator",
      name: "bmicalculator",
      component: BMICalculator,
    },
    {
      path: "/quizzes/:quizId",
      name: "quiz",
      component: Quiz,
      props: true,
    },
    {
      path: "/affirmation",
      name: "affirmation",
      component: Affirmation,
    },
    {
      path: "/quizzes",
      name: "quizzes",
      component: Quizzes,
    },
  ],
});
