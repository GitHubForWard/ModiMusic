<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="动态平台" name="first"><Dynamic /></el-tab-pane>
    <el-tab-pane label="我的好友" name="second"><Friend /></el-tab-pane>
  </el-tabs>
</template>
<script>
  import Friend from './Friend'
  import Dynamic from './Dynamic'
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    components: {
      Friend,
      Dynamic
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
