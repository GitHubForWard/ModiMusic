<template>
  <div>
      <ul>
          <li v-for="(item,index) in data" :key="index">
                <div class="top">
                    <span>第78期（11-3）</span>
                    <span>20：09 更新</span>
                </div>
                <div class="img"><img :src="item.cover" alt=""></div>
                <div class="foot">
                    <i class="el-icon-star-off"></i>
                    <i class="el-icon-edit-outline"></i>
                    <i class="el-icon-share"></i>
                </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: "HotVideos",
  data(){
      return{
          data:[]
      }
  },
  mounted() {
      this.$axios.get('http://localhost:3000/mv/first',{
          params:{
              limit:10
          }
      })
      .then(res => {
        //   console.log(res.data.data)
        this.data = res.data.data;
      })
      .catch(error => {
        console.log(new Error(error));
      });
    }
};
</script>

<style scoped>
ul{
    background: #fff;
    padding: 10px 10px 0;
}
li{
    margin-bottom: 15px;
}
.top{
    margin-bottom: 10px;
    position: relative;
    font-size: 14px;
}
.top span:nth-child(2){
    position: absolute;
    top: 0;
    right: 0;
}
.img{
    width: 100%;
    height: 172.5px;
    overflow: hidden;
}
.foot{
    text-align: right;
    margin-top: 10px;
}
.foot span{
    margin-left: 20px;
}
</style>