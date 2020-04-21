<template>
  <div class="home">
    <VSButton />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    VSButton: () =>
      import(
        /* webpackChunkName: "scoped" */ "@/components/scoped/home/VSButton"
      )
  }
};
</script>
