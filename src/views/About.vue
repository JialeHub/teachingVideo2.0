<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>
    </el-row>
    <el-row>
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>中等按钮</el-button>
      <el-button size="small" round>小型按钮</el-button>
      <el-button size="mini" round>超小按钮</el-button>
    </el-row>
  </div>
</template>

<style lang="scss">
.about {
  h1 {
    color: rebeccapurple;
    font-size: 50px;
  }
}
</style>

<script>
export default {
  name: "about",
  data() {
    return {
      radio: "1"
    };
  }
};
</script>
