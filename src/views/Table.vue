<template>
  <Table
    v-if="projects.length"
    :table-items="projects"
    :thead-items="['Name', 'Stargazers', 'Language', 'Open Issues', 'Actions']"
  >
    <template #tfoot>
      <td><strong>Totals:</strong></td>
      <td>{{ sumBy(projects, "stargazers_count") }}</td>
      <td>{{ sumBy(projects, "open_issues") }}</td>
    </template>

    <template #tbody="{item, highlight, remove}">
      <td>{{ item.name }}</td>
      <td>{{ item.stargazers_count }} <font-awesome-icon icon="star" />s</td>
      <td>{{ item.language }}</td>
      <td>{{ item.open_issues }}</td>
      <td>
        <button @click="highlight(item)">Highlight</button>
        <button @click="remove(item)">Remove</button>
      </td>
    </template>
  </Table>
</template>

<script>
import axios from "axios"
import sum from "lodash.sum"

export default {
  components: {
    Table: () =>
      import(
        /* webpackChunkName: "scoped" */ "@/components/scoped/table/VSTable.vue"
      ),
  },
  data() {
    return {
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
    sumBy(a, property) {
      return sum(a.map((x) => x[property]))
    },
  },
}
</script>
