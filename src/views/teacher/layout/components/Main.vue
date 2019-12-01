<template>
  <div id="consoleMain">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ConsoleMain",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
@import "../../../../styles/config";
#consoleMain {
  position: fixed;
  left: $navWidth;
  top: 75px;
  right: 0;
  bottom: 0;
  border: 30px solid #f7f7f7;
  border-bottom: none;
  -webkit-box-sizing: border-box;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}
</style>
