<template>
  <div>
    <MyHeader title="本地音乐" :hasMore='true' />
    <el-tabs :stretch= true type="border-card">
      <el-tab-pane label="单曲">
        <LocalList />
      </el-tab-pane>
      <el-tab-pane label="歌手">歌手</el-tab-pane>
      <el-tab-pane label="专辑">专辑</el-tab-pane>
      <el-tab-pane label="文件夹">文件夹</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import MyHeader from "../components/MyHeader";
import LocalList from "../components/LocalList";

export default {
  name: "LocalMusic",
  components: {
    MyHeader,
    LocalList
  }
};
</script>
<style lang="less" scoped>


</style>