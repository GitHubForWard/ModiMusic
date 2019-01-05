<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="短视频" name="first"><ShortVideo /></el-tab-pane>
    <el-tab-pane label="MV" name="second">MV</el-tab-pane>
  </el-tabs>
</template>
<script>
  import ShortVideo from './ShortVideo'
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    components: {
      ShortVideo
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
.el-tabs__nav{
  width: 100%
}
.el-tabs__item{
    width: 50%;
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
