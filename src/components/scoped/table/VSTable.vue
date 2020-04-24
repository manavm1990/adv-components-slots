<template>
  <table v-if="items">
    <thead>
      <th>Name</th>
      <th>Stargazers</th>
      <th>Language</th>
      <th>Open Issues</th>
      <th>Actions</th>
    </thead>
    <tfoot>
      <tr>
        <td><strong>Totals</strong></td>
        <td>{{ totalStargazers }}</td>
        <td></td>
        <td>{{ totalOpenIssues }}</td>
        <td></td>
      </tr>
    </tfoot>
    <tbody>
      <tr
        v-for="item in items"
        :key="item.id"
        :class="`${item.highlighted ? 'highlighted' : 'normal'}`"
      >
        <td>{{ item.name }}</td>
        <td>{{ item.stargazers_count }}</td>
        <td>{{ item.language }}</td>
        <td>{{ item.open_issues }}</td>
        <td>
          <button @click="highlight(item)">Highlight</button>
          <button @click="remove(item)">Remove</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Vue from "vue";

export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    totalOpenIssues: {
      type: Number,
      default: 0
    },
    totalStargazers: {
      type: Number,
      default: 0
    }
  },
  methods: {
    highlight(item) {
      item.highlighted = !item.highlighted;
      let index = this.items.findIndex(i => i.id === item.id);
      Vue.set(this.items, index, item);
    },
    remove(item) {
      let index = this.items.findIndex(i => i.id === item.id);
      this.items.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>
table {
  margin: auto;
  border-collapse: collapse;

  tr {
    &.highlighted {
      background-color: #8fee90;
    }
    td,
    th {
      padding: 0.5rem;
      text-align: left;
    }
    th {
      border-bottom: 1px solid #999;
    }
    &:nth-child(2n) {
      background-color: #ddd;

      &.highlighted {
        background-color: #7fde80;
      }
    }
  }

  tfoot {
    td {
      border-top: 1px solid black;
    }
  }
}
</style>
