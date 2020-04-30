<template>
  <div>
    <slot name="dataDisplay" :dataResults="dataResults" />
  </div>
</template>

<script>
import axios from "axios";

export default {
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
      const results = await axios.get(this.endpoint);
      this.dataResults = results.data;
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
