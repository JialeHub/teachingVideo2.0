<template>
  <div id="studentPart">
    <el-container>
      <!--头部-->
      <el-header><v-head></v-head></el-header>
      <!--中部-->
      <el-main>
        <transition mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>

      <!--尾部-->
      <el-footer><v-footer></v-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import Head from "./student/public/head.vue";
import Footer from "./student/public/footer.vue";

export default {
  name: "studentPart",
  components: {
    "v-head": Head,
    "v-footer": Footer
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
.el-header,
.el-main,
.el-footer {
  padding: 0 !important;
}
.el-footer {
  height: 186px !important;
  min-width: 1060px;
}
.el-main {
  min-width: 1060px;
  overflow: hidden;
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
