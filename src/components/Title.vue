<template>
  <div>
    <div class="ranking-list-title">
      <div>
        <a @click="goBack">&lt;</a>
        {{ title }}
      </div>
    </div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: "Title",
  data() {
    return {};
  },
  methods: {
    goBack() {
      window.history.back();
    }
  },
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less" scoped>
.ranking-list-title {
  width: 100%;
  height: 64px;
  line-height: 64px;
  background: #632798;
  
  z-index: 999;
  position: fixed;
  top: 0;
  div {
    padding: 0 15px;
    box-sizing: border-box;
    text-align: center;
    font-size: 15px;
    position: relative;
    top: 8px;
    color: #fff;
    a {
      float: left;
      font-size: 18px;
    }
  }
}
.box {
  width: 100%;
  height: 64px;
  background: orange;
}
</style>