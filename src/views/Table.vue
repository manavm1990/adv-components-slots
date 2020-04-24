<template>
  <Table
    v-if="projects.length"
    :items="projects"
    :total-stargazers="sumBy(projects, 'stargazers_count')"
    :total-open-issues="sumBy(projects, 'open_issues')"
  />
</template>

<script>
import axios from "axios";
import sum from "lodash.sum";

export default {
  components: {
    Table: () =>
      import(
        /* webpackChunkName: "scoped" */ "@/components/scoped/table/VSTable.vue"
      )
  },
  data() {
    return {
      username: "vuejs",
      projects: []
    };
  },
  created() {
    this.findData();
  },
  methods: {
    async findData() {
      const results = await axios.get(
        `https://api.github.com/orgs/${this.username}/repos`
      );
      this.projects = results.data;
    },
    sumBy(array, property) {
      return sum(array.map(x => x[property]));
    }
  }
};
</script>
