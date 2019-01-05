<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="今日排行" name="first">今日排行</el-tab-pane>
    <el-tab-pane label="本周排行" name="second">本周排行</el-tab-pane>
    <el-tab-pane label="累计排行" name="third"><Cumulative /></el-tab-pane>
  </el-tabs>
</template>
<script>
  import Cumulative from './Cumulative'
  export default {
    data() {
      return {
        activeName: 'third'
      };
    },
    components: {
      Cumulative
    },
    methods: {
      handleClick(tab, event) {
      }
    }
  };
</script>
<style lang="less">
.el-tabs--top{
    background: #fff;
}
.el-tabs__item{
    width: 125px;
    text-align: center;
    padding:0;
}
.el-tabs__active-bar{
    background-color: #C890F5;
}
.el-tabs__item.is-active{
    color: #C890F5;
}
.el-tabs__header{
  margin-bottom: 5px;
}
</style>
