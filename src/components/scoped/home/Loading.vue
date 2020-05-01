<template>
  <div>
    <div class="loading-spinner">
      Loading...
    </div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes load {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}

.loading-spinner,
.loading-spinner:before,
.loading-spinner:after {
  animation: load 1s infinite ease-in-out;
  background: #000;
  height: 4em;
  width: 1em;
}

.loading-spinner {
  animation-delay: -0.16s;
  color: #000;
  font-size: 11px;
  margin: 88px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
}

.loading-spinner:before,
.loading-spinner:after {
  content: "";
  position: absolute;
  top: 0;
}

.loading-spinner:before {
  animation-delay: -0.32s;
  left: -1.5em;
}

.loading-spinner:after {
  left: 1.5em;
}
</style>
