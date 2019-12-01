<template>
  <div id="consoleNav">
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-menu-item
        :index="index + ''"
        v-for="(item, index) in routeConsole"
        :key="item.name"
      >
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{ item.meta.name }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "ConsoleNav",
  data() {
    return {
      routeConsole: this.$store.state.router.routeConsole,
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    console.log(this.routeConsole);
  }
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
@import "../../../../styles/config";
#consoleNav {
  position: fixed;
  top: 0;
  left: 0;
  width: $navWidth;
  height: 100vh;
  background-color: #990000;
  opacity: 0.8;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    width: $navWidth !important;
    .el-menu-item.is-active {
      background-color: rgba(120, 20, 20, 1) !important;
    }
    .el-menu-item:hover {
      background-color: rgba(80, 0, 0, 0.5) !important;
    }
  }
}
</style>
