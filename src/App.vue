<template>
  <div id="app">
    <v-studentPart></v-studentPart>
  </div>
</template>

<script>
export default {
  name: "studentPart",
  components: {
    "v-studentPart": () => import("./views/studentPart.vue")
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
