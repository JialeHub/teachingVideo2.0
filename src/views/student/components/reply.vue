<template>
  <div id="reply">
    <div class="replyMain">
      <div class="replyTop">
        <div class="replyTopL">
          <span class="commentUserImg">
            <el-avatar
              :size="50"
              :src="commentUserImg"
              id="head_avatar"
            ></el-avatar>
          </span>
        </div>
        <div class="replyTopR">
          <div class="userName">
            <span>{{ userName }}</span>
          </div>
          <div class="replyTime">
            <span>{{ replyTime }}</span>
          </div>
          <div class="commentContent">{{ commentContent }}</div>
          <div class="replyTBtn">
            <el-button @click="replyTBtn">
              <span class="el-icon-s-promotion"></span>
              <span class="CommentContentInP3Text">回 复</span>
            </el-button>
          </div>
        </div>
      </div>
      <div class="replyMiddle">
        <div class="allReplyTitle">
          <span>所有回复({{ allReply.length }})</span>
        </div>
        <div class="allReplyContent" v-for="item in allReply" :key="item.id">
          <div class="allReplyContentIn">
            <div class="allReplyContentInL">
              <div class="allReplyContentInLIng">
                <el-avatar :size="50" :src="item.ReplyUserImg"></el-avatar>
              </div>
            </div>
            <div class="allReplyContentInR">
              <div class="allReplyUserName">
                <span>{{ item.ReplyUserName }}</span>
              </div>
              <div class="allReplyTime">
                <span>{{ item.ReplyTime }}</span>
              </div>
              <div class="allReplyContent">
                <span>{{ item.replyContent }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="replyBottom">
        <div class="replyTextareaBox">
          <div class="replyTextareaTitle"><span>回复</span></div>
          <div class="replyTextarea">
            <el-input
              type="textarea"
              :rows="8"
              maxlength="200"
              show-word-limit
              resize="none"
              placeholder="请输入内容..."
              v-model="replyText"
            >
            </el-input>
          </div>
          <div class="replyBtn">
            <el-button @click="replyBtn" id="replyBtn">
              <span class="el-icon-s-promotion"></span>
              <span class="CommentContentInP3Text">发 表</span>
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reply",
  data() {
    return {
      commentUserImg: require("../../../assets/images/userImg.png"),
      userName: "用户名",
      replyTime: "2019.12.16 14:22:07",
      commentContent:
        "我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的评论真棒撒旦发射点我的",
      replyText: "",
      allReply: [
        {
          id: "1",
          ReplyUserImg: require("../../../assets/images/userImg.png"),
          ReplyUserName: "小明",
          ReplyTime: "2018.11.28 08:18:36",
          replyContent: "小明的评论内容"
        },
        {
          id: "2",
          ReplyUserImg: require("../../../assets/images/userImg.png"),
          ReplyUserName: "小红",
          ReplyTime: "2019.03.15 06:12:27",
          replyContent: "小明的评论内容"
        }
      ]
    };
  },
  created() {},
  methods: {
    replyBtn() {},
    replyTBtn() {
      this.$router.push({ name: "replyBtn" });
    }
  }
};
</script>

<style lang="scss">
#reply {
  position: relative;
  background-color: rgba(247, 247, 247, 1);
  .replyMain {
    width: 1060px;
    margin: 0 auto;
    padding: 46px 90px;
    .replyTop {
      position: relative;
      width: 100%;
      .replyTopL {
        display: inline-block;
        vertical-align: top;
      }
      .replyTopR {
        display: inline-block;
        width: 990px;
        margin-left: 20px;
        .userName {
          font-size: 20px;
          color: #990000;
        }
        .replyTime {
          font-size: 18px;
          margin-top: 4px;
        }
        .commentContent {
          margin-top: 8px;
          font-size: 18px;
          padding-bottom: 10px;
          border-bottom: solid 2px #aeaeae;
        }
        .replyTBtn {
          left: 0;
          margin-top: 18px;
          button {
            width: 104px;
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
          button:hover {
            background-color: #e50000;
          }
          button:active {
            background-color: #d00000;
          }
        }
      }
    }
    .replyMiddle {
      margin-top: 100px;
      .allReplyTitle {
        font-size: 20px;
        color: #333333;
      }
      .allReplyContent {
        padding-top: 10px;
        .allReplyContentIn {
          margin-top: 24px;
          padding-bottom: 10px;
          border-bottom: solid 2px #aeaeae;
          .allReplyContentInL {
            display: inline-block;
            vertical-align: top;
          }
          .allReplyContentInR {
            margin-left: 20px;
            width: 990px;
            display: inline-block;
            .allReplyUserName {
              font-size: 20px;
              color: #990000;
            }
            .allReplyTime {
              font-size: 16px;
              margin-top: 4px;
            }
          }
        }
      }
    }
    .replyBottom {
      margin-top: 82px;
      .replyTextareaBox {
        .replyTextareaTitle {
          font-size: 20px;
          color: #333333;
        }
        .replyTextarea {
          margin-top: 18px;
          outline: none;
        }
        .el-textarea__inner:hover {
          border-color: #c0c4cc;
        }
        .el-textarea__inner:focus {
          border-color: rgba(95, 97, 104, 0.7);
        }
        .replyBtn {
          text-align: right;
          margin-top: 20px;
          button {
            width: 104px;
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
          button:hover {
            background-color: #e50000;
          }
          button:active {
            background-color: #d00000;
          }
        }
      }
    }
  }
}
</style>
