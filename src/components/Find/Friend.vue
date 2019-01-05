<template>
    <div>
        <ul>
            <li v-for="(item,index) in followeds" :key="index">
                <img :src="item.avatarUrl" alt="">
                <span>{{item.nickname}}</span>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name:"Friend",
    data(){
        return{
            followeds:[]
        }
    },
    mounted() {
      this.$axios.get('http://localhost:3000/user/followeds',{
          params:{
              uid:32953014
          }
      })
      .then(res => {
        // console.log(res.data.followeds)
        this.followeds = res.data.followeds;
      })
      .catch(error => {
        console.log(new Error(error));
      });
    }
}
</script>
<style lang="less" scoped>
ul{
    li{
        border-bottom: 1px solid #ccc;
        img{
            width: 40px;
            height: 40px;
            border-radius: 20px;
            margin: 5px 10px; 
        }
        span{
            color: #333;
            font-size: 15px;
        }
    }
}
</style>