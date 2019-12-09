<template>
  <div id="selfTest">
    <div class="selfTestMain">
      <div class="selfTestTitle">
        <h2>自测题</h2>
      </div>
      <div class="selfTestForm">
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column
            class-name="lastTime"
            prop="lastTime"
            label="发布时间"
            sortable
            width="120"
          >
          </el-table-column>
          <el-table-column
            class-name="selfTestName"
            prop="selfTestName"
            label="标题"
            sortable
            width="300"
          >
          </el-table-column>
          <el-table-column prop="selfTestIntroduce" label="简介">
          </el-table-column>
          <el-table-column
            class-name="selfTestBtn"
            prop="selfTestBtn"
            label="查看"
            width="100"
          >
            <el-button @click="selfTestWatch">查看</el-button>
          </el-table-column>
        </el-table>
      </div>
      <div class="paging">
        <div class="block">
          <el-pagination
            background
            :page-size="20"
            :pager-count="5"
            layout="prev, pager, next"
            :total="commentTotal"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelfTest",
  data() {
    return {
      tableData: [
        {
          code: 1,
          selfTestIntroduce: "我是简介2",
          selfTestName: "2关于蔡徐坤打篮球动作的解析与鉴赏",
          requirement:
            "2关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏",
          lastTime: "2019-05-31 21:56"
        },
        {
          code: 1,
          selfTestIntroduce: "我是简介",
          selfTestName: "关于蔡徐坤打篮球动作的解析与鉴赏",
          requirement:
            "关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏",
          lastTime: "2019-05-31 21:56"
        }
      ],
      commentTotal: 1000
    };
  },
  created() {},
  methods: {
    formatter(row) {
      return row.address;
    },
    selfTestWatch() {}
  }
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
#selfTest {
  position: relative;
  background-color: rgba(247, 247, 247, 1);
  .selfTestMain {
    width: 1060px;
    margin: 0 auto;
    padding: 60px 0;
    .selfTestTitle {
      text-align: center;
      h2 {
        color: #515151;
        font-size: 32px;
        padding-bottom: 30px;
      }
    }
    .selfTestForm {
      box-shadow: 0 0 5px 5px #ebeef5;
      .selfTestCode {
        text-align: center;
      }
      .lastTime {
        .cell {
          text-align: center;
          margin-left: 5px;
          margin-right: 15px;
        }
      }
      .selfTestBtn {
        .cell {
          text-align: center;
        }
        button {
          width: 60px;
          height: 30px;
          background-color: #990000;
          border-radius: 5px;
          outline: none;
          border: none;
          transition: all 0.05s;
          padding: 0;
          span {
            font-size: 14px;
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
    .paging {
      margin: 60px auto;
      width: 418px;
      text-align: center;
      .el-pager {
        height: 37px;
        li {
          background-color: #ffffff;
          line-height: 37px;
          min-width: 37px;
          height: 37px;
          color: #949494;
          box-shadow: 0 0 1px 1px #ebeef5;
        }
        li.active {
          background-color: #990000;
          color: #fff;
        }
        li.active:hover {
          color: #949494;
        }
        li:hover {
          color: #990000;
        }
      }
      button {
        box-shadow: 0 0 1px 1px #ebeef5;
        background-color: #ffffff;
        height: 37px;
        color: #949494;
      }
      button:hover {
        color: #990000;
      }
    }
  }
}
</style>
