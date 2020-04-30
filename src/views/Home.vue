<template>
  <Table v-if="projects.length" :columns="columns" :t-data="projects">
    <template #thead.stargazersCount>
      <rating>
        <font-awesome-icon :icon="['far', 'star']" />
      </rating>
    </template>

    <template #thead.openIssues>
      Open Issues! <font-awesome-icon icon="dragon" />
    </template>

    <template #tfoot.stargazersCount>{{ sumBy("stargazers_count") }}</template>
    <template #tfoot.openIssues>{{ sumBy("open_issues") }}</template>

    <template #tbody />
    <template #tbody.remove="{item, remove}">
      <button @click="remove(item)">Remove</button>
    </template>
  </Table>
</template>

<script>
import axios from "axios";
import sum from "lodash.sum";

export default {
  components: {
    Rating: () =>
      import(
        /* webpackChunkName: "scoped" */ "@/components/scoped/home/Rating.vue"
      ),
    Table: () =>
      import(
        /* webpackChunkName: "scoped" */ "@/components/scoped/home/Table.vue"
      )
  },
  data() {
    return {
      // GitHub API property names
      columns: ["name", "stargazers_count", "language", "open_issues", "forks"],
      projects: [],
      username: "vuejs"
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const results = await axios.get(
        `https://api.github.com/orgs/${this.username}/repos`
      );
      this.projects = results.data;
    },
    sumBy(property, d = this.projects) {
      return sum(d.map(x => x[property]));
    }
  }
};
</script>
