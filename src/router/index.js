import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/student/home.vue";
import Login from "../views/student/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/personal",
    name: "personal",
    component: () => import("../views/student/personal")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/student/register")
  },
  {
    path: "/learningRecord",
    name: "learningRecord",
    component: () => import("../views/student/learningRecord")
  },
  {
    path: "/myCourse",
    name: "myCourse",
    component: () => import("../views/student/myCourse")
  },
  {
    path: "/video",
    name: "video",
    component: () => import("../views/student/video")
  },
  {
    path: "/reply",
    name: "reply",
    component: () => import("../views/student/reply")
  },
  {
    path: "/replyBtn",
    name: "replyBtn",
    component: () => import("../views/student/reply")
  },
  {
    path: "/discuss",
    name: "discuss",
    component: () => import("../views/student/discuss")
  },
  {
    path: "/homework",
    name: "homework",
    component: () => import("../views/student/homework")
  },
  {
    path: "/courseware",
    name: "courseware",
    component: () => import("../views/student/courseware")
  },
  {
    path: "/videotape",
    name: "videotape",
    component: () => import("../views/student/videotape")
  },
  {
    path: "/selfTest",
    name: "selfTest",
    component: () => import("../views/student/selfTest")
  },
  {
    path: "/teachingProgram",
    name: "teachingProgram",
    component: () => import("../views/student/teachingProgram")
  },
  {
    path: "/objectiveQuestions",
    name: "objectiveQuestions",
    component: () => import("../views/student/objectiveQuestions")
  },
  {
    path: "/subjectiveQuestions",
    name: "subjectiveQuestions",
    component: () => import("../views/student/subjectiveQuestions")
  },
  {
    path: "/mockExam",
    name: "mockExam",
    component: () => import("../views/student/mockExam")
  },
  {
    path: "/evaluate_outsideExperts",
    name: "evaluate_outsideExperts",
    component: () => import("../views/student/evaluate_outsideExperts")
  },
  {
    path: "/evaluate_insideExperts",
    name: "evaluate_insideExperts",
    component: () => import("../views/student/evaluate_insideExperts")
  },
  {
    path: "/evaluate_teacher",
    name: "evaluate_teacher",
    component: () => import("../views/student/evaluate_teacher")
  },
  {
    path: "/evaluate_student",
    name: "evaluate_student",
    component: () => import("../views/student/evaluate_student")
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: "myActive" //设置激活类名用于修改样式
});

export default router;
