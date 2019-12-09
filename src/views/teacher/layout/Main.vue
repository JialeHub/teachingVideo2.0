<template>
  <div id="consoleMain" :class="consoleMain">
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ConsoleMain",
  data() {
    return {
      consoleMain: [""]
    };
  },
  created() {
    window.consoleMain_this = this;
  },
  methods: {}
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
@import "@/styles/config";
#consoleMain {
  position: fixed;
  left: $navWidth;
  top: 66px;
  right: 0;
  bottom: 0;
  padding: 30px;
  overflow: auto;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}
</style>
