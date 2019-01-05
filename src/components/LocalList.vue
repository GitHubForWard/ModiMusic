<template>
  <div>
    <Playing v-if="isPlaying" :Playingid="Musicid"/>
    <ul>
      <li v-for="(items, index) in SongList" :key="index">
        <router-link to>
          <div @click="getMusicid(items)">
            <p class="song-title">{{ items.name }}</p>
          </div>
          <span class="song-more">
            <i class="el-icon-more"></i>
          </span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Playing from "../components/Playing/Playing";
export default {
  name: "LocalList",
  data() {
    return {
      idx: "",
      SongList: [],
      isPlaying: false,
      Musicid: ""
    };
  },
  components: {
    Playing
  },
  methods: {
    getMusicid(items) {
      this.Musicid = items.id;
      this.isPlaying = true;
    }
  },
  mounted() {
    this.$axios
      .get("http://localhost:3000/personalized/newsong", {
        params: {}
      })
      .then(res => {
        this.SongList = res.data.result;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scoped>
ul {
  padding: 0 10px;
  li {
    height: 40px;
    border-bottom: .3px solid #555;
    list-style: none;
    position: relative;
    overflow: hidden;
    .song-title {
      position: absolute;
      left: 10px;
      top: 15px;
      font-size: 12px;
      color: #333;
    }
    .song-more {
      position: absolute;
      right: 10px;
      top: 10px;
       font-size: 12px;
      color: #333;
    }
  }
}
</style>