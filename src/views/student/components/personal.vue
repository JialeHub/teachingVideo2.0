<template>
  <div id="personal">
    <div class="personalMain">
      <div class="personalMainBox">
        <div class="personalMainBoxP1">
          <div class="personalMsgTitle">
            <span>基本信息</span>
            <span class="editMsgOpen" @click="editOpen">{{
              editMsgOpenMsg
            }}</span>
          </div>
          <div class="personalMsg1">
            <div class="personalMsgName">
              <span>昵称</span>
            </div>
            <div class="personalMsgNameInput">
              <el-input
                v-model="personalMsgName"
                placeholder="请输入昵称..."
                :disabled="!editMsgFlag"
              ></el-input>
            </div>
          </div>
          <div class="personalMsg2">
            <div class="personalMsgImgSpan">
              <span>头像</span>
            </div>

            <div class="personalMsgImg">
              <img :src="personalMsgImgSrc" alt="" v-if="!editPhotoFlag" />
              <el-upload
                v-if="editPhotoFlag"
                class="avatar-uploader"
                :auto-upload="true"
                action="http://129.204.189.149:8089/person/Edit"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" alt="" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>

            <div class="personalMsgImgR">
              <div class="personalMsgImgSrcRText" v-if="editMsgFlag">
                支持jpg 、gif或png格式的图片，建议文件小于20Mb
              </div>
              <div class="personalMsgImgRButton" v-if="editMsgFlag">
                <el-button @click="imgEdit">{{ editPhotoMsg }}</el-button>
              </div>
            </div>
          </div>
          <div class="personalMsg3">
            <div class="personalMsgGenderSpan">
              <span>性别</span>
              <span v-if="!editMsgFlag" class="personalMsgGenderSpanIn">{{
                personalMsgGenderFont
              }}</span>
            </div>
            <div class="personalMsgGenderR" v-if="editMsgFlag">
              <el-radio v-model="personalMsgGender" label="1">男</el-radio>
              <el-radio v-model="personalMsgGender" label="2">女</el-radio>
              <el-radio v-model="personalMsgGender" label="3">保密</el-radio>
            </div>
          </div>
          <div class="personalMsg4">
            <div class="personalMsgIntroduceSpan">
              <span>个人介绍</span>
            </div>
            <div class="personalMsgIntroduceR">
              <el-input
                type="textarea"
                :rows="6"
                maxlength="80"
                show-word-limit
                placeholder="用一段话介绍你自己，会在你的个人页面示，最多输入80字..."
                v-model="personalMsgIntroduce"
                :disabled="!editMsgFlag"
              >
              </el-input>
            </div>
          </div>
        </div>
        <div class="personalMainBoxP3" v-if="editMsgFlag">
          <div class="saveButton">
            <el-button @click="save">保 存</el-button>
          </div>
        </div>
        <div class="personalMainBoxP2">
          <div class="electiveCourse">
            <div class="electiveCourseTitle">
              <span>我的选课</span>
            </div>
            <div
              class="electiveCourseMain"
              v-for="item in electiveCourse"
              :key="item.id"
            >
              <div class="electiveCourseBox">
                <router-link to="./myCourse">
                  <div class="electiveCourse">
                    <div class="electiveCourseImg">
                      <img :src="item.img" alt="" />
                    </div>
                    <div class="electiveCourseTitle">
                      <span>{{ item.title }}</span>
                    </div>
                    <div class="electiveCourseText">
                      <span class="electiveCourseTeacherTitle"
                        >主讲老师：{{ item.teacher }}</span
                      >
                      <span class="electiveCourseNum"
                        ><i class="el-icon-s-custom"></i>
                        {{ item.num }} 学习</span
                      >
                    </div>
                  </div>
                </router-link>
                <div class="electiveCourseDel">
                  <el-button @click="electiveCourseDel">删 除</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPersonal } from "@/api/personal";
import { getUserName } from "@/utils/app";
import { postPersonal } from "@/api/personal";
export default {
  name: "Home",
  data() {
    return {
      editMsgOpenMsg: "编辑",
      editMsgFlag: false,
      editPhotoMsg: "更换头像",
      editPhotoFlag: false,
      personalMsgName: "",
      personalMsgImgSrc: require("../../../assets/images/personalMsgImg.png"),
      imageUrl: "",
      personalMsgGender: "3",
      personalMsgGenderFont: "保密",
      personalMsgIntroduce: "",
      electiveCourse: [
        {
          id: 1,
          img: require("../../../assets/images/electiveCourseImg.png"),
          teacher: "蔡徐坤",
          num: "100",
          title: "蔡徐坤的篮球第一章"
        }
      ]
    };
  },
  created() {
    let data = getUserName();
    console.log(this.$store.state.user.userIcon);
    console.log(this.$store.state.user.userIcon);
    console.log(this.$store.state.user.userIcon);
    getPersonal(data)
      .then(response => {
        console.log(response.data.message.personInformation);
        this.personalMsgName = response.data.message.personInformation.name;
        this.personalMsgImgSrc = response.data.message.personInformation.photo;
        this.personalMsgGender = response.data.message.personInformation.sex;
        this.personalMsgIntroduce =
          response.data.message.personInformation.introduce;
        if (this.personalMsgGender === "1") {
          this.personalMsgGenderFont = "男";
        }
        if (this.personalMsgGender === "2") {
          this.personalMsgGenderFont = "女";
        }
        if (this.personalMsgGender === "3") {
          this.personalMsgGenderFont = "保密";
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || "image/png";
      const isLt5M = file.size / 1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt5M) {
        this.$message.error("上传头像图片大小不能超过 5MB!");
      }
      return isJPG && isLt5M;
    },

    imgEdit: function() {
      this.editPhotoFlag = !this.editPhotoFlag;
      this.editPhotoFlag === false
        ? (this.editPhotoMsg = "更换头像")
        : (this.editPhotoMsg = "取消更改");
    },
    electiveCourseDel: function() {
      alert("没对接上");
    },
    editOpen() {
      this.editMsgFlag = !this.editMsgFlag;
      if (this.editMsgFlag === true) {
        this.editMsgOpenMsg = "取消编辑";
      } else {
        this.editMsgOpenMsg = "编辑";
        this.editPhotoMsg = "更换头像";
        this.editPhotoFlag = false;
        this.$router.go(0);
      }
    },
    save: function() {
      this.editPhotoFlag = false;
      this.editMsgFlag = false;
      this.editMsgOpenMsg = "编辑";
      let data = {
        username: this.username,
        name: this.name,
        sex: this.personalMsgGender,
        introduce: this.introduce
      };
      postPersonal(data)
        .then(response => {
          console.log(response.data.message);
        })
        .catch(error => {
          console.log(error);
        });
      this.$router.go(0);
    }
  }
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
.el-input.el-input--medium.is-disabled,
.el-textarea.el-input--medium.is-disabled {
  background-color: rgba(255, 255, 255, 0) !important;
  input,
  textarea {
    color: #000000 !important;
    cursor: default;
    resize: none;
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 150px;
  height: 150px;
  display: block;
}
#personal {
  position: relative;
  background-color: rgba(247, 247, 247, 1);
  padding-top: 40px;
  padding-bottom: 100px;
  .personalMain {
    position: relative;
    width: 1120px;
    margin: 0 auto;
    .personalMainBox {
      position: relative;
      width: 100%;
      background-color: #fff;
      padding-top: 84px;
      .personalMainBoxP1 {
        margin-left: 54px;
        .personalMsgTitle {
          font-size: 26px;
          color: #333333;
          margin-bottom: 46px;
          margin-left: 20px;
          .editMsgOpen {
            font-size: 14px;
            margin-left: 20px;
            cursor: pointer;
            color: #880000;
          }
        }
        .personalMsg1 {
          margin-left: 68px;
          .personalMsgName {
            display: inline-block;
            color: #6b6b6b;
            font-size: 20px;
            vertical-align: middle;
          }
          .personalMsgNameInput {
            display: inline-block;
            margin-left: 32px;
            vertical-align: middle;
            .el-input {
              border: none;
              .el-input__inner {
                width: 288px;
                height: 30px;
                font-size: 14px;
                outline: none;
                border-radius: 0;
                color: rgb(0, 0, 0);
                padding: 1px 8px;
              }
            }
          }
        }
        .personalMsg2 {
          display: inline-block;
          padding-top: 40px;
          padding-bottom: 20px;
          margin-left: 68px;
          .personalMsgImgSpan {
            position: relative;
            top: 10px;
            vertical-align: top;
            display: inline-block;
            color: #6b6b6b;
            font-size: 20px;
          }
          .personalMsgImg {
            display: inline-block;
            width: 150px;
            height: 150px;
            margin-left: 32px;
            vertical-align: top;
            box-shadow: 0 0 5px rgba(150, 150, 150, 0.5);
            img {
              width: 100%;
              height: 100%;
            }
          }
          .personalMsgImgR {
            display: inline-block;
            margin-left: 32px;
            .personalMsgImgSrcRText {
              color: #a1a1a1;
              font-size: 14px;
            }
            .personalMsgImgRButton {
              margin-top: 18px;
              button {
                width: 104px;
                height: 40px;
                background-color: #990000;
                outline: none;
                border: none;
                span {
                  font-size: 14px;
                  color: #fff;
                }
              }
              button:active {
                background-color: #d54a4e;
              }
            }
          }
        }
        .personalMsg3 {
          padding-top: 40px;
          margin-left: 68px;
          line-height: 22px;
          .personalMsgGenderSpan {
            top: -40px;
            display: inline-block;
            color: #6b6b6b;
            font-size: 20px;
            vertical-align: middle;
            .personalMsgGenderSpanIn {
              margin-left: 30px;
            }
          }
          .personalMsgGenderR {
            display: inline-block;
            margin-left: 32px;

            .el-radio__inner {
              width: 20px;
              height: 20px;
            }
            .el-radio__label {
              font-size: 16px;
            }
          }
        }
        .personalMsg4 {
          padding-top: 40px;
          margin-left: 28px;
          .personalMsgIntroduceSpan {
            top: -40px;
            display: inline-block;
            color: #6b6b6b;
            font-size: 20px;
            vertical-align: top;
          }
          .personalMsgIntroduceR {
            width: 504px;
            height: 150px;
            display: inline-block;
            margin-left: 32px;
            .el-textarea__inner {
              color: rgb(0, 0, 0);
              max-height: 150px;
            }
          }
        }
      }
      .personalMainBoxP2 {
        padding-bottom: 80px;
        margin-top: 36px;
        margin-left: 54px;
        .electiveCourse {
          .electiveCourseTitle {
            margin-bottom: -20px;
            font-size: 26px;
            color: #333333;
          }
          .electiveCourseMain {
            width: 350px;
            display: inline-block;
            position: relative;
            .electiveCourseBox {
              position: relative;
              display: inline-block;
              margin-top: 56px;
              margin-left: 100px;
              height: 258px;
              .electiveCourse {
                position: relative;
                width: 254px;
                height: 211px;
                border: 1px solid rgba(215, 215, 215, 1);
                border-radius: 10px;
                .electiveCourseImg {
                  position: relative;
                  width: 256px;
                  height: 145px;
                  img {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    left: -1px;
                    top: -1px;
                  }
                }
                .electiveCourseTitle {
                  color: #6b6b6b;
                  font-size: 20px;
                  margin-top: 10px;
                  margin-left: 14px;
                }
                .electiveCourseText {
                  position: absolute;
                  width: 100%;
                  bottom: 6px;
                  font-size: 14px;
                  .electiveCourseTeacherTitle {
                    margin-left: 14px;
                    color: #bcbcbc;
                    font-size: 14px;
                  }
                  .electiveCourseNum {
                    position: absolute;
                    right: 26px;
                    color: #c72e30;
                    i {
                      color: #bcbcbc;
                    }
                  }
                }
              }
              .electiveCourseDel {
                width: 100%;
                margin-top: 12px;
                text-align: right;
                button {
                  display: inline-block;
                  width: 90px;
                  height: 33px;
                  background-color: #990000;
                  outline: none;
                  border: none;
                  padding: 0;
                  span {
                    font-size: 13px;
                    color: #fff;
                  }
                }
                button:active {
                  background-color: #d54a4e;
                }
              }
            }
            .electiveCourseBox:nth-child(3n-2) {
              margin-left: 0;
            }
          }
        }
      }
      .personalMainBoxP3 {
        margin-top: 40px;
        padding-bottom: 30px;
        .saveButton {
          display: inline-block;
          margin-left: 36rem;
          button {
            width: 128px;
            height: 48px;
            background-color: #990000;
            outline: none;
            border: none;
            span {
              font-size: 18px;
              color: #fff;
            }
          }
          button:active {
            background-color: #d54a4e;
          }
        }
      }
    }
  }
}
</style>
