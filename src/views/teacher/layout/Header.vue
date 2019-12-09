<template>
  <div id="consoleHeader" :class="consoleHeader">
    <div class="headLeft">
      <div class="headLeftIcon" @click="Switch_isCollapseConsole">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconcaidan"></use>
        </svg>
      </div>
      <div class="headTitle">
        <h2>{{ headTitle }}</h2>
      </div>
    </div>
    <div class="headRight">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="50" :src="circleUrl" id="head_avatar"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            ><span @click="consolePersonalBtn">个人中心</span></el-dropdown-item
          >
          <el-dropdown-item
            ><span @click="exit">退出登录</span></el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import "@/icon/iconfont.js";
import { addClass, removeClass } from "@/utils/classManage";
import { removeToken, removeIdentity, removeUserPassword } from "@/utils/app";

export default {
  name: "ConsoleHeader",
  data() {
    return {
      circleUrl: require("../../../assets/images/userImg.png"),
      headTitle: this.$route.meta.name,
      consoleHeader: [""]
    };
  },
  methods: {
    exit() {
      removeToken();
      removeIdentity();
      removeUserPassword();
      this.$store.commit("user/SET_user");
      this.$store.commit("user/SET_isTeacherFlag", false);
      this.$router.push({ path: "/" });
    },
    consolePersonalBtn() {
      this.$router.push({ name: "consolePersonal" });
    },
    Switch_isCollapseConsole() {
      window.nav_this.isCollapse = !window.nav_this.isCollapse;
      console.log(this.$store.state.teacherLayout.consoleNav);
      if (window.nav_this.isCollapse === true) {
        removeClass(this.$store.state.teacherLayout.consoleNav, "navWidthOpen");
        addClass(this.$store.state.teacherLayout.consoleNav, "navWidthNoOpen");
        window.nav_this.consoleNavElMenu = ["navWidthNoOpen"];
        window.consoleMain_this.consoleMain = ["navWidthNoOpenL"];
        window.consoleHeader_this.consoleHeader = ["navWidthNoOpenL"];
        if (window.consolePersonal_this) {
          window.consolePersonal_this.editElDialog = ["navWidthNoOpenL"];
        }
        if (window.consoleHomework_this) {
          window.consoleHomework_this.HomeworkElDialog = ["navWidthNoOpenL"];
        }
        if (window.consoleEvaluate_this) {
          window.consoleEvaluate_this.EvaluateElDialog = ["navWidthNoOpenL"];
        }
        if (window.consoleStudents_this) {
          window.consoleStudents_this.StudentsElDialog = ["navWidthNoOpenL"];
        }
        if (window.consoleTeachingResources_this) {
          window.consoleTeachingResources_this.TeachingResourcesElDialog = [
            "navWidthNoOpenL"
          ];
        }
        //window.consoleHomework_this.HomeworkElDialog = ["navWidthNoOpenL"];
      } else {
        removeClass(
          this.$store.state.teacherLayout.consoleNav,
          "navWidthNoOpen"
        );
        addClass(this.$store.state.teacherLayout.consoleNav, "navWidthOpen");
        window.nav_this.consoleNavElMenu = ["navWidthOpen"];
        window.consoleMain_this.consoleMain = ["navWidthOpenL"];
        window.consoleHeader_this.consoleHeader = ["navWidthOpenL"];
        if (window.consoleHomework_this) {
          window.consoleHomework_this.HomeworkElDialog = ["navWidthOpenL"];
        }
        if (window.consolePersonal_this) {
          window.consolePersonal_this.editElDialog = ["navWidthOpenL"];
        }
        if (window.consoleEvaluate_this) {
          window.consoleEvaluate_this.EvaluateElDialog = ["navWidthOpenL"];
        }
        if (window.consoleStudents_this) {
          window.consoleStudents_this.StudentsElDialog = ["navWidthOpenL"];
        }
        if (window.consoleTeachingResources_this) {
          window.consoleTeachingResources_this.TeachingResourcesElDialog = [
            "navWidthOpenL"
          ];
        }
        //window.consoleHomework_this.HomeworkElDialog = ["navWidthOpenL"];
      }
    }
  },
  created() {
    window.consoleHeader_this = this;
  }
};
</script>

<style lang="scss">
@import "@/styles/config";

.el-dropdown-link {
  cursor: pointer;
  color: rgba(0, 0, 0, 1);
}
.el-icon-arrow-down {
  font-size: 12px;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}

#consoleHeader {
  height: 66px;
  z-index: 99999;
  position: fixed;
  top: 0;
  right: 0;
  left: $navWidth;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(150, 150, 150, 0.3);
  .headLeft {
    position: relative;
    padding-left: 1rem;
    height: 66px;
    line-height: 66px;
    display: inline-block;
    .headTitle {
      height: 66px;
      float: left;
      margin-left: 12px;
      display: inline-block;
      font-size: 16px;
      h2 {
        font-weight: normal;
      }
    }
    .headLeftIcon {
      height: 66px;
      float: left;
      top: 0;
      display: inline-block;
      svg {
        cursor: pointer;
        font-size: 30px;
        vertical-align: middle;
      }
    }
  }
  .headRight {
    display: inline-block;
    position: absolute;
    right: 2rem;
    top: 8px;
    cursor: pointer;
  }
}
</style>
<!-- 添加“scoped”属性以将css仅限于此组件 -->
