<template>
  <div>
    <span v-for="(_, index) in new Array(maxRating)" :key="index">
      <slot
        :isFilled="index <= roundedRating - 1"
        :isHalfFilled="roundedRating - index === 0.5"
      />
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
