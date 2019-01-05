<template>
  <div class="lrcContainer">
    <!-- 当前时间和下一句要播放的时间的时间差是当前文本显示的时长 -->
    <!-- <p>{{ lrcData[parseInt(currentTime)] }}</p> -->
    <!-- 
      10,12,17,20
      
      14

      12<14<17

    -->
    <div class="lrc" ref="lrc">
      <p
        class="lrc-p"
        :class="{'active':keyArr[index] < currentTime &&  keyArr[index+1] > currentTime}"
        v-for="(item,key,index) in lrcData"
        :key="index"
      >{{ item }} {{ getScrollTop(index) }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "LRC",
  data() {
    return {
      lrcData: {},
      keyArr: []
    };
  },
  props: {
    musicid: {
      type: [String, Number],
      required: true
    },
    currentTime: {
      type: [String, Number],
      default: 0
    },
    durationTime: {
      type: [String, Number],
      default: 0
    }
  },
  mounted() {
    if (this.musicid) {
      this.$axios 
      .get("http://localhost:3000/lyric", {
        params: {
          id: this.musicid
        }
      })
        .then(res => {
          this.setLRCData(res.data);
        })
        .catch(error => new Error(error));
    }
  },
  computed: {
    getAllKey() {
      for (var i in this.lrcData) {
        this.keyArr.push(i);
      }
    }
  },
  methods: {
    setLRCData(data) {
      // 歌词转化
      var lyrics = data.lrc.lyric.split("\n");
      var lrcObj = {};
      for (let i = 0; i < lyrics.length; i++) {
        var lyric = decodeURIComponent(lyrics[i]);
        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
        var timeRegExpArr = lyric.match(timeReg); //test
        if (!timeRegExpArr) continue;
        var clause = lyric.replace(timeReg, "");
        for (var k = 0, h = timeRegExpArr.length; k < h; k++) {
          var t = timeRegExpArr[k];
          var min = Number(String(t.match(/\[\d*/i)).slice(1)), // parseInt  parseFloat
            sec = Number(String(t.match(/\:\d*/i)).slice(1));
          var time = min * 60 + sec;
          lrcObj[time] = clause;
        }
      }
      this.lrcData = lrcObj;
      this.getAllKey();
    },

    // 自动滚动
    getScrollTop(index){
      if(this.keyArr[index] < this.currentTime &&  this.keyArr[index+1] > this.currentTime){
        // 符合滚动条件
        this.$refs.lrc.style.top = -((index-2)*30)+"px"
      }
    }
  }
};
</script>
<style scoped>
.active {
  color: red;
}

.lrcContainer {
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
}

.lrc {
  width: 100%;
  position: absolute;
  top: 0;
  color: #fff;
}

.lrc-p {
  height: 30px;
  line-height: 30px;
  color: #fff;
}

.up30 {
  margin-top: -30px;
}
</style>

