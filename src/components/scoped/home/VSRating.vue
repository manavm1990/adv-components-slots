<template>
  <div>
    <span v-for="(_, index) in new Array(maxRating)" :key="index">
      <font-awesome-icon v-if="index <= roundedRating - 1" icon="star" />

      <font-awesome-icon
        v-else-if="roundedRating - index === 0.5"
        icon="star-half-alt"
      />

      <font-awesome-icon v-else :icon="['far', 'star']" />
    </span>
  </div>
</template>

<script>
export default {
  props: {
    maxRating: {
      type: Number,
      default: 5
    },
    rating: {
      type: Number,
      required: true
    }
  },
  computed: {
    roundedRating() {
      return Math.round(this.rating * 2) / 2;
    }
  }
};
</script>

<style lang="scss" module></style>
