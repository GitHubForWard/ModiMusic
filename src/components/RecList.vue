<template>
  <div class="rec-container">
    <h5>推荐歌单</h5>
    <ul>
      <li v-for="(items, index) in recData1" :key="index">
        <router-link :to="{ name:'SongListDetails',params:{id:items.id} }">
          <img :src="items.picUrl" alt>
          <p>{{ items.name }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RecList",
  data() {
    return {
      recData1: []
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:3000/personalized")
      .then(res => {
        console.log(res.data.result.id);
        this.recData1 = res.data.result;
        // console.log(this.recData1);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scoped>
.rec-container {
  //   width: 100%;
  background: #fff;
  padding: 0 5px;
  padding-top: 10px;
  h5 {
    font-weight: 400;
    text-align: center;
    font-size: 20px;
  }
  > ul {
    width: 100%;
    li {
      width: 48%;
      float: left;
      list-style: none;
      margin-top: 10px;
      a {
        color: #333;
        text-decoration: none;

        img {
          width: 180px;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
}
li:nth-child(odd) {
  margin-right: 10px;
}
</style>