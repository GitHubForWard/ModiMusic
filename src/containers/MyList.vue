<template>
  <div>
    <MyHeader title="歌单"/>
    <div>
      <Playing v-if="isPlaying" :Playingid="Musicid"/>
      <ul class="song-list">
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
  </div>
</template>
<script>
import MyHeader from "../components/MyHeader";
import Playing from "../components/Playing/Playing";
export default {
  name: "MyList",
  data() {
    return {
        SongList:"",
        isPlaying: false
    };
  },
  components: {
    MyHeader,
    Playing
  },
   methods: {
    getMusicid(items) {
      this.Musicid = items.id;
      this.isPlaying = true;
    }
  },
  mounted() {
    if (this.$route.params.Listid) {
      this.$axios
        .get("http://localhost:3000/playlist/detail", {
          params: {
            id: this.$route.params.Listid
          }
        })
        .then(res => {
          this.SongList = res.data.playlist.tracks;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
<style lang="less" scoped>
.song-list {
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