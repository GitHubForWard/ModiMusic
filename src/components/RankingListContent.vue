<template>
  <div>
    <div class="ranking-list-contents">
      <p>魔笛音乐排行榜</p>
      <ul v-if="RankingData.length > 0">
        <li v-for="(items, index) in RankingData" :key="index">
          <router-link :to="{name:'SoaringList',params:{ListId:items.id}}" class="actives">
            <div>
              <img v-bind:src="items.coverImgUrl" alt>
            </div>
            <div>
              <ul>
                <li v-for="(item,index) in items.tracks" :key="index">
                  <span>{{ index + 1 }}</span>
                  <span>{{ item.first }}-{{ item.second }}</span>
                </li>
              </ul>
            </div>
          </router-link>
        </li>
      </ul>
      <div v-else>数据正在加载中...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RankingListContent",
  data() {
    return {
      RankingData: []
      
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:3000/toplist/detail")
      .then(res => {
        console.log(res.data.list[1].id)
        this.RankingData = res.data.list.slice(0, 4);
        // console.log(this.RankingData);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scoped>
.ranking-list-contents {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  margin-top: 16.5px;
  p {
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  ul {
    li {
      list-style: none;
      margin-bottom: 15px;
      .actives {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        > div:first-child {
          width: 32%;
          float: left;
          img {
            width: 100%;
          }
        }
        > div:nth-child(2) {
          width: 50%;
          height: 32%;
          float: left;
          //   background: orange;
          ul {
            width: 100%;
            margin-left: 8px;
            height: 120px;
            li {
              line-height: 40px;
              margin-bottom: 0;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              > span:first-child {
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
}
</style>