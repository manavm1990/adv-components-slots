<template>
  <div>
    <label for="username" class="screen-reader-text">GitHub Username</label>
    <input v-model="username" id="username" placeholder="A GitHub Username" />

    <DataLoader
      :endpoint="`https://api.github.com/orgs/${this.username}/repos`"
    >
      <template #custom-loading-message>
        Loading 💩 for GitHub User: {{ username }}
      </template>
      <template #custom-error-message>
        Can't retrieve data for: {{ username }}
      </template>
      <template #dataDisplay="{dataResults}">
        <Table v-if="dataResults" :columns="columns" :t-data="dataResults">
          <template #thead.stargazersCount>
            <rating>
              <font-awesome-icon :icon="['far', 'star']" />
            </rating>
          </template>

          <template #thead.openIssues>
            Open Issues! <font-awesome-icon icon="dragon" />
          </template>

          <template #tfoot.stargazersCount>{{
            sumBy("stargazers_count", dataResults)
          }}</template>
          <template #tfoot.openIssues>{{
            sumBy("open_issues", dataResults)
          }}</template>

          <template #tbody />
          <template #tbody.remove="{item, remove}">
            <button @click="remove(item)">Remove</button>
          </template>
        </Table>
      </template>
    </DataLoader>
  </div>
</template>

<script>
import sum from "lodash.sum";

export default {
  components: {
    DataLoader: () =>
      import(
        /* webpackChunkName: "scoped" */ "@/components/scoped/home/DataLoader.vue"
      ),
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
      username: "vuejs"
    };
  },
  methods: {
    sumBy(property, dataSet) {
      return sum(dataSet.map(x => x[property]));
    }
  }
};
</script>
