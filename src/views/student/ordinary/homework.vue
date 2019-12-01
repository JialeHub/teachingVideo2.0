<template>
  <div id="homework">
    <div class="homeworkMain">
      <div class="homeworkTitle">
        <h2>作业提交</h2>
      </div>
      <div class="homeworkForm">
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{ prop: 'date', order: 'descending' }"
        >
          <el-table-column
            class-name="homeworkCode"
            prop="code"
            label="作业编号"
            sortable
            width="120"
          >
          </el-table-column>
          <el-table-column prop="name" label="作业名称" width="200">
          </el-table-column>
          <el-table-column prop="requirement" label="作业要求">
          </el-table-column>
          <el-table-column
            class-name="lastTime"
            prop="lastTime"
            label="截止时间"
            sortable
            width="120"
          >
          </el-table-column>
          <el-table-column
            class-name="homeworkBtn"
            prop="homeworkBtn"
            label="提交作业"
            width="100"
          >
            <el-button @click="homeworkSubmit">提交</el-button>
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
  name: "Homework",
  data() {
    return {
      tableData: [
        {
          code: 1,
          name: "关于蔡徐坤打篮球动作的解析与鉴赏",
          date: "2016-05-02",
          requirement:
            "关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏",
          address: "1上海市普陀区金沙江路 1518 弄",
          lastTime: "2019-05-31 21:56:12"
        },
        {
          code: 2,
          name: "关于蔡徐坤打篮球动作的解析与鉴赏",
          date: "2016-05-02",
          requirement:
            "关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏",
          address: "1上海市普陀区金沙江路 1518 弄",
          lastTime: "2019-05-31 21:56:12"
        },
        {
          code: 3,
          name: "关于蔡徐坤打篮球动作的解析与鉴赏",
          date: "2016-05-02",
          requirement:
            "关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏",
          address: "1上海市普陀区金沙江路 1518 弄",
          lastTime: "2019-05-31 21:56:12"
        },
        {
          code: 4,
          name: "关于蔡徐坤打篮球动作的解析与鉴赏",
          date: "2016-05-02",
          requirement:
            "关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏",
          address: "1上海市普陀区金沙江路 1518 弄",
          lastTime: "2019-05-31 21:56:12"
        },
        {
          code: 4,
          name: "关于蔡徐坤打篮球动作的解析与鉴赏",
          date: "2016-05-02",
          requirement:
            "关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏关于蔡徐坤打篮球动作的解析与鉴赏",
          address: "1上海市普陀区金沙江路 1518 弄",
          lastTime: "2019-05-31 21:56:12"
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
    homeworkSubmit() {}
  }
};
</script>

<!-- 添加“scoped”属性以将css仅限于此组件 -->
<style lang="scss">
#homework {
  position: relative;
  background-color: rgba(247, 247, 247, 1);
  .homeworkMain {
    width: 1060px;
    margin: 0 auto;
    padding: 60px 0;
    .homeworkTitle {
      text-align: center;
      h2 {
        color: #515151;
        font-size: 32px;
        padding-bottom: 30px;
      }
    }
    .homeworkForm {
      box-shadow: 0 0 5px 5px #ebeef5;
      .homeworkCode {
        text-align: center;
      }
      .lastTime {
        .cell {
          text-align: center;
          margin-left: 5px;
          margin-right: 15px;
        }
      }
      .homeworkBtn {
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
