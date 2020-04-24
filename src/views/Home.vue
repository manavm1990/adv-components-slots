<template>
  <div class="home">
    <VSRating :rating="1.7" />

    <VSRating :rating="3.7">
      <template #filled>
        <font-awesome-icon icon="circle" />
      </template>

      <template #half-filled>
        <font-awesome-icon icon="adjust" />
      </template>

      <template #unfilled>
        <font-awesome-icon :icon="['far', 'circle']" />
      </template>
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
