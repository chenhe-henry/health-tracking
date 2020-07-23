<template>
  <div class="quiz">
    <div v-for="quiz in quizzes" :key="quiz.index" role="quiz" class="quiz__block">
      <div>
        <strong>{{quiz.index}}</strong>
      </div>
      <div>
        <strong>Category:</strong>
        {{quiz.category}}
      </div>
      <div>
        <strong>Difficulty:</strong>
        {{quiz.difficulty}}
      </div>
      <!-- <div>
        <strong>Question:</strong>
        {{quiz.question}}
      </div>
      <div>
        <strong>Correct:</strong>
        {{quiz.correct_answer}}
      </div>
      <div>
        <strong>Incorrect:</strong>
        {{quiz.incorrect_answers}}
      </div>-->
    </div>
  </div>
</template>

<script>
import Quiz from "@/services/Quiz.js";
export default {
  name: "HomePage",

  data() {
    return {
      quizzes: {},
    };
  },

  created() {
    Quiz.getQuiz()
      .then((res) => {
        this.quizzes = res.data.results;
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.quiz {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  &__block {
    border: 1px solid black;
    margin: 1em;
    box-shadow: 10px 10px 5px -5px rgba(0, 0, 0, 0.5);
    transition: all 0.2s;
    &:hover {
      background-color: aqua;
      transform: translateY(-5px);
    }
    &:focus,
    &:active {
      transform: translateY(0px);
    }
  }
}
</style>
