<template>
  <div id="register">
    <div class="register_box">
      <div class="register_boxIn" @keyup.enter="register">
        <div class="register_boxIn0">
          <span>学生注册</span>
        </div>
        <div class="register_boxIn1">
          <el-input v-model="username" placeholder="请输入学号"></el-input>
        </div>
        <div class="register_boxIn1l">
          <el-input placeholder="请输入班级" v-model="classRoom"></el-input>
        </div>
        <div class="register_boxIn1r">
          <el-input v-model="name" placeholder="请输入真实姓名"></el-input>
        </div>
        <div class="register_boxIn1">
          <el-input placeholder="请输入手机号码" v-model="phone"></el-input>
        </div>
        <div class="register_boxIn1">
          <el-input
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
        </div>
        <div class="register_boxIn1">
          <el-input
            placeholder="请再次确认密码"
            v-model="password2"
            show-password
          ></el-input>
        </div>
        <div class="register_boxIn5">
          <el-button @click="register">注 册</el-button>
        </div>
        <div class="loginLink">
          <el-link href="./#/login" :underline="false">去登录</el-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { registerApi } from "@/api/register";
export default {
  name: "Register",
  data() {
    return {
      username: this.username,
      password: this.password,
      password2: this.password2,
      name: this.name,
      classRoom: this.classRoom,
      StudentID: this.StudentID,
      phone: this.phone,
      dialogVisible: false,
      messageBox: ""
    };
  },
  created() {},
  methods: {
    openMsg(msg, callback) {
      this.$alert(msg, "提示", {
        confirmButtonText: "确定",
        callback
      });
    },
    open2() {
      this.$message({
        message: "密码不一致",
        type: "error",
        offset: 80
      });
    },
    register: function() {
      if (this.password !== this.password2) {
        this.open2();
      } else {
        let data = {
          username: this.username,
          password: this.password,
          name: this.name,
          classRoom: this.classRoom,
          StudentID: this.username,
          phone: this.phone
        };
        registerApi(data)
          .then(response => {
            if (response.data.status === 303) {
              const msgCallback = () => {
                this.$router.push({ name: "login" });
              };
              this.openMsg(response.data.message, msgCallback);
            } else {
              this.openMsg(response.data.message);
            }
            console.log(response);
          })
          .catch(error => {
            this.openMsg("网络错误");
            console.log(error);
          });
      }
    }
  }
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
#register {
  position: relative;
  min-width: 1060px;
  height: 680px;
  background-color: rgba(247, 247, 247, 1);
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
  .register_box {
    position: absolute;
    width: 1060px;
    height: 500px;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.35);
    top: 50%;
    margin-top: -250px;
    left: 50%;
    margin-left: -530px;
    .register_boxIn {
      width: 470px;
      height: 100%;
      margin: 0 auto;
      position: relative;
      .el-input__inner {
        height: 44px;
        font-size: 14px;
        outline-style: none;
      }
      .el-button {
        margin-top: 16px;
        width: 100%;
        height: 46px;
        background-color: #990000;
        border: none;
        color: #fff;
        font-size: 20px;
      }
      .el-button:active {
        background-color: rgba(213, 74, 78, 1);
      }
      .register_boxIn0 {
        font-size: 24px;
        color: #333333;
        margin: 36px 0 16px 5px;
      }
      .register_boxIn1 {
        color: #333333;
        margin-top: 14px;
        margin-left: 5px;
      }
      .register_boxIn1l {
        display: inline-block;
        width: 45%;
        font-size: 24px;
        color: #333333;
        margin-top: 14px;
        margin-left: 5px;
      }
      .register_boxIn1r {
        position: absolute;
        display: inline-block;
        width: 45%;
        font-size: 24px;
        color: #333333;
        margin-top: 14px;
        right: 0;
      }
      .loginLink {
        margin-top: 20px;
        display: inline-block;
        position: absolute;
        right: 0;
        line-height: 23px;
        a {
          color: #990000;
        }
      }
    }
  }
}
</style>
