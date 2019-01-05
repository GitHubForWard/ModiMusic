<template>
  <div class="player">
    <div class="header">
      <div class="title">
        <router-link class="close" to="/">
          <i class="el-icon-close"></i>
        </router-link>
        <div class="music-info">
          <p v-if="SongName">{{ SongName }}</p>
          <p class="author">{{ Artist }}</p>
        </div>
      </div>
    </div>
    <div class="song-info">
      <div class="song-info-img">
        <img v-if="SongPic" :src="SongPic">
        <LRC :musicid="this.Playingid" :currentTime="currentTime" :durationTime="durationTime"/>
      </div>
      <div class="iconbox">
        <i class="el-icon-arrow-left"></i>
        <i class="el-icon-remove-outline"></i>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="song">
      <audio :src="musicurl" controls autoplay ref="myPlayer"></audio>
    </div>
  </div>
</template>
<script>
import LRC from "./LRC"
export default {
  name: "Playing",
  components: {
      LRC
  },
  data() {
    return {
      musicurl:
        "https://music.163.com/song/media/outer/url?id=" +
        this.Playingid +
        ".mp3",
      SongName: "",
      SongPic: "",
      Artist: "",
      currentTime: 0,
      durationTime: 0,
      playerData: {}
    };
  },
  props: ["Playingid"],
  mounted() {
    this.$axios
      .get("http://localhost:3000/song/detail", {
        params: {
          ids: this.Playingid
        }
      })
      .then(res => {
        console.log(res.data.songs);
        this.playerData = res.data;
        this.SongName = res.data.songs[0].name;
        this.SongPic = res.data.songs[0].al.picUrl;
        this.Artist = res.data.songs[0].ar[0].name;
      })
      .catch(error => {
        console.log(error);
      });
  },
  updated() {
    this.addEventListener();
  },
  methods: {
    addEventListener() {
      this.$refs.myPlayer.addEventListener("timeupdate", this._currentTime);
      this.$refs.myPlayer.addEventListener("canplay", this._durationTime);
    },

    removeEventListener() {
      this.$refs.myPlayer.removeEventListener("timeupdate", this._currentTime);
      this.$refs.myPlayer.removeEventListener("canplay", this._durationTime);
    },

    _currentTime() {
      this.currentTime = this.$refs.myPlayer.currentTime;
    },

    _durationTime() {
      this.durationTime = this.$refs.myPlayer.duration;
    }
  },
  beforeDestroy() {
    this.removeEventListener();
  }
};
</script>
<style lang="less" scoped>
.player {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: #5d289c;
}
.close i {
  color: #fff;
  font-size: 24px;
}
.header {
  padding: 15px;
}

.music-info {
  flex: 1;
  font-size: 20px;
}

.title {
  display: flex;
  text-align: center;
  color: #fff;
}

.left {
  font-size: 30px;
}

.ca {
  color: red;
}

.right {
  font-size: 30px;
}

.song-info {
  padding: 15px;
}

.song-info-img {
  text-align: center;
  margin-top: 30px;
}

.song-info-img img {
  width: 50%;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(50, 50, 50, 0.31);
}

.song-lrc {
  margin-top: 10px;
  min-height: 50px;
}

.iconbox {
  display: flex;
  position: relative;
  margin-top: 50px;
}

.iconbox i {
  flex: 1;
  color: #fff;
  font-size: 30px;
  text-align: center
}

.song {
  width: 100%;
  text-align: center;
  display: none;
}

.song audio {
  width: 80%;
}

.active {
  color: #222;
}

.author {
  position: relative;
  font-size: 12px;
  color: #fff;
  margin-top: 15px;
}
.author::before,
.author::after {
  content: "";
  position: absolute;
  top: 52%;
  background: #ffffff;
  width: 20%;
  height: 0.5px;
}
.author::before {
  left: 15%;
}
.author::after {
  right: 15%;
}
</style>