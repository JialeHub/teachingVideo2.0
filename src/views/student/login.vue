<template>
  <div id="login">
    <div class="login_box">
      <div class="login_box_1">
        <img
          src="../../assets/images/logo_u57.png"
          alt="网维logo"
          class="login_box_1_Img"
        />
        <span class="login_box_1_Span">网维工作室</span>
      </div>
      <div class="login_box_2" @keyup.enter="login">
        <el-input v-model="account" placeholder="请输入账号"></el-input>
      </div>
      <div class="login_box_3" @keyup.enter="login">
        <el-input
          placeholder="请输入密码"
          v-model="password"
          show-password
        ></el-input>
      </div>
      <div class="login_box_4">
        <el-button @click="login">登 录</el-button>
      </div>
      <div class="login_box_5">
        <div class="rememberMe">
          <el-switch
            style="display: block"
            v-model="rememberMe"
            active-color="#BCBCBC"
            inactive-color="#BCBCBC"
            active-text="记住我"
          >
          </el-switch>
        </div>
        <div class="registerLink">
          <el-link href="./#/register" :underline="false">去注册</el-link>
        </div>
      </div>
    </div>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>{{ messageBox }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { loginApi } from "@/api/login";
import {
  getToken,
  getUserAccount,
  getUserPassword,
  setToken,
  setIdentity,
  setUserName,
  setUserAccount,
  setUserPassword,
  removeUserAccount,
  removeUserPassword
} from "@/utils/app";
export default {
  name: "Login",
  data() {
    return {
      account: "",
      password: "",
      rememberMe: false,
      dialogVisible: false,
      messageBox: ""
    };
  },
  created() {
    window.login_this = this;

    if (getToken()) {
      this.$router.push({ name: "personal" });
    }

    this.account = getUserAccount(); //若有记住账号则自动填充
    this.password = getUserPassword();

    if (this.password !== "") {
      //如果密码为空代表以前没记住我，保持默认
      this.rememberMe = true;
    }
  },
  methods: {
    open2() {
      this.$message({
        message: "用户名不存在",
        type: "error",
        offset: 80
      });
    },
    login() {
      if (this.account === "" || this.password === "") {
        this.$message({
          showClose: true,
          message: "账号或密码不能为空",
          type: "error",
          duration: 3000
        });
        return false;
      }
      let data = {
        username: this.account,
        password: this.password
      };
      loginApi(data)
        .then(response => {
          console.log(response);
          //处理Cookies
          setToken(response.data.token);
          setUserName(response.data.user.username);
          setUserAccount(this.account, 14);
          if (this.rememberMe === true) {
            setUserPassword(this.password, 14);
          } else {
            removeUserAccount();
            removeUserPassword();
          }
          //存进vuex
          this.$store.commit("user/SET_user");

          if (response.data.user.authorities[0].authority === "teacher") {
            setIdentity("teacher");
            this.$store.commit("user/SET_isTeacherFlag", true);
            this.$router.push({ name: "console" });
          } else {
            setIdentity("student");
            this.$store.commit("user/SET_isTeacherFlag", false);
            this.$router.push({ name: "home" });
          }
          this.$message({
            message: "登陆成功，欢迎您！" + response.data.user.username,
            type: "success",
            customClass: "loginMessage",
            center: true,
            duration: 3000
          });
        })
        .catch(error => {
          console.log(error.response);
          this.messageBox = error.response.data.message;
          this.dialogVisible = true;
        });
    }
  }
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
.loginMessage {
  top: 100px !important;
}
#login {
  position: relative;
  min-width: 1060px;
  height: 680px;
  background-color: rgba(247, 247, 247, 1);
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  user-select: none;

  .login_box {
    position: absolute;
    width: 1060px;
    height: 499px;
    background-color: rgba(255, 255, 255, 1);
    border: none;
    box-shadow: 1px 1px 40px rgba(0, 0, 0, 0.349019607843137);
    top: 50%;
    margin-top: -250px;
    left: 50%;
    margin-left: -530px;

    .el-input__inner {
      height: 44px;
    }

    .login_box_1 {
      position: absolute;
      top: 100px;
      text-align: center;
      width: 100%;
      height: 60px;

      .login_box_1_Img {
        display: inline-block;
        width: 108px;
        height: 59px;
        vertical-align: middle;
      }

      .login_box_1_Span {
        display: inline-block;
        position: relative;
        font-weight: 700;
        font-style: normal;
        font-size: 28px;
        color: #515151;
        vertical-align: middle;
      }

      .login_box_1_Span {
        font-family: "黑体 Bold", "黑体 Regular", "黑体", serif;
      }
    }

    .login_box_2 {
      position: absolute;
      width: 460px;
      height: 50px;
      top: 180px;
      left: 50%;
      margin-left: -230px;
    }

    .login_box_3 {
      position: absolute;
      width: 460px;
      height: 50px;
      top: 235px;
      left: 50%;
      margin-left: -230px;
    }

    .login_box_4 {
      position: absolute;
      top: 300px;
      left: 50%;
      margin-left: -230px;

      button {
        width: 460px;
        background-color: #990000;
        color: white;
        height: 57px;
        outline: none;
        border: none;
        font-size: 20px;
      }

      button:active {
        background-color: #d54a4e;
      }
    }

    .login_box_5 {
      position: absolute;
      top: 390px;
      left: 50%;
      margin-left: -230px;
      width: 460px;

      .registerLink {
        display: inline-block;
        vertical-align: middle;
        position: absolute;
        right: 0;
        line-height: 23px;

        a {
          color: #c72e30;
        }

        a:hover {
          color: #990000;
        }
      }

      .rememberMe {
        display: inline-block;
        width: 120px;
        height: 23px;
        vertical-align: middle;
      }

      .el-switch.is-checked .el-switch__core::after {
        margin-left: -30px !important;
        height: 23px;
      }

      .el-switch.is-checked .el-switch__core:after {
        content: "开";
      }

      .el-switch {
        span {
          color: #990000 !important;
          vertical-align: middle;
        }

        .el-switch__core {
          width: 60px !important;
          height: 23px;
          border-radius: 0;
          border: none;
          background-color: #bcbcbc;
          background-clip: content-box;
        }

        .el-switch__core:after {
          content: "关";
          color: white;
          line-height: 23px;
          top: 0;
          margin-left: -1px;
        }

        ::after {
          width: 30px !important;
          height: 23px;
          border-radius: 0;
          background-color: #c72e30;
          border: none;
          text-align: center;
        }
      }
    }
  }
}
</style>
