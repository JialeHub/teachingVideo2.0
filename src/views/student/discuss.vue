<template>
  <div id="discuss">
    <div class="discussMain">
      <div class="discussP1">
        <div class="question">
          <div class="questionTitle">
            <h2>提问记录</h2>
          </div>
          <div class="questionBox" v-for="item in all.question" :key="item.id">
            <div class="questionIn">
              <div class="questionTop">
                <div class="questionUserImg">
                  <el-avatar
                    :size="50"
                    :src="all.myUserImg"
                    id="head_avatar"
                  ></el-avatar>
                </div>
                <div class="questionTopR">
                  <div class="userName">
                    <span>{{ all.myName }}</span>
                  </div>
                  <div class="questionTime">
                    <span>{{ item.questionTime }}</span>
                  </div>
                </div>
              </div>
              <div class="questionText">
                <span>{{ item.questionText }}</span>
              </div>
              <div class="questionReply">
                <div
                  class="allReplyTitle"
                  @click="item.allReplyContentShow = !item.allReplyContentShow"
                >
                  <span>所有回复({{ item.allReply.length }}) </span>
                  <span
                    class="el-icon-caret-bottom"
                    v-show="!item.allReplyContentShow"
                  ></span>
                  <span
                    class="el-icon-caret-top"
                    v-show="item.allReplyContentShow"
                  ></span>
                </div>
                <div
                  class="allReplyContent"
                  v-show="item.allReplyContentShow"
                  v-for="item2 in item.allReply"
                  :key="item2.id"
                >
                  <div class="allReplyContentIn">
                    <div class="allReplyContentInL">
                      <div class="allReplyContentInLIng">
                        <el-avatar
                          :size="50"
                          :src="item2.allReplyUserImg"
                        ></el-avatar>
                      </div>
                    </div>
                    <div class="allReplyContentInR">
                      <div class="allReplyUserName">
                        <span>{{ item2.allReplyUserName }}</span>
                      </div>
                      <div class="allReplyTime">
                        <span>{{ item2.allReplyTime }}</span>
                      </div>

                      <div class="allReplyContent">
                        <span>{{ item2.allReplyContent }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="discussP2">
        <div class="myComment">
          <div class="myCommentTitle">
            <h2>评论记录</h2>
          </div>
          <div
            class="myCommentBox"
            v-for="itemB in all.otherQuestion"
            :key="itemB.id"
          >
            <div class="myCommentIn">
              <div class="otherQuestionTop">
                <div class="otherQuestionUserImg">
                  <el-avatar
                    :size="50"
                    :src="itemB.otherQuestionUserImg"
                  ></el-avatar>
                </div>
                <div class="otherQuestionTopR">
                  <div class="otherQuestionUserName">
                    <span>{{ itemB.otherQuestionUserName }}</span>
                  </div>
                  <div class="otherQuestionTime">
                    <span>{{ itemB.otherQuestionTime }}</span>
                  </div>
                </div>
              </div>
              <div class="otherQuestionText">
                <span>{{ itemB.otherQuestionText }}</span>
              </div>
              <div class="otherQuestionReply">
                <div class="myReplyTitle">
                  <span>我的回复({{ itemB.myReply.length }})</span>
                  <span class="el-icon-caret-bottom"></span>
                </div>
                <div
                  class="myReplyContent"
                  v-for="itemB2 in itemB.myReply"
                  :key="itemB2.id"
                >
                  <div class="myReplyContentIn">
                    <div class="myReplyContentInL">
                      <div class="myReplyContentInLIng">
                        <el-avatar :size="50" :src="all.myUserImg"></el-avatar>
                      </div>
                    </div>
                    <div class="myReplyContentInR">
                      <div class="myReplyUserName">
                        <span>{{ all.myName }}</span>
                      </div>
                      <div class="myReplyTime">
                        <span>{{ itemB2.myReplyTime }}</span>
                      </div>

                      <div class="myReplyContent">
                        <span>{{ itemB2.myReplyContent }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  name: "Discuss",
  data() {
    return {
      all: {
        myUserImg: require("../../assets/images/userImg.png"),
        myName: "我",
        question: [
          {
            id: 1,
            questionTime: "2019.11.11 00:00:01",
            questionText: "我怎么这么好看？",
            allReplyContentShow: false,
            allReply: [
              {
                id: 1,
                allReplyUserImg: require("../../assets/images/userImg.png"),
                allReplyUserName: "卢本伟",
                allReplyTime: "2019.11.11 00:00:02",
                allReplyContent: "对对"
              },
              {
                id: 2,
                allReplyUserImg: require("../../assets/images/userImg.png"),
                allReplyUserName: "卢本伟",
                allReplyTime: "2019.11.11 00:00:02",
                allReplyContent: "对对"
              },
              {
                id: 3,
                allReplyUserImg: require("../../assets/images/userImg.png"),
                allReplyUserName: "卢本伟",
                allReplyTime: "2019.11.11 00:00:02",
                allReplyContent: "对对"
              }
            ]
          },
          {
            id: 2,
            questionTime: "2019.11.11 00:00:01",
            questionText: "我怎么这么好看？",
            allReplyContentShow: false,
            allReply: [
              {
                id: 1,
                allReplyUserImg: require("../../assets/images/userImg.png"),
                allReplyUserName: "卢本伟",
                allReplyTime: "2019.11.11 00:00:02",
                allReplyContent: "对对"
              },
              {
                id: 2,
                allReplyUserImg: require("../../assets/images/userImg.png"),
                allReplyUserName: "卢本伟",
                allReplyTime: "2019.11.11 00:00:02",
                allReplyContent: "对对"
              }
            ]
          }
        ],
        otherQuestion: [
          {
            id: 1,
            otherQuestionUserImg: require("../../assets/images/userImg.png"),
            otherQuestionUserName: "蔡徐坤",
            otherQuestionTime: "2019.11.11 00:00:03",
            otherQuestionText: "我的篮球是不是很棒？",
            myReply: [
              {
                id: 1,
                myReplyTime: "2019.11.11 00:00:04",
                myReplyContent: "呵呵呵"
              },
              {
                id: 2,
                myReplyTime: "2019.11.11 00:00:04",
                myReplyContent: "呵呵呵"
              }
            ]
          },
          {
            id: 2,
            otherQuestionUserImg: require("../../assets/images/userImg.png"),
            otherQuestionUserName: "蔡徐坤",
            otherQuestionTime: "2019.11.11 00:00:03",
            otherQuestionText: "我的篮球是不是很棒？",
            myReply: [
              {
                id: 1,
                myReplyTime: "2019.11.11 00:00:04",
                myReplyContent: "呵呵呵"
              },
              {
                id: 2,
                myReplyTime: "2019.11.11 00:00:04",
                myReplyContent: "呵呵呵"
              }
            ]
          },
          {
            id: 3,
            otherQuestionUserImg: require("../../assets/images/userImg.png"),
            otherQuestionUserName: "蔡徐坤",
            otherQuestionTime: "2019.11.11 00:00:03",
            otherQuestionText: "我的篮球是不是很棒？",
            myReply: [
              {
                id: 1,
                myReplyTime: "2019.11.11 00:00:04",
                myReplyContent: "呵呵呵"
              },
              {
                id: 2,
                myReplyTime: "2019.11.11 00:00:04",
                myReplyContent: "呵呵呵"
              }
            ]
          }
        ]
      },

      allReplyNum: 1
    };
  },
  created() {
    window.discuss_this = this;
    if (getCookie("userToken") === "") {
      window.location.href = "#/login";
    }
  },
  methods: {}
};
</script>

<style lang="scss">
#discuss {
  position: relative;
  background-color: rgba(247, 247, 247, 1);
  .discussMain {
    width: 1060px;
    margin: 0 auto;
    padding: 66px 90px;
    .discussP1 {
      .question {
        .questionTitle {
          h2 {
            text-align: center;
            font-size: 32px;
            color: #515151;
            font-weight: normal;
          }
        }
        .questionBox {
          .questionIn {
            padding-top: 120px;
            padding-bottom: 25px;
            border-bottom: solid 1.5px rgba(150, 150, 150, 0.5);
            .questionTop {
              .questionUserImg {
                display: inline-block;
                vertical-align: top;
              }
              .questionTopR {
                display: inline-block;
                margin-left: 20px;
                .userName {
                  font-size: 20px;
                  color: #990000;
                }
                .questionTime {
                  margin-top: 8px;
                }
              }
            }
            .questionText {
              margin-top: 8px;
            }
            .questionReply {
              margin-top: 40px;
              padding: 0 25px;
              .allReplyTitle {
                display: inline-block;
                cursor: pointer;
                font-size: 18px;
                color: #815f58;
                vertical-align: middle;
                -moz-user-select: none; /*火狐*/
                -webkit-user-select: none; /*webkit浏览器*/
                -ms-user-select: none; /*IE10*/
                user-select: none;
                .el-icon-caret-bottom,
                .el-icon-caret-top {
                  font-size: 20px;
                }
              }
              .allReplyTitle:hover {
                color: #990000;
              }
              .allReplyContent {
                padding-top: 10px;
                .allReplyContentIn {
                  margin-top: 18px;
                  padding-bottom: 10px;
                  .allReplyContentInL {
                    display: inline-block;
                    vertical-align: top;
                  }
                  .allReplyContentInR {
                    margin-left: 20px;
                    display: inline-block;
                    width: 940px;
                    .allReplyUserName {
                      display: block;
                      font-size: 20px;
                      color: #990000;
                    }
                    .allReplyTime {
                      margin-top: 4px;
                      font-size: 14px;
                    }
                  }
                }
                .allReplyContentIn:last-child {
                  border-bottom: none;
                }
              }
            }
          }
          .questionIn:first-child {
            padding-top: 30px;
          }
        }
      }
    }
    .discussP2 {
      margin-top: 100px;
      .myComment {
        .myCommentTitle {
          h2 {
            text-align: center;
            font-weight: normal;
            font-size: 32px;
            color: #515151;
          }
        }
        .myCommentBox {
          .myCommentIn {
            padding-top: 120px;
            padding-bottom: 25px;
            border-bottom: solid 1.5px rgba(150, 150, 150, 0.5);
            .otherQuestionTop {
              .otherQuestionUserImg {
                display: inline-block;
                vertical-align: top;
              }
              .otherQuestionTopR {
                display: inline-block;
                margin-left: 20px;
                .otherQuestionUserName {
                  font-size: 20px;
                  color: #990000;
                }
                .otherQuestionTime {
                  margin-top: 8px;
                }
              }
            }
            .otherQuestionText {
              margin-top: 8px;
            }
            .otherQuestionReply {
              margin-top: 40px;
              padding: 0 25px;
              .myReplyTitle {
                display: inline-block;
                font-size: 18px;
                color: #333333;
                vertical-align: middle;
                -moz-user-select: none; /*火狐*/
                -webkit-user-select: none; /*webkit浏览器*/
                -ms-user-select: none; /*IE10*/
                user-select: none;
                .el-icon-caret-bottom,
                .el-icon-caret-top {
                  font-size: 20px;
                }
              }
              .myReplyContent {
                padding-top: 10px;
                .myReplyContentIn {
                  margin-top: 18px;
                  padding-bottom: 10px;
                  .myReplyContentInL {
                    display: inline-block;
                    vertical-align: top;
                  }
                  .myReplyContentInR {
                    margin-left: 20px;
                    display: inline-block;
                    width: 940px;
                    .myReplyUserName {
                      display: block;
                      font-size: 20px;
                      color: #990000;
                    }
                    .myReplyTime {
                      margin-top: 4px;
                      font-size: 14px;
                    }
                  }
                }
                .myReplyContentIn:last-child {
                  border-bottom: none;
                }
              }
            }
          }
          .myCommentIn:first-child {
            padding-top: 30px;
          }
        }
      }
    }
  }
}
</style>
