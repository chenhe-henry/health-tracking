<template>
  <div>
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

<style lang="scss" scoped></style>
