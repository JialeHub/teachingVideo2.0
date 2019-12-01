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
              <h4>{{ j + 1 }}.{{ item2.h4 }}</h4>
              <el-radio
                v-model="item2.radio"
                :label="i"
                v-for="(item, i) in item2.Options"
                :key="item.id"
                >{{ item.Value }}</el-radio
              >
              <span class="answerText" v-show="answerText"
                >正确答案为：{{ item2.answerText }}</span
              >
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
              id: 1,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "一" },
                { id: 2, Value: "选er" },
                { id: 3, Value: "选s" },
                { id: 4, Value: "项4" }
              ],
              answerText: "C",
              radio: "1"
            },
            {
              id: 2,
              h4:
                "Google 的免费翻译服务可提供简体中文和的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "选项" },
                { id: 2, Value: "选er" },
                { id: 3, Value: "选s" },
                { id: 4, Value: "选项" }
              ],
              answerText: "B",
              radio: ""
            },
            {
              id: 3,
              h4:
                "Google 的免费翻译服务可提供简体中文和另外 100 多种语言之间的互、短语和网页内容。",
              Options: [
                { id: 1, Value: "项一" },
                { id: 2, Value: "选项er" },
                { id: 3, Value: "项s" },
                { id: 4, Value: "项4" }
              ],
              answerText: "A",
              radio: ""
            }
          ]
        },
        {
          id: 2,
          contentTitle: "章节二 卢本伟",
          objectiveQuestionsIn: [
            {
              id: 1,
              h4:
                "G供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "啊一" },
                { id: 2, Value: "选2r" },
                { id: 3, Value: "选ds" },
                { id: 4, Value: "选v4" }
              ],
              answerText: "A",
              radio: ""
            },
            {
              id: 2,
              h4:
                "Google 的免费翻译服务可提供简h言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "选项一" },
                { id: 2, Value: "rr" },
                { id: 3, Value: "选hs" },
                { id: 4, Value: "选a" }
              ],
              answerText: "B",
              radio: ""
            },
            {
              id: 3,
              h4:
                "Google 的免4提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "选b一" },
                { id: 2, Value: "选项er" },
                { id: 3, Value: "选es" },
                { id: 4, Value: "选项4" }
              ],
              answerText: "B",
              radio: ""
            }
          ]
        },
        {
          id: 3,
          contentTitle: "章节三 马云",
          objectiveQuestionsIn: [
            {
              id: 1,
              h4:
                "Google 的免费翻译服务可提r中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "选r" },
                { id: 2, Value: "选项c" },
                { id: 3, Value: "h" },
                { id: 4, Value: "选c4" }
              ],
              answerText: "A",
              radio: ""
            },
            {
              id: 2,
              h4:
                "Google 的免费翻译s简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "选dfb一" },
                { id: 2, Value: "选ber" },
                { id: 3, Value: "选mns" },
                { id: 4, Value: "选项4" }
              ],
              answerText: "D",
              radio: ""
            },
            {
              id: 3,
              h4:
                "Google 的免g语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "sd项一" },
                { id: 2, Value: "选dsr" },
                { id: 3, Value: "选项s" },
                { id: 4, Value: "选jk" }
              ],
              answerText: "B",
              radio: ""
            }
          ]
        }
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
