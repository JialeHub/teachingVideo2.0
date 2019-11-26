<template>
  <div id="teachingProgram">
    <div class="teachingProgramMain">
      <el-container>
        <el-aside width="250px" ref="elMenu" id="elMenu">
          <div class="teachingProgramMainL">
            <el-row class="tac">
              <el-col :span="12">
                <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  :style="elMenuStyle"
                >
                  <el-menu-item index="1">
                    <span slot="title">导航一</span>
                  </el-menu-item>
                  <el-menu-item index="2">
                    <span slot="title">导航二</span>
                  </el-menu-item>
                  <el-menu-item index="3" disabled>
                    <span slot="title">导航三</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导航四</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导航四</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导航9四</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导航8四</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导航7四</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导航6四</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导航5四</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导航4</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导航3</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导航2</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导航1</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导2航</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导3航</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导4航</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">导5航</span>
                  </el-menu-item>
                  <el-menu-item index="4">
                    <span slot="title">最后</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>
          </div>
        </el-aside>
        <el-container>
          <el-header>
            <div class="teachingProgramTitle">
              <h2>教学大纲</h2>
            </div>
          </el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "TeachingProgram",
  data() {
    return {
      elMenuMB: 0,
      elMenuStyle: {
        marginBottom: 0 + "px"
      }
    };
  },
  created() {
    window.teachingProgram2_this = this;
  },
  watch: {
    elMenuMB: function() {
      //window.console.log(newValue);
      //let elMenu=document.getElementById("elMenu");
      //window.console.log(elMenu.scrollTop);
      //elMenu.scrollTop=elMenu.scrollTop+parseInt(newValue);
      //window.console.log(elMenu.scrollTop);
      //window.console.log(this.$refs.elMenu);
      //elMenu.scrollTop=newValue;
      //elMenu.pageYOffset+=newValue;
    }
  },
  methods: {
    btn() {
      //let _this=this.parentNode;
      //window.console.log(_this);
    }
  },
  mounted() {
    window.TPelMenuPB_this = this;
    $(window).scroll(function() {
      /*用JQ获取html滚动条位置*/
      let scrollTop = $(this).scrollTop(); //滚动条到顶部位置
      let scrollHeight = $(document).height(); //当前滚动条屏幕高度
      let windowHeight = $(this).height(); //
      let scrollBD = scrollHeight - scrollTop - windowHeight;
      if (scrollBD < 186) {
        //let elMenu=document.getElementById("elMenu");
        //elMenu.scrollTop=document.getElementById("elMenu").scrollTop;
        window.TPelMenuPB_this.elMenuStyle.marginBottom = 186 - scrollBD + "px";
        window.console.log(window.TPelMenuPB_this.elMenuStyle.marginBottom);
        document.getElementById("elMenu").scrollTop += 186 - scrollBD;
      }
    });
  }
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->

<style lang="scss">
#teachingProgram {
  position: relative;
  background-color: rgba(247, 247, 247, 1);
  .teachingProgramMain {
    width: 1080px;
    margin: 0 auto;
    .el-header {
      height: 100px !important;
      margin-left: 250px;
      color: #333;
      text-align: center;
      line-height: 100px;
      border: 1px solid #000;
      .teachingProgramTitle {
        text-align: center;
        h2 {
          color: #515151;
          font-size: 32px;
          padding-bottom: 30px;
        }
      }
    }

    .el-aside {
      position: fixed;
      padding-top: 150px;
      margin-top: -60px;
      height: 100%;
      color: #333;
      text-align: left;
      background-color: #fff;
      .teachingProgramMainL {
        .tac {
          .el-col {
            width: 100%;
            .el-menu {
              .el-menu-item {
              }
            }
          }
        }
      }
    }

    .el-main {
      height: 1200px;
      margin-left: 250px;
      min-width: 810px;
      color: #333;
      text-align: center;
      border: 1px solid #000;
    }

    .el-container {
    }
  }
}
</style>
