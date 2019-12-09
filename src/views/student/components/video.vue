<template>
  <div id="video">
    <div class="videoMain">
      <div class="back">
        <el-link :underline="false" :href="backUrl">
          <span class="el-icon-back"></span>
          <span>返回课程主页面</span>
        </el-link>
      </div>
      <div class="videoMainL">
        <div class="videoTitle">
          <span>{{ classTitle }}：{{ classValue }}</span>
        </div>
        <div class="videoWindow">
          <div class="v">
            <video
              src="../../../assets/videos/ai.webm"
              controls="controls"
            ></video>
          </div>
        </div>
      </div>
      <div class="videoMainR"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Video",
  data() {
    return {
      backUrl: "#/myCourse",
      classTitle: "章节一第一课时",
      classValue: "蔡徐坤的唱跳零基础入门"
    };
  },
  created() {},
  methods: {}
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
#video {
  position: relative;
  margin: 0;
  padding: 0;
  .videoMain {
    position: relative;
    margin-top: 20px;
    margin-left: 18px;
    height: 100%;
    .back {
      font-size: 16px;
      margin-top: 16px;
      color: #6b6b6b;
      a:hover {
        color: #990000;
      }
    }
    .videoMainL {
      display: inline-block;
      width: 75%;
      .videoTitle {
        font-size: 18px;
        margin-top: 16px;
      }
      .videoWindow {
        position: relative;
        margin-top: 16px;
        max-height: 66%;
        .v {
          video {
            width: 100%;
          }
        }
      }
    }
    .videoMainR {
      position: absolute;
      top: 0;
      right: 0;
      display: inline-block;
      width: 33%;
      height: 100%;
    }
  }
}
</style>
