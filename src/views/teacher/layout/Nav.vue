<template>
  <div id="consoleNav" ref="consoleNavRef">
    <el-menu
      default-active=""
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="transparent"
      text-color="#fff"
      active-text-color="#fff"
      :class="consoleNavElMenu"
    >
      <el-menu-item
        :index="index + ''"
        v-for="(item, index) in routeConsole"
        :key="item.name"
        @click="routerPush(item.name)"
      >
        <i :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.name }}</span>
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
      isCollapse: false,
      consoleNavElMenu: [""]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    routerPush(name) {
      this.$store.state.routerNowName = name;
      this.$router.push({ name: name });
    }
  },
  created() {
    window.nav_this = this;
  },
  mounted() {
    console.log(this.routeConsole);
    this.$store.commit(
      "teacherLayout/SET_consoleNav",
      this.$refs.consoleNavRef
    );
  }
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
@import "@/styles/config";
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
#consoleNav {
  position: fixed;
  top: 0;
  left: 0;
  width: $navWidth;
  height: 100vh;
  background-color: #990000;
  opacity: 1;
  .el-menu-item i {
    color: rgba(200, 200, 200, 1);
  }
  .el-menu {
    width: $navWidth;
    border: none;
    .el-menu-item.is-active {
      background-color: rgba(120, 20, 20, 1) !important;
    }
    .el-menu-item:hover {
      background-color: rgba(80, 0, 0, 0.5) !important;
    }
  }
}
</style>
