<template>
  <div id="head">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-t1"
      mode="horizontal"
      background-color="#434343"
      text-color="#fff"
      active-text-color="rgb(199, 46, 48)"
    >
      <h1 id="studentHeadH1">
        <a :href="logo_link"
          ><img src="../../../assets/images/logo_u57.png" alt="" id="logo"
        /></a>
      </h1>
      <el-menu-item index="1" @click="goHome">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">课程评价</template>
        <el-menu-item index="2-1" @click="goEvaluate_outsideExperts"
          >校外专家评价</el-menu-item
        >
        <el-menu-item index="2-2" @click="goEvaluate_insideExperts"
          >校内专家评价</el-menu-item
        >
        <el-menu-item index="2-3" @click="goEvaluate_teacher"
          >教师评价</el-menu-item
        >
        <el-menu-item index="2-4" @click="goEvaluate_student"
          >学生评价</el-menu-item
        >
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">考试平台</template>
        <el-menu-item index="3-1" @click="goObjectiveQuestions"
          >客观题</el-menu-item
        >
        <el-menu-item index="3-2" @click="goSubjectiveQuestions"
          >主观题</el-menu-item
        >
        <el-menu-item index="3-3" @click="goMockExam">模拟考场</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" @click="goDiscuss">师生互动</el-menu-item>
      <el-menu-item index="5" @click="goHomework">作业提交</el-menu-item>
      <el-submenu index="6">
        <template slot="title">教学资源</template>
        <el-menu-item index="6-1" @click="goCourseware">教学课件</el-menu-item>
        <el-menu-item index="6-2" @click="goVideotape">教学录像</el-menu-item>
        <el-menu-item index="6-3" @click="goSelfTest">自测题</el-menu-item>
        <el-menu-item index="6-4" @click="goTeachingProgram"
          >教学大纲</el-menu-item
        >
      </el-submenu>
      <el-menu-item index="0" id="menu_right_outer">
        <div id="menu_right">
          <span>
            <router-link to="./learningRecord" class="menu_right_a"
              >我的学习</router-link
            >
          </span>
          <span id="menu_right_line"> | </span>
          <span id="menu_right_userName">
            <router-link to="./login" class="menu_right_a">{{
              userName
            }}</router-link>
          </span>

          <!--<router-link to="/personal">
            <el-avatar :size="40" :src="circleUrl" id="head_avatar"></el-avatar>
          </router-link>-->

          <el-dropdown>
            <span class="el-dropdown-link">
              <el-avatar
                :size="40"
                :src="circleUrl"
                id="head_avatar"
              ></el-avatar>
            </span>
            <el-dropdown-menu slot="dropdown" v-if="userDropdown">
              <el-dropdown-item>
                <router-link to="/personal">
                  个人中心
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item
                ><div @click="exit">退出登录</div></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {
  removeToken,
  removeIdentity,
  removeUserPassword,
  getUserName,
  getUserIcon,
} from "@/utils/app";
export default {
  name: "Head",
  data() {
    return {
      userDropdown: false,
      activeIndex: "1",
      activeIndex2: "1",
      logo_link: "",
      circleUrl: getUserIcon(),
      sizeList: ["large", "medium", "small"],
      userName: getUserName()
    };
  },
  created() {
    window.head_this = this;
    this.userName = getUserName();
    this.userIcon = getUserIcon();
  },
  mounted() {
    this.userName = getUserName();
    this.userIcon = getUserIcon();
  },
  methods: {
    exit: function() {
      console.log("OK");
      removeToken();
      removeIdentity();
      removeUserPassword();
      this.$store.commit("user/SET_user");
      window.location.reload();
    },
    goHome() {
      this.$router.push({ name: "home" });
    },
    goDiscuss() {
      this.$router.push({ name: "discuss" });
    },
    goHomework() {
      this.$router.push({ name: "homework" });
    },
    goCourseware() {
      this.$router.push({ name: "courseware" });
    },
    goVideotape() {
      this.$router.push({ name: "videotape" });
    },
    goSelfTest() {
      this.$router.push({ name: "selfTest" });
    },
    goTeachingProgram() {
      this.$router.push({ name: "teachingProgram" });
    },
    goObjectiveQuestions() {
      this.$router.push({ name: "objectiveQuestions" });
    },
    goSubjectiveQuestions() {
      this.$router.push({ name: "subjectiveQuestions" });
    },
    goMockExam() {
      this.$router.push({ name: "mockExam" });
    },
    goEvaluate_outsideExperts() {
      this.$router.push({ name: "evaluate_outsideExperts" });
    },
    goEvaluate_insideExperts() {
      this.$router.push({ name: "evaluate_insideExperts" });
    },
    goEvaluate_teacher() {
      this.$router.push({ name: "evaluate_teacher" });
    },
    goEvaluate_student() {
      this.$router.push({ name: "evaluate_student" });
    }
  }
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
#head {
  z-index: 99999;
  min-width: 1060px;
  width: 100%;
  position: fixed;
  background-color: #434343;
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
  .el-menu.el-menu--horizontal {
    border-bottom: none !important;
  }
  #studentHeadH1 {
    margin: 0 !important;
    vertical-align: middle;
  }
  #menu_right_outer {
    float: right;
    border-bottom: none !important;
  }
  #menu_right_outer:hover {
    background-color: rgba(67, 67, 67, 1) !important;
  }
  #menu_right {
    display: inline;
    float: right;
    color: #fff;
    font-size: 14px;
    height: 50px;
    vertical-align: middle;
    //padding-top: 10px;
    .menu_right_a {
      color: #fff;
      font-size: 14px;
      vertical-align: middle;
    }
    .menu_right_a:hover {
      color: rgb(199, 46, 48);
    }
    #menu_right_line {
      margin: 0 8px 0 8px;
      vertical-align: middle;
    }
    #menu_right_userName {
      vertical-align: middle;
      margin-right: 14px;
    }
    #head_avatar {
      vertical-align: middle;
    }
  }
  #logo {
    text-align: center;
    float: left;
    max-width: 120px;
    max-height: 60px;
    margin-right: 10px;
  }
}
</style>
