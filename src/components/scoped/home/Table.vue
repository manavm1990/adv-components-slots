<template>
  <table v-if="tData">
    <slot name="thead">
      <thead>
        <th v-for="column in capitalizedColumns" :key="column.id" scope="col">
          <slot :name="`thead.${camelcaseProp(column)}`">
            {{ column }}
          </slot>
        </th>
      </thead>
    </slot>

    <tfoot>
      <th scope="row">
        Totals
      </th>
      <td v-for="column in capitalizedColumns" :key="column.id">
        <slot :name="`tfoot.${camelcaseProp(column)}`">
          N/A
        </slot>
      </td>
    </tfoot>

    <slot name="tbody">
      <tbody>
        <tr
          v-for="td in tData"
          :key="td.id"
          :class="`${td.highlighted ? 'highlighted' : 'normal'}`"
        >
          <td v-for="column in columns" :key="column.id">
            <template>
              {{ td[column] }}
            </template>
          </td>
          <slot name="tbody.remove" :item="td.id" :remove="remove" />
        </tr>
      </tbody>
    </slot>
  </table>
</template>

<script>
import camelcase from "lodash.camelcase";
import capitalize from "lodash.capitalize";

export default {
  props: {
    columns: {
      type: Array,
      required: true
    },
    tData: {
      type: Array,
      required: true
    }
  },
  computed: {
    capitalizedColumns() {
      return this.columns.map(column =>
        column
          .split("_")
          .map(c => capitalize(c))
          .join(" ")
      );
    }
  },
  methods: {
    camelcaseProp(p) {
      return camelcase(p);
    },
    remove(itemID) {
      // Find index of matching id and replace it with nothing (splice)
      this.tData.splice(
        this.tData.findIndex(element => element.id === itemID),
        1
      );
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
