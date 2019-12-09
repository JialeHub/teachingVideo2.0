<template>
  <div id="teacherPart">
    <layout-header></layout-header>
    <layout-main></layout-main>
    <layout-nav></layout-nav>
  </div>
</template>

<script>
export default {
  name: "teacherPart",
  components: {
    "layout-header": () => import("./teacher/layout/Header.vue"),
    "layout-main": () => import("./teacher/layout/Main.vue"),
    "layout-nav": () => import("./teacher/layout/Nav.vue")
  },
  data() {
    return {};
  }
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
#teacherPart {
}
</style>
