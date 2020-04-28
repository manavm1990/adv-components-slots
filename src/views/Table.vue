<template>
  <Table v-if="projects.length" :columns="columns" :t-data="projects">
    <template #thead.stargazersCount>
      <font-awesome-icon icon="star" />s
    </template>

    <template #thead.openIssues>
      Open Issues! <font-awesome-icon icon="dragon" />
    </template>

    <template #tfoot.stargazersCount>{{ sumBy("stargazers_count") }}</template>
    <template #tfoot.openIssues>{{ sumBy("open_issues") }}</template>
  </Table>
</template>

<script>
import axios from "axios"
import sum from "lodash.sum";

export default {
  components: {
    Table: () =>
      import(
        /* webpackChunkName: "scoped" */ "@/components/scoped/table/VSTable.vue"
      ),
  },
  data() {
    return {
      // GitHub API property names
      columns: ["name", "stargazers_count", "language", "open_issues"],
      username: "vuejs",
      projects: [],
    }
  },
  created() {
    this.findData()
  },
  methods: {
    async findData() {
      const results = await axios.get(
        `https://api.github.com/orgs/${this.username}/repos`
      )
      this.projects = results.data
    },
      return sum(a.map((x) => x[property]))
    },
  },
    sumBy(property, d = this.projects) {
      return sum(d.map(x => x[property]));
    }
</script>
