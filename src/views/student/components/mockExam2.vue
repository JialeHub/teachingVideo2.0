<template>
  <div id="mockExam">
    <div class="mockExam">
      <h2 id="mockExamTitle">模拟考试</h2>
      <el-tabs tab-position="left">
        <el-tab-pane
          :label="item3.contentTitle"
          v-for="item3 in all"
          :key="item3.id"
        >
          <div class="content">
            <h3>{{ item3.contentTitle }}</h3>

            <div
              class="mockExamIn"
              v-for="(item21, j1) in item3.mockExamIn1"
              :key="item21.id"
            >
              <h4>{{ j1 + 1 }}.{{ item21.h4 }}</h4>
              <el-radio
                v-model="item21.radio"
                :label="i"
                v-for="(item, i) in item21.Options"
                :key="item.id"
                >{{ item.Value }}</el-radio
              >
              <span class="answerText" v-show="item21.answerTextBtn"
                >正确答案为：{{ item21.answerText }}</span
              >
              <div class="answerBtn">
                <el-button @click="item21.answerTextBtn = !item21.answerTextBtn"
                  >答案</el-button
                >
              </div>
            </div>

            <div
              class="mockExamIn"
              v-for="(item2, j) in item3.mockExamIn"
              :key="item2.id"
            >
              <h4>{{ j + 1 }}.{{ item2.h4 }}</h4>
              <span class="answerText" v-show="item2.answerTextBtn"
                >正确答案为：{{ item2.answerText }}</span
              >
              <div class="answerBtn">
                <el-button @click="item2.answerTextBtn = !item2.answerTextBtn"
                  >答案</el-button
                >
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "MockExam",
  data() {
    return {
      all: [
        {
          id: 1,
          contentTitle: "章节一 蔡徐坤",
          mockExamIn1: [
            {
              id: 1,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "选项" },
                { id: 2, Value: "选er" },
                { id: 3, Value: "选s" },
                { id: 4, Value: "选项" }
              ],
              answerText: "B",
              radio: "",
              answerTextBtn: false
            },
            {
              id: 2,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "选项" },
                { id: 2, Value: "选er" },
                { id: 3, Value: "选s" },
                { id: 4, Value: "选项" }
              ],
              answerText: "V",
              radio: "",
              answerTextBtn: false
            },
            {
              id: 3,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "选项" },
                { id: 2, Value: "选er" },
                { id: 3, Value: "选s" },
                { id: 4, Value: "选项" }
              ],
              answerText: "B",
              radio: "",
              answerTextBtn: false
            }
          ],
          mockExamIn: [
            {
              id: 1,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              answerText:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容",
              answerTextBtn: false
            },
            {
              id: 2,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              answerText:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容",
              answerTextBtn: false
            },
            {
              id: 3,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              answerText:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容",
              answerTextBtn: false
            }
          ]
        },
        {
          id: 2,
          contentTitle: "章节一 蔡徐坤",
          mockExamIn1: [
            {
              id: 1,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "选项" },
                { id: 2, Value: "选er" },
                { id: 3, Value: "选s" },
                { id: 4, Value: "选项" }
              ],
              answerText: "B",
              radio: "",
              answerTextBtn: false
            },
            {
              id: 2,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "选项" },
                { id: 2, Value: "选er" },
                { id: 3, Value: "选s" },
                { id: 4, Value: "选项" }
              ],
              answerText: "V",
              radio: "",
              answerTextBtn: false
            },
            {
              id: 3,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "选项" },
                { id: 2, Value: "选er" },
                { id: 3, Value: "选s" },
                { id: 4, Value: "选项" }
              ],
              answerText: "B",
              radio: "",
              answerTextBtn: false
            }
          ],
          mockExamIn: [
            {
              id: 1,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              answerText:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容",
              answerTextBtn: false
            },
            {
              id: 2,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              answerText:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容",
              answerTextBtn: false
            },
            {
              id: 3,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              answerText:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容",
              answerTextBtn: false
            }
          ]
        },
        {
          id: 3,
          contentTitle: "章节一 蔡徐坤",
          mockExamIn1: [
            {
              id: 1,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "选项" },
                { id: 2, Value: "选er" },
                { id: 3, Value: "选s" },
                { id: 4, Value: "选项" }
              ],
              answerText: "B",
              radio: "",
              answerTextBtn: false
            },
            {
              id: 2,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "选项" },
                { id: 2, Value: "选er" },
                { id: 3, Value: "选s" },
                { id: 4, Value: "选项" }
              ],
              answerText: "V",
              radio: "",
              answerTextBtn: false
            },
            {
              id: 3,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              Options: [
                { id: 1, Value: "选项" },
                { id: 2, Value: "选er" },
                { id: 3, Value: "选s" },
                { id: 4, Value: "选项" }
              ],
              answerText: "B",
              radio: "",
              answerTextBtn: false
            }
          ],
          mockExamIn: [
            {
              id: 1,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              answerText:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容",
              answerTextBtn: false
            },
            {
              id: 2,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              answerText:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容",
              answerTextBtn: false
            },
            {
              id: 3,
              h4:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容。",
              answerText:
                "译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容译服务可提供简体中文和另外 100 多种语言之间的互译功能,可让您即时翻译字词、短语和网页内容",
              answerTextBtn: false
            }
          ]
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
#mockExam {
  position: relative;
  background-color: rgba(247, 247, 247, 1);
  .mockExam {
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
          .mockExamIn {
            margin: 0 0;
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
          .mockExamIn:first-of-type {
            margin-top: 0;
          }
          .answerBtn {
            display: inline-block;
            text-align: left;
            width: 100%;
            bottom: 0;
            margin-bottom: 50px;
            button {
              width: 100px;
              height: 36px;
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
