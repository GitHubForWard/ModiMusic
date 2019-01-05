<template>
  <div class="big-div">
    <div class="one">
      <span class="iconfont">&#xeaf2;</span>
      <span>像我这样的人</span>
      <span class="iconfont">&#xe63e;</span>
    </div>
    <div class="two">
      <p>丞象</p>
      <p>MV</p>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "PlayerModule",
  data() {
    return {
      songId: ""
    };
  },
  mounted() {
    this.songId = this.$route.params.songId;
    console.log(this.songId);
    this.$axios
      .get("http://localhost:3000/music/url", {
        params: {
          id: this.songId
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang='less' scoped>
div.big-div {
  width: 100%;
  height: 667px;
  background: rgb(96, 38, 155);
  color: #fff;
  div.one {
    text-align: center;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
    padding: 37px 27px 20px;
  }
  div.two {
    text-align: center;
    font-size: 15px;
    p {
      margin-bottom: 8px;
    }
    p:nth-child(2) {
      display: inline-block;
      padding: 1px 5px;
      border-radius: 6px;
      font-size: 12px;
      border: 1px solid #fff;
    }
  }
}
</style>