<template>
  <div class="header">
    <ul>
      <li @click="prev">
        <i class="el-icon-arrow-left"></i>
      </li>
      <li class="page-title">{{title}}</li>
      <li>
        <i v-if="hasMore" @click="getMore" class="el-icon-more"></i>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MyHeader",
  data() {
    return {};
  },
  props: {
    hasMore: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: " "
    }
  },
  methods: {
    prev() {
      this.$router.go(-1);
    },
    getMore() {
      console.log("getMore");
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  background: #632798;
  ul {
    padding: 0 10px;
    display: flex;
    li {
      flex: 1;
      color: #fff;
      text-align: center;
      line-height: 42.5px;
      font-size: 18px;
    }
    li:nth-child(1) {
      text-align: left;
    }
    li:nth-child(3) {
      text-align: right;
      font-size: 12px;
    }
  }
}
</style>