<template>
  <div id="consoleIndex">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>课程简介</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          v-show="!box1EditFlag"
          @click="edit1Open"
          >编辑</el-button
        >
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          v-show="box1EditFlag"
          @click="edit1Close"
          >取消
        </el-button>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          v-show="box1EditFlag"
          @click="edit1Save"
          >更改
        </el-button>
      </div>
      <div class="content">
        <span v-show="!box1EditFlag">{{ box1Content }}</span>
        <span v-show="box1EditFlag">
          <el-input
            type="textarea"
            maxlength="200"
            :autosize="{ minRows: 8, maxRows: 10 }"
            placeholder="请输入内容"
            v-model="box1Edit"
          >
          </el-input>
        </span>
      </div>
    </el-card>
    <el-card class="box-card2">
      <div slot="header" class="clearfix">
        <span>老师简介</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          v-show="!box2EditFlag"
          @click="edit2Open"
          >编辑</el-button
        >
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          v-show="box2EditFlag"
          @click="edit2Close"
          >取消</el-button
        >
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          v-show="box2EditFlag"
          @click="edit2Save"
          >更改</el-button
        >
      </div>
      <div class="content">
        <div class="box2Img">
          <div class="demo-image__error" v-show="!box2EditFlag">
            <div class="block">
              <el-image></el-image>
            </div>
          </div>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            v-show="box2EditFlag"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" alt="" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="box2Content">
          <span v-show="!box2EditFlag">{{ box2Content }}</span>
          <span v-show="box2EditFlag">
            <el-input
              type="textarea"
              maxlength="200"
              :autosize="{ minRows: 9, maxRows: 10 }"
              placeholder="请输入内容"
              v-model="box2Edit"
              class="box2EditContentTextarea"
            >
            </el-input>
          </span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { homeApi } from "@/api/home";

export default {
  name: "consoleIndex",
  data() {
    return {
      box1Content: "",
      box2Content: "",
      box2ImgUrl: "",
      box1EditFlag: false,
      box2EditFlag: false,
      box1Edit: "",
      box2Edit: "",
      imageUrl: ""
    };
  },
  methods: {
    edit1Open() {
      this.box1EditFlag = true;
      this.box1Edit = this.box1Content;
    },
    edit1Close() {
      this.box1EditFlag = false;
    },
    edit1Save() {
      this.box1EditFlag = false;
      this.box1Content = this.box1Edit;
    },
    edit2Open() {
      this.box2EditFlag = true;
      this.box2Edit = this.box2Content;
    },
    edit2Close() {
      this.box2EditFlag = false;
    },
    edit2Save() {
      this.box2EditFlag = false;
      this.box2Content = this.box2Edit;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      //const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    }
  },
  created() {
    homeApi()
      .then(response => {
        this.box2Content = response.data.message.courseLeader;
        this.box2Edit = response.data.message.courseLeader;
        this.box1Content = response.data.message.courseIntroduction;
        this.box1Edit = response.data.message.courseIntroduction;
        if (response.data.message.photo) {
          this.box2ImgUrl = response.data.message.photo;
        }
      })
      .catch(error => {
        this.box1Content = " 获取失败 ";
        this.box2Content = " 获取失败 ";
        console.log(error);
      });
  }
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
#consoleIndex {
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
    height: 200px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  position: relative;
  .text {
    font-size: 14px;
  }
  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
  .box-card {
    display: inline-block;
    width: 35%;
    height: 350px;
  }
  .box-card2 {
    vertical-align: top;
    margin-left: 50px;
    display: inline-block;
    width: 50%;
    .el-card__body {
      padding: 0;
    }
    .content {
      width: 100%;

      .box2Img {
        display: inline-block;
        width: 150px;
        height: 200px;
        margin: 50px 20px;
        box-shadow: 0 0 2px rgba(150, 150, 150, 0.5);
      }
      .box2Content {
        position: relative;
        top: -4px;
        height: 200px;
        display: inline-block;
        width: 50%;
        .box2EditContentTextarea {
          width: 100%;
        }
      }
    }
  }
}
</style>
