<template>
  <div class="affirmation">
    <BaseBanner class="affirmation__title">
      <div class="affirmation__title-content">
        Inspire yourself with
        <span class="coloredTitle"> affirmation</span> here!
      </div>
    </BaseBanner>
    <h1 v-show="showAffirmation === false">
      At this tough time, we all need
      <div class="clickable" @click="showaffirmation" role="affirmation">
        affirmations !
      </div>
    </h1>

    <div v-show="showAffirmation" role="show">
      <h1 class="affirmation__text" v-show="affirmation">
        Today's affirmation -- {{ affirmation }}.
      </h1>
      <img class="affirmation__img" src="../assets/power.jpeg" alt="pic" />
    </div>
  </div>
</template>

<script>
import AffirmationService from "@/services/AffirmationService.js";
export default {
  data() {
    return {
      affirmation: "",
      showAffirmation: false,
    };
  },
  methods: {
    showaffirmation() {
      this.showAffirmation = true;
    },
  },
  created() {
    AffirmationService.getAffirmation()
      .then((res) => {
        this.affirmation = res.data.affirmation;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
.coloredTitle {
  color: rgb(27, 219, 17);
}
.affirmation {
  &__title {
    background-image: linear-gradient(
      to right,
      rgb(17, 212, 199),
      rgb(224, 28, 185)
    );
    font-size: 4em;
    height: 10vh;
    &-content {
      color: white;
    }
  }
}
.affirmation {
  height: 92.8vh;

  &__img {
    height: 70vh;
  }
}
.clickable {
  display: inline-block;
  cursor: pointer;
  color: green;
  animation: jumpUp 2s infinite linear;
}
@keyframes jumpUp {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
