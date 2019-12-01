<template>
  <div id="consoleHeader">
    Header
  </div>
</template>

<script>
export default {
  name: "ConsoleHeader",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
@import "../../../../styles/config";

#consoleHeader {
  position: fixed;
  top: 0;
  right: 0;
  left: $navWidth;
  height: 75px;
  background-color: #fff;
  -webkit-box-shadow: 0 3px 16px 0 rgba(0, 0, 0, 0.1);
}
</style>
