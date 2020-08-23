<template>
  <div class="hello">
    <h1 class="homepage__title">
      More than
      <span class="coloredTitle">Health</span> Tracking!
    </h1>
    <div class="homepage__card">
      <BaseCard v-for="card in cardInfo" :key="card.title" class="homepage__card-block">
        <img :src="getLogosUrl(card.name)" slot="img" :alt="card.title" height="200px" />
        <h2 slot="title">{{ card.title }}</h2>
        <p slot="description">{{ card.description }}</p>
      </BaseCard>
    </div>
    <div>
      <img src="healthlife.jpeg" alt="healthlife" />
      <div>
        <BaseBlock v-for="block in blockInfo" :key="block.title">
          <h2 slot="title">{{ block.title }}</h2>
          <p slot="description">{{ block.description }}</p>
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
          name: "bodyMeasurement.jpeg",
          title: "Body Measurement",
          description: "Record and track your weight every single day.",
        },
        {
          name: "bmi.jpeg",
          title: "BMI calculator",
          description: "Calculate your BMI, get know your health condition.",
        },
        {
          name: "gallery.jpeg",
          title: "Gallary",
          description: "Share with us your colorful life!",
        },
      ],
      blockInfo: [
        {
          title: "Tracks your progress",
          description:
            " Achieving and maintaining a healthy lifestyle can be a challenge for many people as the busy nature of many lives. By being able to enter and keep a record of your health and wellbeing over the past week, month or year, you have set yourself becomes much easier as you are able to keep an eye on your progress and see how far you have come. Being able to see your progress can also help you to achieve smaller goals that are more focused on improving your general health, rather than completing a one-off ambition.",
        },
        {
          title: "Encourages competition",
          description:
            "Inputting your personal data, tracking your activity and your subsequent progress can encourage you and your colleagues or friends to be competitive with each other. By being able to see what your peers are doing, you are likely to be more encouraged to reach and surpass your own exercise goals to keep on track with them, and to make sure you don’t look like the weak link in your office or friendship group. Having the progress and achievements of your peers will increase yourself-motivation as even those who aren’t particularly competitive don’t want to be embarrassed or left looking the most unfit when compared to everyone else.",
        },
      ],
    };
  },
  methods: {
    getLogosUrl(pic) {
      return require(`../assets/homepageLogos/${pic}`);
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
  }
  &__card {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    &-block {
      margin: 0 10px;
      padding: 20px;
    }
  }
}
</style>
