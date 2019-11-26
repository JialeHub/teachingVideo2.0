<template>
  <div id="learningRecord">
    <div class="learningRecordTop">
      <div class="learningRecordTopL">
        <div class="learningRecordTopImg">
          <router-link to="/personal">
            <el-avatar :size="100" :src="userImg"></el-avatar>
          </router-link>
        </div>
      </div>
      <div class="learningRecordTopR">
        <div class="learningRecordTopRT">
          <span>{{ userName }}</span>
        </div>
        <div class="learningRecordTopRB">
          <span>{{ signature }}</span>
        </div>
      </div>
    </div>
    <div class="learningRecordOuter">
      <div class="learningRecord">
        <div class="learningRecordTitle">
          <span>学习记录</span>
        </div>
        <div
          class="learningRecordMain"
          v-for="item in learningRecord"
          :key="item.id"
        >
          <div class="learningRecordBox">
            <router-link to="./myCourse">
              <div class="learningRecordIn">
                <div class="learningRecordImg">
                  <img :src="item.img" alt="" />
                </div>
                <div class="learningRecordInTitle">
                  <span>{{ item.title }}</span>
                </div>
                <div class="learningRecordText">
                  <span class="learningRecordTeacherTitle"
                    >主讲老师：{{ item.teacher }}</span
                  >
                  <span class="learningRecordNum"
                    ><i class="el-icon-s-custom"></i> {{ item.num }} 学习</span
                  >
                </div>
              </div>
            </router-link>
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
  name: "LearningRecord",
  data() {
    return {
      userImg: require("../../assets/images/userImg.png"),
      userName: "用户名",
      signature: "个性签名",
      learningRecord: [
        {
          id: 1,
          img: require("../../assets/images/learningRecordImg.png"),
          teacher: "蔡徐坤",
          num: "100",
          title: "蔡徐坤的篮球第一章"
        },
        {
          id: 1,
          img: require("../../assets/images/learningRecordImg.png"),
          teacher: "蔡徐坤",
          num: "100",
          title: "蔡徐坤的篮球第一章"
        },
        {
          id: 1,
          img: require("../../assets/images/learningRecordImg.png"),
          teacher: "蔡徐坤",
          num: "100",
          title: "蔡徐坤的篮球第一章"
        },
        {
          id: 1,
          img: require("../../assets/images/learningRecordImg.png"),
          teacher: "蔡徐坤",
          num: "100",
          title: "蔡徐坤的篮球第一章"
        },
        {
          id: 1,
          img: require("../../assets/images/learningRecordImg.png"),
          teacher: "蔡徐坤",
          num: "100",
          title: "蔡徐坤的篮球第一章"
        },
        {
          id: 1,
          img: require("../../assets/images/learningRecordImg.png"),
          teacher: "蔡徐坤",
          num: "100",
          title: "蔡徐坤的篮球第一章"
        },
        {
          id: 1,
          img: require("../../assets/images/learningRecordImg.png"),
          teacher: "蔡徐坤",
          num: "100",
          title: "蔡徐坤的篮球第一章"
        },
        {
          id: 1,
          img: require("../../assets/images/learningRecordImg.png"),
          teacher: "蔡徐坤",
          num: "100",
          title: "蔡徐坤的篮球第一章"
        }
      ]
    };
  },
  created() {
    window.learningRecord_this = this;
    if (getCookie("userToken") === "") {
      window.location.href = "#/login";
    }
  },
  methods: {}
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
#learningRecord {
  background-color: rgba(247, 247, 247, 1);
  width: 100%;
  .learningRecordTop {
    position: relative;
    width: 1107px;
    padding-top: 70px;
    margin: 0 auto;
    .learningRecordTopL {
      display: inline-block;
      vertical-align: top;
    }
    .learningRecordTopR {
      position: relative;
      display: inline-block;
      margin-left: 28px;
      margin-top: 8px;
      .learningRecordTopRT {
        font-size: 32px;
        color: #515151;
      }
      .learningRecordTopRB {
        margin-top: 4px;
        font-size: 18px;
        color: #868686;
      }
    }
  }

  .learningRecordOuter {
    margin: 0 auto;
    width: 1107px;
    padding: 55px 0 120px 0;
    box-sizing: content-box;
    .learningRecord {
      position: relative;
      .learningRecordTitle {
        margin-bottom: -40px;
        font-size: 24px;
        color: #333333;
      }
      .learningRecordMain {
        display: inline-block;
        width: 368px;
        position: relative;
        .learningRecordBox {
          position: relative;
          display: inline-block;
          margin-top: 70px;
          margin-left: 100px;
          height: 258px;
          .learningRecordIn {
            transition: all 0.35s;
            position: relative;
            width: 298px;
            height: 248px;
            border: 1px solid rgba(215, 215, 215, 1);
            background-color: #fff;
            border-radius: 10px;
            .learningRecordImg {
              position: relative;
              width: 300px;
              height: 170px;
              img {
                position: relative;
                width: 100%;
                height: 100%;
                left: -1px;
                top: -1px;
              }
            }
            .learningRecordInTitle {
              color: #6b6b6b;
              font-size: 20px;
              margin-top: 16px;
              margin-left: 14px;
            }
            .learningRecordText {
              position: absolute;
              width: 100%;
              bottom: 10px;
              font-size: 14px;
              .learningRecordTeacherTitle {
                margin-left: 14px;
                color: #bcbcbc;
                font-size: 14px;
              }
              .learningRecordNum {
                position: absolute;
                right: 26px;
                color: #c72e30;
                i {
                  color: #bcbcbc;
                }
              }
            }
          }
          .learningRecordIn:hover {
            transform: scale(1.1);
          }
        }
        .learningRecordBox:nth-child(3n-2) {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
