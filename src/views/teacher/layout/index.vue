<template>
  <div id="layout">
    <layout-header></layout-header>
    <layout-main></layout-main>
    <layout-nav></layout-nav>
  </div>
</template>

<script>
export default {
  name: "layout",
  components: {
    "layout-header": () => import("./components/Header.vue"),
    "layout-main": () => import("./components/Main.vue"),
    "layout-nav": () => import("./components/Nav.vue")
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
#layout {
}
</style>
