<template>
  <div id="objectiveQuestions">
    <div class="objectiveQuestions">
      <h2 id="objectiveQuestionsTitle">客观题</h2>
      <el-tabs tab-position="left">
        <el-tab-pane
          :label="item3.contentTitle"
          v-for="item3 in all"
          :key="item3.id"
        >
          <div class="content">
            <h3>{{ item3.contentTitle }}</h3>

            <div
              class="objectiveQuestionsIn"
              v-for="(item2, j) in item3.objectiveQuestionsIn"
              :key="item2.id"
            >
              <!--<h4>{{ j + 1 }}.{{ item2.h4 }}</h4>
              <el-radio
                v-model="item2.radio"
                :label="i"
                v-for="(item, i) in item2.Options"
                :key="item.id"
                >{{ item.Value }}</el-radio
              >
              <span class="answerText" v-show="answerText"
                >正确答案为：{{ item2.answerText }}</span
              >-->
              <div class="objectiveQuestionsFiles">
                <h4>
                  <span v-show="!answerText">题目</span
                  ><span v-show="answerText">答案</span>{{ j + 1 }}：
                </h4>
                <img :src="item2.Files" alt="" v-show="!answerText" />
                <img :src="item2.Files2" alt="" v-show="answerText" />
              </div>
            </div>

            <div class="answerBtn">
              <el-button @click="answer">答案</el-button>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "ObjectiveQuestions",
  data() {
    return {
      answerText: false,
      all: [
        {
          id: 1,
          contentTitle: "章节一 蔡徐坤",
          objectiveQuestionsIn: [
            {
              /*id: 1,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "一" },
                { id: 2, Value: "选er" },
                { id: 3, Value: "选s" },
                { id: 4, Value: "项4" }
              ],
              answerText: "C",
              radio: "1"*/
              id: 1,
              Files:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3698881779,3182004483&fm=26&gp=0.jpg",
              Files2:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575947467700&di=23e3b8ca4354d463728175cff0fcc43b&imgtype=0&src=http%3A%2F%2Fdfiles.jiajiaoban.com%2Fimg%2F2018%2F02%2F01%2F105900_5a72827448152.jpg"
            },
            {
              id: 2,
              Files:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3698881779,3182004483&fm=26&gp=0.jpg",
              Files2:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575947467700&di=23e3b8ca4354d463728175cff0fcc43b&imgtype=0&src=http%3A%2F%2Fdfiles.jiajiaoban.com%2Fimg%2F2018%2F02%2F01%2F105900_5a72827448152.jpg"
            },
            {
              id: 3,
              Files:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3698881779,3182004483&fm=26&gp=0.jpg",
              Files2:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575947467700&di=23e3b8ca4354d463728175cff0fcc43b&imgtype=0&src=http%3A%2F%2Fdfiles.jiajiaoban.com%2Fimg%2F2018%2F02%2F01%2F105900_5a72827448152.jpg"
            }
          ]
        },
        {
          id: 2,
          contentTitle: "章节二 呃呃呃",
          objectiveQuestionsIn: [
            {
              id: 1,
              Files:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3698881779,3182004483&fm=26&gp=0.jpg",
              Files2:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575947467700&di=23e3b8ca4354d463728175cff0fcc43b&imgtype=0&src=http%3A%2F%2Fdfiles.jiajiaoban.com%2Fimg%2F2018%2F02%2F01%2F105900_5a72827448152.jpg"
            },
            {
              id: 2,
              Files:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3698881779,3182004483&fm=26&gp=0.jpg",
              Files2:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575947467700&di=23e3b8ca4354d463728175cff0fcc43b&imgtype=0&src=http%3A%2F%2Fdfiles.jiajiaoban.com%2Fimg%2F2018%2F02%2F01%2F105900_5a72827448152.jpg"
            },
            {
              id: 3,
              Files:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3698881779,3182004483&fm=26&gp=0.jpg",
              Files2:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575947467700&di=23e3b8ca4354d463728175cff0fcc43b&imgtype=0&src=http%3A%2F%2Fdfiles.jiajiaoban.com%2Fimg%2F2018%2F02%2F01%2F105900_5a72827448152.jpg"
            }
          ]
        },
      ]
    };
  },
  created() {},
  methods: {
    answer() {
      this.answerText = !this.answerText;
    },
    answerClose() {
      this.answerText = false;
    }
  },
  mounted() {
    document.getElementsByClassName("el-tabs__nav-wrap")[0].onclick = () => {
      //切换页关闭答案
      this.answerClose();
    };
  }
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->

<style lang="scss">
#objectiveQuestions {
  position: relative;
  background-color: rgba(247, 247, 247, 1);
  .objectiveQuestions {
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
          position: relative;
          padding: 0 50px;
          h3 {
            font-size: 28px;
            color: #333;
            text-align: center;
            padding: 40px 0;
            font-weight: normal;
          }
          .objectiveQuestionsIn {
            margin: 60px 0;
            h4 {
              font-size: 18px;
              color: #333;
              font-weight: normal;
              letter-spacing: 1px;
              line-height: 28px;
              padding-bottom: 6px;
            }
            .el-radio {
              width: 100%;
              height: 26px;
              line-height: 26px;
              padding: 5px;
              span {
                font-size: 18px;
              }
            }
            .answerText {
              line-height: 40px;
              font-size: 16px;
              color: #990000;
            }
            .objectiveQuestionsFiles img {
              width: 720px;
            }
            .objectiveQuestionsFiles2 img {
              width: 720px;
            }
          }
          .objectiveQuestionsIn:first-of-type {
            margin-top: 0;
          }
          .answerBtn {
            display: inline-block;
            text-align: center;
            width: 100%;
            bottom: 0;
            margin-bottom: 50px;
            button {
              width: 114px;
              height: 44px;
              background-color: #990000;
              border-radius: 5px;
              outline: none;
              border: none;
              transition: all 0.05s;
              padding: 0;
              span {
                font-size: 16px;
                color: #fff;
              }
            }
            button:hover {
              transition: all 0.05s;
              background-color: rgba(180, 0, 0, 1);
            }
            button:active {
              transition: all 0.05s;
              background-color: rgba(208, 0, 0, 1);
            }
          }
        }
      }
    }
  }
}
</style>
