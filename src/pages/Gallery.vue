<template>
  <div>
    <BaseBanner class="bodymeasurement__title">
      <div class="bodymeasurement__title-content">
        Share your<span class="coloredTitle"> fitness journey</span> here!
      </div>
    </BaseBanner>
    <h1>Gallery Page is coming soon</h1>
    <!-- <h1>{{ gallery.name }}</h1>
    <h1>{{ gallery.id }}</h1>
    <h1>{{ gaLength }}</h1>
    <h1>There are {{ activeTodoCount }} todos left</h1>
    <h1>{{ getGalleryById(1) }}</h1> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["gaLength", "activeTodoCount", "getGalleryById"]),
    ...mapState(["gallery"]),
  },
};
</script>

<style lang="scss" scoped>
.coloredTitle {
  color: rgb(27, 219, 17);
}
.bodymeasurement {
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
</style>
