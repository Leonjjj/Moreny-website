<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "@/assets/style/reset.scss";
@import "@/assets/style/helper.scss";
body {
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
  background: #f4f4f4;
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
