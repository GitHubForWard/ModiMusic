<template>
  <div class="contents-songlist">
    <div class="first-div">
      <img :src="coverImgUrl" alt>
    </div>
    <div class="second-div">
      <div>
        <img :src="coverImgUrl" alt>
        <span>{{ title }}</span>
      </div>
      <div>
        <ul>
          <li>
            <p>☆</p>
            <p>{{ commentCount }}</p>
          </li>
          <li>
            <p>☆</p>
            <p>{{ shareCount }}</p>
          </li>
          <li>
            <p>☆</p>
            <p>下载</p>
          </li>
          <li>
            <p>☆</p>
            <p>多选</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongListDetailsTop",
  data() {
    return {
      id: "",
      coverImgUrl: "",
      title: "",
      commentCount: "",
      shareCount: ""
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    // console.log(this.id);
    this.$axios
      .get("http://localhost:3000/playlist/detail", {
        params: {
          id: this.id
        }
      })
      .then(res => {
        // console.log(res.data);
        this.coverImgUrl = res.data.playlist.coverImgUrl;
        this.title = res.data.playlist.name;
        this.commentCount = res.data.playlist.commentCount;
        this.shareCount = res.data.playlist.shareCount;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scoped>
.contents-songlist {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
div.first-div {
  img {
    width: 100%;
    filter: blur(30px);
  }
}
div.second-div {
  color: #fff;
  position: absolute;
  top: 55px;
  left: 10px;
  div:nth-child(1) {
    img {
      width: 125px;
    }
    span {
      position: relative;
      top: -70px;
      display: inline-block;
      width: 210px;
      height: 125px;
      text-align: left;
      font-size: 16px;
    }
  }
  div:nth-child(2) {
    ul {
      position: relative;
      top: -80px;
      text-align: center;
      li {
        list-style: none;
        float: left;
        margin-left: 48px;
        p {
          font-size: 15px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>