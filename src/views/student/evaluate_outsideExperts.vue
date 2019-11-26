<template>
  <div id="evaluate_outsideExperts">
    <div class="evaluate_outsideExperts">
      <h2 id="evaluate_outsideExpertsTitle">校外专家评价</h2>
      <div class="evaluate_outsideExpertsMain">
        <div
          class="evaluate_outsideExpertsIn"
          v-for="(item, i) in evaluate_outsideExpertsIn"
          :key="item.id"
        >
          <h3>{{ i + 1 }}.{{ item.title }}</h3>
          <div class="evaluate_outsideExpertsInBox">
            <img :src="item.box" alt="未找到文件" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function getCookie(cookieName) {
  let cookieStr = unescape(document.cookie);
  let arr = cookieStr.split("; ");
  let cookieValue = "";
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].split("=");
    if (temp[0] === cookieName) {
      cookieValue = temp[1];
      break;
    }
  }
  return cookieValue;
}
export default {
  name: "Evaluate_outsideExperts",
  data() {
    return {
      evaluate_outsideExpertsIn: [
        {
          id: 1,
          title: "xxxx教授评价",
          box: require("../../assets/images/evaluate_outsideExpertsInBox.png")
        },
        {
          id: 2,
          title: "xxxx教授评价",
          box: require("../../assets/images/evaluate_outsideExpertsInBox.png")
        }
      ]
    };
  },
  created() {
    window.evaluate_outsideExperts_this = this;
    if (getCookie("userToken") === "") {
      window.location.href = "#/login";
    }
  },
  methods: {}
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->

<style lang="scss">
#evaluate_outsideExperts {
  position: relative;
  background-color: rgba(247, 247, 247, 1);
  padding: 60px 0;
  .evaluate_outsideExperts {
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
    .evaluate_outsideExpertsMain {
      .evaluate_outsideExpertsIn {
        padding-bottom: 92px;
        h3 {
          font-size: 24px;
          color: #333333;
          font-weight: normal;
          padding-bottom: 26px;
        }
        .evaluate_outsideExpertsInBox {
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
