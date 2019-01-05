<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="歌曲" name="first">
        <TabList/>
      </el-tab-pane>
      <el-tab-pane label="详情" name="second" class="tab-child">详情</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import TabList from "./TabList";

export default {
  name: "SoaringListContent",
  data() {
    return {
      activeName: "first"
    };
  },
  components: {
    TabList
  }
};
</script>

<style lang="less">
.el-tabs__nav {
  width: 100% !important;
}
.el-tabs__active-bar {
  width: 50% !important;
  padding-right: 0 !important;
  background: #c794f4;
}
#tab-first {
  width: 50% !important;
  text-align: center;
  padding-right: 0 !important;
  color: #c794f4;
}
#tab-second {
  width: 50% !important;
  text-align: center;
  padding-right: 0 !important;
  color: #c794f4;
}
.el-tabs__header is-top {
  margin: 0 !important;
}
</style>

