<template>
  <div id="evaluate_teacher">
    <div class="evaluate_teacher">
      <h2 id="evaluate_teacherTitle">教师评价</h2>
      <div class="evaluate_teacherMain">
        <div
          class="evaluate_teacherIn"
          v-for="(item, i) in evaluate_teacherIn"
          :key="item.id"
        >
          <h3>{{ i + 1 }}.{{ item.title }}</h3>
          <div class="evaluate_teacherInBox">
            <img :src="item.box" alt="未找到文件" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Evaluate_teacher",
  data() {
    return {
      evaluate_teacherIn: [
        {
          id: 1,
          title: "xxxx教授评价",
          box: require("../../../assets/images/evaluate_outsideExpertsInBox.png")
        },
        {
          id: 2,
          title: "xxxx教授评价",
          box: require("../../../assets/images/evaluate_outsideExpertsInBox.png")
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
#evaluate_teacher {
  position: relative;
  background-color: rgba(247, 247, 247, 1);
  padding: 60px 0;
  .evaluate_teacher {
    background-color: #fff;
    width: 1080px;
    margin: 0 auto;
    padding: 40px 56px 0;
    h2 {
      text-align: center;
      padding-bottom: 50px;
      font-size: 32px;
      color: #323232;
    }
    .evaluate_teacherMain {
      .evaluate_teacherIn {
        padding-bottom: 92px;
        h3 {
          font-size: 24px;
          color: #333333;
          font-weight: normal;
          padding-bottom: 26px;
        }
        .evaluate_teacherInBox {
          box-shadow: 0 0 5px 5px rgba(170, 170, 170, 0.4);
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
