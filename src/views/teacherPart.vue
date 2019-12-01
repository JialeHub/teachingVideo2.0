<template>
  <div id="teacherPart">
    <consoleLayout></consoleLayout>
  </div>
</template>

<script>
export default {
  name: "teacherPart",
  components: {
    consoleLayout: () => import("./teacher/layout/index.vue")
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
