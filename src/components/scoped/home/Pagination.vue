<template>
  <div class="padding-row">
    <button>Previous</button>
    <span v-for="(_, index) in new Array(10)" :key="index">
      <Button :classes="['pagination-button']">{{ index + 1 }}</Button>
    </span>
    <button>Next</button>
  </div>
</template>

<script>
export default {
  components: {
    Button: () =>
      import(
        /* webpackChunkName: "scoped" */ "@/components/scoped/home/Button.vue"
      )
  }
};
</script>

<style lang="scss" scoped>
.padding-row {
  padding: 0.25rem 0;
}
</style>
