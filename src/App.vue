<template>
  <div id="app">
    <v-studentPart v-if="!this.$store.state.user.isTeacherFlag"></v-studentPart>
    <!--<v-teacherPart v-if="this.$store.state.user.isTeacherFlag"></v-teacherPart>-->
    <transition mode="out-in" v-if="this.$store.state.user.isTeacherFlag">
      <router-view><!--teacherPart--></router-view>
    </transition>
  </div>
</template>

<script>
import { getIdentity } from "@/utils/app";

export default {
  name: "app",
  components: {
    "v-studentPart": () => import("./views/studentPart.vue")
    //"v-teacherPart": () => import("./views/teacherPart.vue")
  },
  data() {
    return {};
  },
  created() {
    if (getIdentity() === "teacher") {
      this.$store.commit("user/SET_isTeacherFlag", true);
    }
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
