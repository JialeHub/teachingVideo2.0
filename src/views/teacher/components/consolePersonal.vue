<template>
  <div id="consolePersonal">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>个人信息</span>
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
      <div class="userIconBox">
        <el-avatar
          :size="150"
          :src="circleUrl"
          class="userIcon"
          v-show="!box1EditFlag"
        ></el-avatar>
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
          v-show="box1EditFlag"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" alt="" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <el-divider></el-divider>
      <el-form label-position="right" label-width="90px" :model="box1Edit">
        <el-form-item label="昵称：">
          <el-input
            v-model="box1Content.name"
            placeholder="请输入昵称"
            v-show="box1EditFlag"
          ></el-input>
          <span v-show="!box1EditFlag">{{ box1Edit.name }}</span>
        </el-form-item>
        <el-form-item label="手机号码：">
          <el-input
            v-model="box1Content.phone"
            placeholder="请输入手机号码"
            v-show="box1EditFlag"
          ></el-input>
          <span v-show="!box1EditFlag">{{ box1Content.phone }}</span>
        </el-form-item>
        <el-form-item label="用户邮箱：">
          <el-input
            v-model="box1Content.eMail"
            placeholder="请绑定邮箱"
            v-show="box1EditFlag"
            disabled
          ></el-input>
          <span v-show="!box1EditFlag">{{ box1Edit.eMail }}</span>
        </el-form-item>
      </el-form>
      <div class="userMsgBottom">
        <el-link :underline="false" @click="dialogVisibleMailOpen"
          >修改邮箱</el-link
        >
        <el-link :underline="false" @click="dialogVisiblePWOpen"
          >修改密码</el-link
        >
      </div>
    </el-card>
    <el-card class="box-card2">
      <div slot="header" class="clearfix ">
        <span>操作日志</span>
      </div>
      <div class="box2Msg">
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column
            prop="action"
            label="行为"
            sortable
            width="100px"
          ></el-table-column>
          <el-table-column
            prop="IP"
            label="IP"
            sortable
            align="center"
            header-align="center"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="日期"
            sortable
            align="center"
            header-align="center"
          ></el-table-column>
        </el-table>
      </div>
      <div class="box2PageSwitch">
        <div class="block pageSwitch">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next"
            :total="1400"
          >
          </el-pagination>
        </div>
      </div>
    </el-card>

    <el-dialog
      title="修改邮箱"
      :visible.sync="dialogVisibleMail"
      :modal-append-to-body="false"
      :class="editElDialog"
    >
      <el-form
        :model="dialogForm"
        label-position="right"
        label-width="120px"
        style="padding-right: 50px"
      >
        <el-form-item label="当前密码：" :label-width="formLabelWidth">
          <el-input
            show-password
            v-model="dialogForm.password"
            autocomplete="off"
            placeholder="请输入当前密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="新邮箱：" :label-width="formLabelWidth">
          <el-input
            v-model="dialogForm.newMail"
            autocomplete="off"
            placeholder="请输入新邮箱"
            class="newMailText"
          ></el-input>
          <el-button class="getCode">获取验证码</el-button>
        </el-form-item>
        <el-form-item label="验证码：" :label-width="formLabelWidth">
          <el-input
            v-model="dialogForm.code"
            autocomplete="off"
            placeholder="请输入邮箱验证码"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisibleMail = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisibleMail = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="修改密码"
      :visible.sync="dialogVisiblePW"
      :modal-append-to-body="false"
      :class="editElDialog"
    >
      <el-form
        :model="dialogForm"
        label-position="right"
        label-width="120px"
        style="padding-right: 50px"
      >
        <el-form-item label="旧密码：" :label-width="formLabelWidth">
          <el-input
            show-password
            v-model="dialogForm2.oldPassword"
            autocomplete="off"
            placeholder="请输入旧密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码：" :label-width="formLabelWidth">
          <el-input
            show-password
            v-model="dialogForm2.newPassword"
            autocomplete="off"
            placeholder="请输入新密码"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" :label-width="formLabelWidth">
          <el-input
            show-password
            v-model="dialogForm2.newPassword2"
            autocomplete="off"
            placeholder="请再次输入新密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisiblePW = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisiblePW = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "consolePersonal",
  data() {
    return {
      imageUrl: "",
      box1EditFlag: false,
      editElDialog: [""],
      formLabelWidth: "100px",
      dialogForm: {
        password: "",
        newMail: "",
        code: ""
      },
      dialogForm2: {
        oldPassword: "",
        newPassword: "",
        newPassword2: ""
      },
      dialogVisibleMail: false,
      dialogVisiblePW: false,
      box2Msg: "",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      box1Content: { name: "", eMail: "", phone: "" },
      box1Edit: { name: "", eMail: "", phone: "" },
      tableData: [
        { action: "登录", IP: "192.168.101.203", date: "2019-11-11 21:00:56" },
        { action: "登录", IP: "192.168.101.203", date: "2019-11-11 21:00:56" },
        { action: "登录", IP: "192.168.101.203", date: "2019-11-11 21:00:56" },
        { action: "登录", IP: "192.168.101.203", date: "2019-11-11 21:00:56" },
        { action: "登录", IP: "192.168.101.203", date: "2019-11-11 21:00:56" },
        { action: "登录", IP: "192.168.101.203", date: "2019-11-11 21:00:56" },
        { action: "登录", IP: "192.168.101.203", date: "2019-11-11 21:00:56" },
        { action: "登录", IP: "192.168.101.203", date: "2019-11-11 21:00:56" },
        { action: "登录", IP: "192.168.101.203", date: "2019-11-11 21:00:56" },
        { action: "登录", IP: "192.168.101.203", date: "2019-11-11 21:00:56" }
      ]
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt5M = file.size / 1024 / 1024 < 5;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt5M) {
        this.$message.error("上传头像图片大小不能超过 5MB!");
      }
      return isJPG && isLt5M;
    },
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
    dialogVisibleMailOpen() {
      this.dialogVisibleMail = true;
    },
    dialogVisiblePWOpen() {
      this.dialogVisiblePW = true;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  created() {
    window.consolePersonal_this = this;
  },
  mounted() {
    if (window.nav_this.isCollapse === true) {
      this.editElDialog = ["navWidthNoOpenL"];
    } else {
      this.editElDialog = ["navWidthOpenL"];
    }
  }
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
#consolePersonal {
  position: relative;
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
    line-height: 150px;
    text-align: center;
  }
  .avatar {
    width: 150px;
    height: 150px;
    display: block;
  }
  .el-dialog {
    width: 550px;
  }
  .newMailText {
    width: 230px;
    display: inline-block;
  }
  .getCode {
    float: right;
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
    width: 400px;
    .userMsgBottom {
      float: right;
      font-size: 16px;
      padding-bottom: 20px;
      a {
        color: #c72e30;
        margin-right: 1rem;
      }
      a:hover {
        color: #990000;
      }
    }
  }
  .userIconBox {
    text-align: center;
  }
  .box-card2 {
    vertical-align: top;
    position: absolute;
    display: inline-block;
    width: 50%;
    margin-left: 70px;
    .box2PageSwitch {
      margin-top: 20px;
      text-align: center;
      .pageSwitch {
        display: inline-block;
      }
    }
  }
}
</style>
