<template>
  <div>
    <div v-if="isLoading">
      <Loading />
      <slot name="custom-loading-message" />
    </div>
    <slot v-else name="dataDisplay" :dataResults="dataResults" />
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";

export default {
  components: {
    Loading: () =>
      import(
        /* webpackChunkName: "scoped" */ "@/components/scoped/home/Loading"
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
      dataResults: null,
      isLoading: false
    };
  },
  created() {
    this.getData();

    // Each instance of this component will have their own version of this to avoid any 'fights.'
    this.updateData = debounce(this.getData, 500);
  },
  methods: {
    async getData() {
      try {
        this.isLoading = true;
        const results = await axios.get(this.endpoint);
        this.dataResults = results.data;
        this.isLoading = false;
      } catch (error) {
        console.error("404!");
      }
    }
  },
  watch: {
    endpoint: function() {
      this.updateData();
    }
  }
};
</script>
