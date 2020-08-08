<template>
  <div class="hello">
    <h1>
      More than
      <span class="coloredTitle">Health</span> Tracking!
    </h1>
    <div class="homepage__nav">
      <BaseCard v-for="card in cardInfo" :key="card.title"
        ><img :src="card.imgURL" slot="img" :alt="card.title" />
        <h2 slot="title">{{ card.title }}</h2>
        <p slot="description">
          {{ card.description }}
        </p></BaseCard
      >
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
          imgURL: "../assets/bmi.jpeg",
          title: "BMI calculator",
          description: "Calculate your BMI, get know your health condition.",
        },
        {
          imgURL: "../assets/body_measurement.jpeg",
          title: "Body Measurement",
          description: "Record and track your weight every single day.",
        },
        {
          imgURL: "../assets/warriors_gallery.jpeg",
          title: "Warriors Gallary",
          description: "Share with us your colorful life!",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.coloredTitle {
  color: rgb(27, 219, 17);
}
.homepage__nav {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
