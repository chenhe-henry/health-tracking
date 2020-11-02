<template>
  <div class="hello">
    <BaseBanner class="homepage__title">
      <div class="homepage__title-content">
        Health Tracking
      </div>
    </BaseBanner>
    <div class="homepage__card">
      <BaseCard
        v-for="card in cardInfo"
        :key="card.title"
        class="homepage__card-block"
      >
        <img
          :src="getLogosUrl(card.name)"
          slot="img"
          :alt="card.title"
          height="200px"
        />
        <h2 slot="title">{{ card.title }}</h2>
        <p slot="description">
          {{ card.description }}
        </p>
        <router-link
          :to="{ name: card.redirectTo }"
          slot="button"
          class="homepage__card-block-button"
        >
          Learn More
        </router-link>
      </BaseCard>
    </div>
    <div class="homepage__block">
      <div class="homepage__block-img">
        <img :src="getLogosUrl('healthlife.jpeg')" alt="healthlife" />
      </div>
      <div class="homepage__block-content">
        <BaseBlock v-for="block in blockInfo" :key="block.title">
          <h2 slot="title">{{ block.title }}</h2>
          <p slot="description">{{ block.description[0] }}</p>
          <p slot="description">{{ block.description[1] }}</p>
          <p slot="description">{{ block.description[2] }}</p>
        </BaseBlock>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  data() {
    return {
      cardInfo: [
        {
          name: "bmi.jpeg",
          title: "Body Measurement & Record",
          description: "Record and track your weight and BMI.",
          redirectTo: "bodymeasurement",
        },
        {
          name: "breakfast.jpg",
          title: "Nutrition Analysis",
          description: "Share with us your colorful life!",
          redirectTo: "nutritionanalysis",
        },
      ],
      blockInfo: [
        {
          title: "Tracks your progress",
          description: [
            "Achieving and maintaining a healthy lifestyle can be a challenge for many people as the busy nature of many lives.",
            "By being able to enter and keep a record of your health and wellbeing over the past week, month or year, you have set yourself becomes much easier as you are able to keep an eye on your progress and see how far you have come.",
            "Being able to see your progress can also help you to achieve smaller goals that are more focused on improving your general health, rather than completing a one-off ambition.",
          ],
        },
        {
          title: "Encourages competition",
          description: [
            "Inputting your personal data, tracking your activity and your subsequent progress can encourage you and your colleagues or friends to be competitive with each other.",
            "By being able to see what your peers are doing, you are likely to be more encouraged to reach and surpass your own exercise goals to keep on track with them, and to make sure you don’t look like the weak link in your office or friendship group.",
            "Having the progress and achievements of your peers will increase yourself-motivation as even those who aren’t particularly competitive don’t want to be embarrassed or left looking the most unfit when compared to everyone else.",
          ],
        },
      ],
    };
  },
  methods: {
    getLogosUrl(pic) {
      return require(`../assets/cards/${pic}`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.coloredTitle {
  color: rgb(27, 219, 17);
}
.homepage {
  &__title {
    background-image: linear-gradient(
        to right,
        rgba(white, 0.5),
        rgba(white, 0.7)
      ),
      url("../assets/healthlife.jpg");
    background-size: cover;
    font-size: 4em;
    height: 90vh;
    position: relative;
    clip-path: polygon(0 0, 70vw 0, 100vw 15vh, 100vw 95vh, 90vw 95vh, 0 75vh);
    &-content {
      color: black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -60%);
      text-align: center;
    }
  }
  &__card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    &-block {
      margin: 0 10px;
      padding: 20px;
      border: 1px solid #17a2b8;
      border-radius: 5px;
      &-button {
        text-decoration: none;
        padding: 0 10%;
        height: 4vh;
        font-size: 1.5em;
        font-weight: bold;
        border: 1px solid #17a2b8;
        border-radius: 5px;
        color: #17a2b8;
        background-color: white;
        transition: all 0.4s;
        &:hover,
        &:active,
        &:focus {
          color: white;
          background-color: #17a2b8;
        }
      }
    }
  }
  &__block {
    margin-top: 5vh;
    display: flex;

    &-img {
      width: 25vw;
      margin: auto 0;
    }
    &-content {
      width: 75vw;
      margin: 0 2vw;
      text-align: left;
    }
  }
}
</style>
