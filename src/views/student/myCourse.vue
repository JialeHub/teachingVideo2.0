<template>
  <div id="myCourse">
    <div class="myCourseMain">
      <div class="myCourseTop">
        <div class="myCourseTopL">
          <div class="myCourseTopLImg">
            <img :src="myCourseImg" alt="" />
          </div>
        </div>
        <div class="myCourseTopR">
          <div class="myCourseTopRMsg">
            <div class="myCourseName">
              <span>{{ myCourseName }}</span>
            </div>
            <div class="myCourseTopRMsgContent">
              <div class="myCourseLearnersNum">
                <span>{{ myCourseLearnersNum }} 人看过</span>
                <!--<span class="star">
                                    <el-rate
                                            v-model="score"
                                            disabled
                                            show-score
                                            allow-half
                                            text-color="#990000"
                                            score-template="{value}">
                                    </el-rate>
                                </span>-->
                <span class="teacher">讲师：{{ teacher }}老师</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="myCourseProgress">
        <div class="myCourseProgressL">
          <div class="myCourseProgressInner">
            <el-progress
              :text-inside="true"
              :stroke-width="33"
              :percentage="70"
              color="#990000"
            ></el-progress>
          </div>
          <span class="finishClass"
            >目前已完成{{ finishClass }}个学时，{{ finishClassMsg }}</span
          >
        </div>
        <div class="myCourseProgressR">
          <div class="ContinueLearning">
            <el-button @click="ContinueLearning">继续学习</el-button>
          </div>
          <span class="nextClass">下个学时：{{ nextClass }}</span>
        </div>
      </div>
      <div class="myCourseBottom">
        <div class="myCourseBottomL">
          <div class="myCourseBottomLT">
            <span class="contents">目录</span>
          </div>
          <div class="chapterBoxOut" v-for="item in myCourseAll" :key="item.id">
            <div class="chapterBox">
              <span>{{ item.chapter }}：{{ item.chapterTitle }}</span>
            </div>
            <div class="classBox" v-for="item2 in item.classIn" :key="item2.id">
              <div
                class="classIn"
                @click="goClass(item2)"
                @mouseover="item2.showFlag = 1"
                @mouseleave="item2.showFlag = 0"
              >
                <span class="classText"
                  >{{ item2.classTitle }}：{{ item2.classValue }}</span
                >
                <div class="classInR">
                  <span class="classInIcon el-icon-video-play"></span>
                  <span class="classTime">{{ item2.classTime }}</span>
                  <span class="watchBtn" v-show="item2.showFlag">
                    <el-button>开始学习</el-button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="myCourseBottomR">
          <div class="myCourseBottomRT">
            <span class="discussionTitle">讨论区</span>
            <span class="discussionRecord">
              <el-link href="./#/discuss" :underline="false">讨论记录</el-link>
            </span>
          </div>
          <div class="myCourseBottomRB">
            <div class="discussionInput">
              <span class="discussionInputTitle">综合讨论区</span>
              <div class="discussionInputTextarea">
                <el-input
                  type="textarea"
                  :rows="4"
                  maxlength="200"
                  show-word-limit
                  placeholder="请输入内容..."
                  v-model="discussionInput"
                >
                </el-input>
              </div>
              <div class="discussionInputBtn">
                <el-button @click="discussionSub">提出问题</el-button>
              </div>
            </div>
            <div
              class="CommentContent"
              v-for="itemC in commentContentIn"
              :key="itemC.id"
            >
              <div class="CommentContentIn">
                <div class="CommentContentInP1">
                  <span class="CommentContentInP1Img">
                    <el-avatar
                      :size="40"
                      :src="itemC.img"
                      id="head_avatar"
                    ></el-avatar>
                  </span>
                  <span class="CommentContentInP1Name">{{ itemC.name }}</span>
                  <span class="CommentContentInP1Time">{{ itemC.time }}</span>
                </div>
                <div class="CommentContentInP2">
                  <span class="CommentContentInP2Text">{{ itemC.text }}</span>
                </div>
                <div class="CommentContentInP3">
                  <el-link @click="openComment(itemC)">
                    <span class="el-icon-s-promotion"></span>
                    <span class="CommentContentInP3Text">评论</span>
                  </el-link>
                </div>
              </div>
            </div>
            <div class="paging">
              <div class="block">
                <el-pagination
                  :page-size="3"
                  :pager-count="5"
                  layout="prev, pager, next"
                  :total="commentTotal"
                >
                </el-pagination>
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
  name: "Home",
  data() {
    return {
      window: window,
      myCourseImg: require("../../assets/images/myCourseImg.png"),
      myCourseName: "坤坤的唱跳 零基础入门",
      myCourseLearnersNum: "100",
      score: 3.4,
      teacher: "蔡徐坤",
      finishClass: "40",
      finishClassMsg: "加油呀！",
      nextClass: "XXX",
      myCourseAll: [
        {
          id: 1,
          chapter: "章节1",
          chapterTitle: "环境搭建和相关配置",
          classIn: [
            {
              id: 1,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            },
            {
              id: 2,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            },
            {
              id: 3,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            },
            {
              id: 4,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            },
            {
              id: 5,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            }
          ]
        },
        {
          id: 2,
          chapter: "章节1",
          chapterTitle: "环境搭建和相关配置",
          classIn: [
            {
              id: 1,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            },
            {
              id: 2,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            },
            {
              id: 3,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            },
            {
              id: 4,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            },
            {
              id: 5,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            }
          ]
        },
        {
          id: 3,
          chapter: "章节1",
          chapterTitle: "环境搭建和相关配置",
          classIn: [
            {
              id: 1,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            },
            {
              id: 2,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            },
            {
              id: 3,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            },
            {
              id: 4,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            },
            {
              id: 5,
              classTitle: "课时一",
              classValue: "只因你太美",
              classTime: "12:59:59",
              showFlag: false,
              link: "./#/video"
            }
          ]
        }
      ],

      discussionInput: "",
      commentContentIn: [
        {
          id: 1,
          img: require("../../assets/images/userImg.png"),
          name: "马冬梅",
          time: "2019.09.26",
          text: "蔡徐坤好帅啊！！我好喜欢！",
          url: "./#/reply"
        },
        {
          id: 2,
          img: require("../../assets/images/userImg.png"),
          name: "马冬梅",
          time: "2019.09.26",
          text: "蔡徐坤好帅啊！！我好喜欢！",
          url: "./#/reply"
        },
        {
          id: 3,
          img: require("../../assets/images/userImg.png"),
          name: "马冬梅",
          time: "2019.09.26",
          text: "蔡徐坤好帅啊！！我好喜欢！",
          url: "./#/reply"
        }
      ],
      commentTotal: 20
    };
  },
  created() {
    window.myCourse_this = this;
    if (getCookie("userToken") === "") {
      window.location.href = "#/login";
    }
  },
  methods: {
    goClass(item2) {
      window.location.href = item2.link;
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 200);
    },
    ContinueLearning() {
      window.location.href = "#/video";
    },
    discussionSub() {},

    openComment(itemC) {
      window.location.href = itemC.url;
      setTimeout(function() {
        window.scrollTo(0, 0);
      }, 200);
    }
  },
  components: {}
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
#myCourse {
  position: relative;
  background-color: rgba(242, 242, 242, 1);
  padding-top: 58px;
  padding-bottom: 100px;
  .myCourseMain {
    width: 1171px;
    height: 100%;
    margin: 0 auto;
    .myCourseTop {
      position: relative;
      width: 100%;
      height: 287px;
      background: #fff;
      .myCourseTopL {
        display: inline-block;
        position: absolute;
        left: 0;
        .myCourseTopLImg {
          margin: 40px 48px 0 38px;
          width: 350px;
          height: 208px;
          .img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .myCourseTopR {
        display: inline-block;
        position: absolute;
        height: 208px;
        margin-top: 40px;
        width: 735px;
        right: 0;
        .myCourseName {
          font-size: 32px;
          color: #333;
        }
        .myCourseTopRMsgContent {
          margin-top: 18px;
          .myCourseLearnersNum {
            font-size: 16px;
            color: #a1a1a1;
          }
          .star {
            position: relative;
            display: inline-block;
            top: 0;
            margin-left: 38px;
            line-height: 22px;
            color: #990000;
            .el-icon-star-off {
              position: relative;
            }
          }
          .teacher {
            margin-left: 50px;
            font-size: 16px;
            color: #6b6b6b;
          }
        }
      }
    }
    .myCourseProgress {
      position: relative;
      width: 100%;
      height: 113px;
      background-color: #fff;
      margin: 20px 0;
      .myCourseProgressL {
        position: relative;
        width: 895px;
        left: 38px;
        top: 22px;
        .myCourseProgressInner {
          display: inline-block;
          width: 895px;
          height: 33px;
          .el-progress {
            .el-progress-bar__outer {
              border-radius: 0;
            }
            .el-progress-bar__inner {
              border-radius: 0;
            }
          }
        }
        .finishClass {
          display: inline-block;
          margin-top: 20px;
          font-size: 14px;
          color: #797979;
        }
      }
      .myCourseProgressR {
        position: absolute;
        display: inline-block;
        width: 206px;
        right: 0;
        top: 14px;
        .ContinueLearning {
          button {
            width: 140px;
            height: 50px;
            background-color: #990000;
            border-radius: 0;
            outline: none;
            border: none;
            transition: all 0.05s;
            span {
              font-size: 16px;
              color: #fff;
            }
          }
          button:active {
            transition: all 0.05s;
            background-color: rgba(208, 0, 0, 1);
          }
        }
        .nextClass {
          margin-top: 16px;
          display: inline-block;
          font-size: 14px;
          color: #797979;
        }
      }
    }
    .myCourseBottom {
      .myCourseBottomL {
        display: inline-block;
        width: 834px;
        vertical-align: top;
        background-color: #fff;
        .myCourseBottomLT {
          height: 75px;
          border-bottom: solid #d7d7d7 2px;
          .contents {
            font-size: 24px;
            color: #333333;
            line-height: 77px;
            margin-left: 36px;
          }
        }
        .chapterBox {
          height: 38px;
          background-color: #f8f8f8;
          span {
            line-height: 38px;
            color: #6b6b6b;
            margin-left: 38px;
          }
        }
        .classBox {
          color: #333;
          padding: 6px 0 6px 0;
          .classIn {
            position: relative;
            color: #333333;
            height: 30px;
            line-height: 30px;
            font-size: 15px;
            transition: all 0.05s;
            cursor: pointer;
            .classText {
              color: #333333;
              margin-left: 38px;
              vertical-align: middle;
            }
            .classInR {
              display: inline-block;
              position: absolute;
              right: 24px;
              vertical-align: middle;
              .classInIcon {
                margin-right: 8px;
                font-size: 20px;
                vertical-align: middle;
              }
              .classTime {
                vertical-align: middle;
              }
              .watchBtn {
                display: inline-block;
                position: absolute;
                right: 0;
                box-sizing: border-box;
                margin-top: -1px;
                button {
                  width: 86px;
                  height: 30px;
                  background-color: #990000;
                  color: #ffffff;
                  border: none;
                  outline: none;
                  padding: 0;
                  span {
                    vertical-align: middle;
                  }
                }
              }
            }
          }
          .classIn:hover {
            background-color: rgba(225, 179, 179, 1);
            background-origin: border-box;
            transition: background-color 0.05s;
          }
        }
      }
      .myCourseBottomR {
        display: inline-block;
        width: 307px;
        background-color: #fff;
        margin-left: 30px;
        .myCourseBottomRT {
          position: relative;
          height: 75px;
          border-bottom: solid #d7d7d7 2px;
          .discussionTitle {
            font-size: 24px;
            color: #333333;
            line-height: 77px;
            margin-left: 36px;
            vertical-align: middle;
          }
          .discussionRecord {
            vertical-align: middle;
            position: absolute;
            right: 28px;
            line-height: 77px;
            .el-link--inner {
              vertical-align: middle;
              font-size: 14px;
              color: #6b6b6b;
            }
          }
        }
        .myCourseBottomRB {
          padding: 16px 24px;
          .discussionInput {
            position: relative;
            height: 178px;
            .discussionInputTitle {
              display: inline-block;
              font-size: 16px;
              color: #6b6b6b;
            }
            .discussionInputTextarea {
              margin-top: 12px;
              font-size: 14px;
              .el-textarea__inner {
                color: rgb(0, 0, 0);
                max-height: 150px;
                padding: 4px 6px;
                border-radius: 0;
                outline: none;
                resize: none;
              }
            }
            .discussionInputBtn {
              display: inline-block;
              position: absolute;
              right: 0;
              margin-top: 12px;
              button {
                width: 72px;
                height: 40px;
                border-radius: 5px;
                border: none;
                outline: none;
                background-color: rgba(153, 0, 0, 1);
                text-align: center;
                vertical-align: middle;
                padding: 0;
                span {
                  font-size: 13px;
                  color: #fff;
                }
              }
              button:active {
                background-color: #d00000;
              }
            }
          }
          .CommentContent {
            position: relative;
            display: inline-block;
            margin-top: 24px;
            .CommentContentIn {
              position: relative;
              width: 230px;
              border-bottom: solid #c9c9c9 1px;
              box-sizing: border-box;
              margin: 0 14px;
              padding: 22px 0 32px 6px;
              .CommentContentInP1 {
                position: relative;
                font-size: 14px;
                line-height: 14px;

                .CommentContentInP1Img {
                  vertical-align: top;
                }
                .CommentContentInP1Name {
                  color: #990000;
                  margin-left: 18px;
                  vertical-align: middle;
                }
                .CommentContentInP1Time {
                  position: absolute;
                  right: 10px;
                  font-size: 12px;
                  color: #949494;
                  vertical-align: middle;
                  margin-top: 1px;
                }
              }
              .CommentContentInP2 {
                width: 100%;
                font-size: 13px;
                margin-top: 16px;
                margin-bottom: 2px;
              }
              .CommentContentInP3 {
                float: right;
                .el-link--inner {
                  .el-icon-s-promotion {
                    font-size: 16px;
                  }
                  .CommentContentInP3Text {
                    font-size: 12px;
                    margin: 2px;
                  }
                }
                .el-link.is-underline:hover:after {
                  text-decoration: none;
                  border: none;
                }
                .el-link.el-link--default:hover {
                  color: #990000;
                }
              }
            }
          }
          .paging {
            margin: 20px 0 20px -24px;
            width: 307px;
            text-align: center;
            .el-pager {
              li {
                min-width: 32px;
                color: #949494;
              }
              li.active {
                color: #990000;
              }
              li:hover {
                color: #990000;
              }
            }
            button {
              color: #949494;
            }
            button:hover {
              color: #990000;
            }
          }
        }
      }
    }
  }
}
</style>
