<template>
  <div class="home">
    <VSRating
      v-slot="{ isFilled, isHalfFilled }"
      :rating="8.7"
      :max-rating="10"
    >
      <font-awesome-icon v-if="isFilled" icon="circle" />
      <font-awesome-icon v-else-if="isHalfFilled" icon="adjust" />
      <font-awesome-icon v-else :icon="['far', 'circle']" />
    </VSRating>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    VSRating: () =>
      import(
        /* webpackChunkName: "scoped" */ "@/components/scoped/home/VSRating"
      )
  }
};
</script>
