<template>
  <div class="list">
      <h3 class="title">来预约直播吧</h3>
      <ul>
          <li v-for="(item,index) in result" :key="index">
              <div class="img"><img :src="item.picUrl" alt=""></div>
              <div class="right">
                  <p class="name">{{item.name}}</p>
                  <p></p>
                  <p class="time">12 - 02 09:00 5.4万人已经预约</p>
                  <a href="#">+关注</a>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "LiveBroadcastList",
  data(){
      return{
          result:[]
      }
  },
  mounted() {
      this.$axios.get('http://localhost:3000/personalized')
      .then(res => {
          console.log(res.data.result)
        this.result = res.data.result.slice(0,3);
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
    margin-bottom: 10px;
}
.title{
    padding: 16px 10px 13.5px;
}
.img{
    width: 90px;
    height: 90px;
}
.img img {
    width: 100%;
    height: 100%;
}
ul{
    padding: 0 10px;
}
li{
    position: relative;
    padding-bottom: 15px;
}
li>div:nth-child(2){
    position: absolute;
    top: 0;
    left: 97px;
}
.name{
    display: block;
    width: 175px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    margin-top: 16px;
    font-weight: 700;
}
.time{
    font-size: 12px;
    margin-top: 20px;
}
.right>a{
    border: 1px solid #333;
    padding: 5px 10px;
    border-radius: 25px; 
    position: absolute;
    top: 25px;
    right: -80px;
}
</style>