<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="单曲" name="first">单曲</el-tab-pane>
    <el-tab-pane label="专辑" name="second">
        <Tab />
        <NewHot title="推荐本周热销单曲" />
      </el-tab-pane>
    <el-tab-pane label="实体" name="third">实体</el-tab-pane>
  </el-tabs>
</template>
<script>
import Tab from './Tab/Tab'
import NewHot from './Tab/NewHot'
  export default {
    data() {
      return {
        activeName: 'second'
      }
    },
    components: {
        Tab,
        NewHot
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
