<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from "@/views/Home.vue";

export default {
  components: {
    Home
  }
};
</script>

<style lang="scss">
#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;
    font-weight: bold;
    margin-right: 8px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
