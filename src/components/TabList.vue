<template>
  <div>
    <ul>
      <li v-for="(items, index) in SongList" :key="index">
        <div>
          <p>{{ items.name }}</p>
          <p>
            <span v-for="(item, index) in items.ar" :key="index">{{ item.name }}</span>
          </p>
        </div>
        <div>
          <span>
            <router-link :to="{name:'MVPage'}">MV</router-link>
          </span>
          <span>···</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TabList",
  data() {
    return {
      idx: "",
      SongList: []
    };
  },
  props:{
    
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
        this.SongList = res.data.playlist.tracks;
        console.log(this.SongList);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scoped>
ul {
  padding: 0 12px;
  box-sizing: border-box;
  li {
    height: 50px;
    border-bottom: 1px solid gray;
    list-style: none;
    position: relative;
    div:first-child {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      position: absolute;
      top: 10px;
      p:first-child {
        width: 230px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-weight: 600;
        font-size: 12px;
      }
      p:last-child {
        margin-top: 10px;
        font-size: 9px;
      }
    }
    div:last-child {
      position: absolute;
      right: 0;
      span:first-child {
        border: 1px solid #333;
        border-radius: 5px;
        padding: 2px 8px;
        font-size: 9px;
        vertical-align: middle;
        a {
          text-decoration: none;
        }
      }
      span:last-child {
        margin-left: 33px;
        vertical-align: middle;
      }
    }
  }
}
</style>