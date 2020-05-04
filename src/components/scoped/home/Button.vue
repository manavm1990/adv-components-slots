<template>
  <button :class="classes" v-on:click="$emit('handle-click')">
    <slot>Default</slot>
  </button>
</template>

<script>
export default {
  props: {
    classes: {
      type: Array,
      default() {
        return ["button"];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  background-color: rgb(158, 195, 208);
  border-color: black;
  border-radius: 3px;
  box-shadow: 2px 2px rgb(39, 39, 196);
  cursor: pointer;
  margin: 0.25rem;
  padding: 0.5rem;
  position: relative;

  &:hover {
    box-shadow: 3px 3px rgb(39, 39, 196);
    left: -3px;
    top: -3px;
  }
}

.pagination-button {
  border-radius: 3px;
  cursor: pointer;
  font-size: 1em;
  margin: 2px;
  padding: 0.5rem;
}
</style>
