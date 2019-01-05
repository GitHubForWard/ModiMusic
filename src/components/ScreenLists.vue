<template>
  <div class="list">
      <div>
          <ul>
              <li>总榜单</li>
              <li>内地</li>
              <li>港台</li>
              <li>欧美</li>
              <li>韩国</li>
              <li>日本</li>
          </ul>
      </div>
      <div class="img"><img :src="result" alt=""></div>
  </div>
</template>

<script>
export default {
  name: "ScreenLists",
  data(){
      return{
          result:[]
      }
  },
  mounted() {
      this.$axios.get('http://localhost:3000/personalized/mv')
      .then(res => {
        //   console.log(res.data.result)
        this.result = res.data.result[1].picUrl;
      })
      .catch(error => {
        console.log(new Error(error));
      });
    }
};
</script>

<style scoped>
.list{
    background: #fff;
}
ul{
    display: flex;
}
li{
    flex: 1;
    padding: 14px 0;
}
.img{
    width: 100%;
    height: 175px;
    overflow: hidden;
}
</style>