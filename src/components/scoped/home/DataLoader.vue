<template>
  <div>
    <slot name="dataDisplay" :dataResults="dataResults">
      <Spinner />
    </slot>
  </div>
</template>

<script>
import axios from "axios";
import debounce from "lodash.debounce";

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
      dataResults: null,
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
        const results = await axios.get(this.endpoint);
        this.dataResults = results.data;
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
