import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/pages/HomePage.vue";

import Affirmation from "@/pages/Affirmation.vue";
import Quiz from "@/pages/Quiz.vue";
import Quizzes from "@/pages/Quizzes.vue";
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
      path: "/quizzes/:quizId",
      name: "Quiz",
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
