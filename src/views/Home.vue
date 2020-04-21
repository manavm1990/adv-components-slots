<template>
  <div class="home">
    <!-- Bind to treat '3' as JS Number -->
    <VSRating :rating="3" />
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
