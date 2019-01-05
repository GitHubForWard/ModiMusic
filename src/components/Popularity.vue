<template>
    <div class="big-box">
        <p>人气歌手</p>
     
        <div v-if="artists.length>0" class="music-people">
          <router-link :to="{name:'Personal',params:{musicid:item.id,names:item.name,pic:item.picUrl}}" 
          v-for="(item,index) in artists"
          :key="index"
          >
          
          <div class="img1">
              <img :src="item.picUrl" alt>
              <div class="time">
              {{item.name+">"}}
              {{item.id}}
              </div>
              <div class="number">
              {{"新歌曲"+item.musicSize+"首"}}
              </div>

          </div>
          
          </router-link>
        </div>
        <div v-else>正在加载数据...</div>
    </div>
</template>
<script>
export default {
    name:"Popularity",
    data(){
        return{
           artists:[]
        }
    },
    // props:{
    //     title:{
    //         type:String,
    //         default:"人气歌手"
    //     },
    //     url:{
    //         type:String,
    //         required: true
    //     },
    //     params: {
    //         type:Object,
    //         required:true
    //     }
    // },
    mounted() {
        this.$axios.get("http://localhost:3000/toplist/artist")
        .then(data => {
            // console.log(data.data.list.artists);
        //    console.log(data.data);
           
           this.artists = data.data.list.artists
        })
        .catch(error => {
            console.log(error);
            
        })
    }
}
</script>
<style scoped lang="less">
    .big-box{
        width: 100%;
        height: 5000px;
        background-color: #ffffff;
        overflow: hidden;
       p{
           text-align: left;
           margin-top: 10px;
           margin-left: 10px;
           font-size: 18px;
       }
    }

    .img1{
        width: 100%;
        height: 100px;
        padding-left: 10px;
        padding-top: 10px;
        border-bottom: 1px solid #e3e3e3;
        img{
            float: left;
            width: 100px;
            height: 100px;
        }
        .time{
            float: right;
            width: 275px;
            height: 40px;
            line-height: 80px;
           font-size: 20px;
           text-align:center;
           margin-bottom: 10px;
            // margin-left: -20px;
        }
        .number{
            margin-top: 10px;
            float: right;
            width: 275px;
            height: 40px;
            color:#ff0000;
        }
    }
</style>