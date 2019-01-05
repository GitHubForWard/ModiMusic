<template>
  <div>
    <div class="container-img">
      <span @click="goBack">&lt;</span>
      <img :src="ImgUrl" alt>
      <ul>
        <li>
          <p>点赞</p>
          <p>82.5万</p>
        </li>
        <li>
          <p>评论</p>
          <p>{{ CommentNum }}</p>
        </li>
        <li>
          <p>分享</p>
          <p>{{ shareNum }}</p>
        </li>
        <li>
          <p>下载</p>
          <p>89.5万</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SoaringList",
  data() {
    return {
      ImgUrl: "",
      idx: "",
      CommentNum: "",
      shareNum: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  mounted() {
    let arr = [3779629, 3778678, 2884035, 19723756];
    if (this.$route.params.ListId === 3779629) {
      this.idx = arr.indexOf(this.$route.params.ListId);
      //   console.log(this.idx);
    } else if (this.$route.params.ListId === 3778678) {
      this.idx = arr.indexOf(this.$route.params.ListId);
      //   console.log(this.idx);
    } else if (this.$route.params.ListId === 2884035) {
      this.idx = arr.indexOf(this.$route.params.ListId);
      //   console.log(this.idx);
    } else if (this.$route.params.ListId === 19723756) {
      this.idx = arr.indexOf(this.$route.params.ListId);
      //   console.log(this.idx);
    } else {
      console.log("数据有误");
    }
    this.$axios
      .get("http://localhost:3000/top/list", {
        params: {
          idx: this.idx
        }
      })
      .then(res => {
        // console.log(res.data);
        this.ImgUrl = res.data.playlist.coverImgUrl;
        this.shareNum = res.data.playlist.shareCount;
        this.CommentNum = res.data.playlist.commentCount;

        //   console.log(res.data.playlist.id);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scoped>
.container-img {
  width: 100%;
  height: 230px;
  font-size: 10px;
  color: #fff;
  text-align: center;
  position: relative;
  span {
    font-size: 18px;
    color: #fff;
    position: absolute;
    top: 25px;
    left: 15px;
  }
  img {
    width: 100%;
    height: 230px;
  }
  ul {
    width: 322px;
    position: absolute;
    left: 50px;
    bottom: 14px;
    li {
      list-style: none;
      margin-right: 45px;
      float: left;
      p:first-child {
        margin-bottom: 10px;
      }
    }
  }
}
</style>