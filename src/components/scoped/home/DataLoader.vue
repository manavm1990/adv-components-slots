<template>
  <div>
    <slot name="dataDisplay" :dataResults="dataResults">
      <Spinner />
    </slot>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {
    Spinner: () =>
      import(
        /* webpackChunkName: "scoped" */ "@/components/scoped/home/Spinner"
      )
  },
  props: {
    endpoint: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dataResults: []
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        const results = await axios.get(this.endpoint);
        this.dataResults = results.data;
      } catch (error) {
        console.error("404!");
      }
    }
  },
  watch: {
    endpoint() {
      this.getData();
    }
  }
};
</script>

<style lang="scss" scoped></style>
