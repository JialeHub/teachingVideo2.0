<template>
  <div id="teachingProgram">
    <div class="teachingProgramMain">
      <h2 id="teachingProgramTitle">教育大纲</h2>
      <el-tabs tab-position="left">
        <el-tab-pane :label="item.title" v-for="item in all" :key="item.id"
          ><div class="content"><img :src="item.content" alt="" /></div
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeachingProgram",
  data() {
    return {
      all: [
        {
          id: 1,
          title: "概论",
          content: require("../../../assets/images/evaluate_outsideExpertsInBox.png")
        },
        {
          id: 2,
          title: "章节1",
          content: require("../../../assets/images/evaluate_outsideExpertsInBox.png")
        },
        {
          id: 3,
          title: "章节2",
          content: require("../../../assets/images/evaluate_outsideExpertsInBox.png")
        }
      ]
    };
  },
  created() {},
  methods: {}
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
    padding: 48px 0;
    h2 {
      text-align: center;
      padding-bottom: 40px;
      font-size: 32px;
      color: #323232;
    }
    .el-tabs {
      .el-tabs__header {
        margin-right: 64px;
        padding: 18px 0;
        background-color: #fff;
        .el-tabs__nav {
          .el-tabs__active-bar {
            display: none;
          }
          .el-tabs__item {
            height: 56px;
            width: 198px;
            font-size: 20px;
            text-align: center;
            line-height: 56px;
          }
          .el-tabs__item:hover {
            color: #990000;
          }
          .is-active {
            color: #990000;
          }
        }
        .el-tabs__nav-wrap::after {
          background-color: #fff;
        }
      }
      .el-tabs__content {
        height: 100%;
        background-color: #fff;
        .content {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
