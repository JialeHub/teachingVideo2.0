import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/student/components/home.vue";
import Login from "../views/student/login.vue";
import store from "../store/index";

Vue.use(VueRouter);

const routeConsole = [
  {
    path: "index",
    name: "consoleIndex",
    meta: {
      name: "首页",
      isTeacherFlag: true,
      icon: "el-icon-s-home"
    },
    component: () => import("../views/teacher/components/index.vue")
  },
  {
    path: "personal",
    name: "consolePersonal",
    component: () => import("../views/teacher/components/consolePersonal.vue"),
    meta: {
      name: "个人中心",
      isTeacherFlag: true,
      icon: "el-icon-s-custom"
    }
  },
  {
    path: "homework",
    name: "consoleHomework",
    meta: {
      name: "作业管理",
      isTeacherFlag: true,
      icon: "el-icon-notebook-2"
    },
    component: () => import("../views/teacher/components/homework.vue")
  },
  {
    path: "evaluate",
    name: "consoleEvaluate",
    meta: {
      name: "评价管理",
      isTeacherFlag: true,
      icon: "el-icon-chat-dot-round"
    },
    component: () => import("../views/teacher/components/evaluate.vue")
  },
  {
    path: "students",
    name: "consoleStudents",
    meta: {
      name: "学生管理",
      isTeacherFlag: true,
      icon: "el-icon-user-solid"
    },
    component: () => import("../views/teacher/components/students.vue")
  },
  {
    path: "teachingResources",
    name: "consoleTeachingResources",
    meta: {
      name: "教学资源管理",
      isTeacherFlag: true,
      icon: "el-icon-receiving"
    },
    component: () => import("../views/teacher/components/teachingResources.vue")
  },
  {
    path: "examinationQuestions",
    name: "consoleExaminationQuestions",
    meta: {
      name: "考试题库管理",
      isTeacherFlag: true,
      icon: "el-icon-files"
    },
    component: () =>
      import("../views/teacher/components/examinationQuestions.vue")
  },
  {
    path: "interaction",
    name: "consoleInteraction",
    meta: {
      name: "师生互动管理",
      isTeacherFlag: true,
      icon: "el-icon-s-comment"
    },
    component: () => import("../views/teacher/components/interaction.vue")
  }
];
const routes = [
  {
    path: "/",
    redirect: "home",
    meta: {
      name: "主页",
      isTeacherFlag: false
    }
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: {
      name: "首页",
      isTeacherFlag: false
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      name: "登录",
      isTeacherFlag: false
    }
  },
  {
    path: "/personal",
    name: "personal",
    component: () => import("../views/student/components/personal"),
    meta: {
      name: "个人页面",
      isTeacherFlag: false
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/student/components/register"),
    meta: {
      name: "注册",
      isTeacherFlag: false
    }
  },
  {
    path: "/learningRecord",
    name: "learningRecord",
    component: () => import("../views/student/components/learningRecord"),
    meta: {
      name: "我的学习",
      isTeacherFlag: false
    }
  },
  {
    path: "/myCourse",
    name: "myCourse",
    component: () => import("../views/student/components/myCourse"),
    meta: {
      name: "我的课程",
      isTeacherFlag: false
    }
  },
  {
    path: "/video",
    name: "video",
    component: () => import("../views/student/components/video"),
    meta: {
      name: "视频",
      isTeacherFlag: false
    }
  },
  {
    path: "/reply",
    name: "reply",
    component: () => import("../views/student/components/reply"),
    meta: {
      name: "回复",
      isTeacherFlag: false
    }
  },
  {
    path: "/discuss",
    name: "discuss",
    component: () => import("../views/student/components/discuss"),
    meta: {
      name: "讨论记录",
      isTeacherFlag: false
    }
  },
  {
    path: "/homework",
    name: "homework",
    component: () => import("../views/student/components/homework"),
    meta: {
      name: "作业提交",
      isTeacherFlag: false
    }
  },
  {
    path: "/courseware",
    name: "courseware",
    component: () => import("../views/student/components/courseware"),
    meta: {
      name: "教学课件",
      isTeacherFlag: false
    }
  },
  {
    path: "/videotape",
    name: "videotape",
    component: () => import("../views/student/components/videotape"),
    meta: {
      name: "教学录像",
      isTeacherFlag: false
    }
  },
  {
    path: "/selfTest",
    name: "selfTest",
    component: () => import("../views/student/components/selfTest"),
    meta: {
      name: "自测题",
      isTeacherFlag: false
    }
  },
  {
    path: "/teachingProgram",
    name: "teachingProgram",
    component: () => import("../views/student/components/teachingProgram"),
    meta: {
      name: "教学大纲",
      isTeacherFlag: false
    }
  },
  {
    path: "/objectiveQuestions",
    name: "objectiveQuestions",
    component: () => import("../views/student/components/objectiveQuestions"),
    meta: {
      name: "客观题",
      isTeacherFlag: false
    }
  },
  {
    path: "/subjectiveQuestions",
    name: "subjectiveQuestions",
    component: () => import("../views/student/components/subjectiveQuestions"),
    meta: {
      name: "主观题",
      isTeacherFlag: false
    }
  },
  {
    path: "/mockExam",
    name: "mockExam",
    component: () => import("../views/student/components/mockExam"),
    meta: {
      name: "模拟考场",
      isTeacherFlag: false
    }
  },
  {
    path: "/evaluate_outsideExperts",
    name: "evaluate_outsideExperts",
    component: () =>
      import("../views/student/components/evaluate_outsideExperts"),
    meta: {
      name: "校外专家评价",
      isTeacherFlag: false
    }
  },
  {
    path: "/evaluate_insideExperts",
    name: "evaluate_insideExperts",
    component: () =>
      import("../views/student/components/evaluate_insideExperts"),
    meta: {
      name: "校内专家评价",
      isTeacherFlag: false
    }
  },
  {
    path: "/evaluate_teacher",
    name: "evaluate_teacher",
    component: () => import("../views/student/components/evaluate_teacher"),
    meta: {
      name: "教师评价",
      isTeacherFlag: false
    }
  },
  {
    path: "/evaluate_student",
    name: "evaluate_student",
    component: () => import("../views/student/components/evaluate_student"),
    meta: {
      name: "学生评价",
      isTeacherFlag: false
    }
  },
  {
    path: "/console/",
    name: "console",
    redirect: "console/index",
    component: () => import("../views/teacherPart.vue"),
    meta: {
      name: "后台管理系统",
      isTeacherFlag: true
    },
    children: routeConsole
  }
];

store.commit("router/SET_routeConsole", routeConsole);

const router = new VueRouter({
  routes,
  linkActiveClass: "myActive" //设置激活类名用于修改样式
});

export default router;
