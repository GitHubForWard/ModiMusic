<template>
    <div>
        <!-- AA -->
        <div class="name-box">
             <a><i class="el-icon-arrow-left"></i></a>

            <span>{{this.$route.params.names}}</span>
           <!-- {{this.$route.params.names}} -->
        </div> 
        <div class="BOX">
          <div class="left">
          <img :src="this.$route.params.pic">
          
          </div>
          <div class="cos">
              <img :src="this.$route.params.pic">
          </div>
          <!-- <div class="right">{{"id:"+this.$route.params.musicid}}</div> -->
       <!-- {{this.$route.params.pic}} -->
           
       </div>
       <br>
       <!-- {{musicid}} -->
        <!-- <Picture /> -->
        <!-- <img :src="this.$route.params.pic"/> -->

        <!-- <Bigpicture /> -->
        <!-- <img :src="item.img1v1Url" alt=""> -->
        <div class="www">
        <router-link :to="{name:'Playing',params:{yueid:item.id}}"
        v-for="(item,index) in haha"
        :key="index"
        >
        {{index+1+"  "+" &nbsp;"+item.name}}
        <hr>

        <!-- {{item.no}} -->
        </router-link>
        </div>
        <!-- <List /> -->
    </div>
</template>
<script>
// import Bigpicture from "../components/Bigpicture"
import List from "../components/List"
export default {
    name: "Personal",
    data() {
        return {
         haha:{}
        }
    },
    mounted() {
        if(this.$route.params.musicid){
            this.$axios.get("http://localhost:3000/artists",{
                params:{
                    id:this.$route.params.musicid
                }
            })
            .then(res =>{
                  console.log(res.data);
                  
               this.haha = res.data.hotSongs
            })
            .catch(new Error(error))
        }
    },
        //  mounted() {
        //      this.$axios.get("http://localhost:3000/artists?id=8103")
        // .then(data => {
        //     // console.log(data.data.list.artists);
        //    console.log(data.data);
           
        //    this.artists = data.data.list.artists
        // })
        // .catch(error => {
        //     console.log(error);
            
        //   })
        // },
    // components: {
    //     Picture
    // }
    // props:{
    //   musicid:{
    //       type:String,
    //       default:''
    //   }
    // },
    components:{
        // Bigpicture,
        List
    }
}
</script>
<style scoped lang="less">
    .name-box{
        background-color:#642598;
        height: 60px;
        line-height: 60px;
        color: #fff;
        text-align: center;
        font-size: 22px;
         a{
            i{
                font-size: 25px;
                color: #fff;
                // margin-top: 10px;
                margin-left: -175px;
            }
          }
          span{
                  margin-right: 18px;
          }
    }
    .BOX{
        width: 100%;
        height: 250px;
        // margin-bottom: 5px;
        overflow: hidden;
    }
    .left{
        width: 100%;
        height: 100%;
        float: left;
        overflow: hidden;
        // background-color: #e4c7a7;
        // filter: blur(30px);
        img{
            width: 100%;
            height: 100%;
            // margin-left: 15px;
            // margin-top: 15px;
            filter: blur(30px);
        }
      
    }
    .cos{
          width: 150px;
          height: 150px;
          // background-color: aquamarine;
          // z-index: 999;
          float: left;
          position: absolute;  
          top: 104px;
          left: 13px;
         img{
              width: 100%;
              height: 100%;
              z-index: 555;
         }
      }
    .right{
        width: 30%;
        height: 100%;
        padding: 10px;
        float: right;
        text-align: center;
        font-size: 18px;
        line-height: 120px;
        box-sizing: border-box;
        background-color: #fff;
    }
  
    .www{
        background-color: #fff;
        padding: 20px;
        a{
        font-size: 20px;
        display: block;
        margin-bottom: 15px;
        margin-top: 15px;
         }
    }
    hr{
        height: 0.00001px;
        font-weight:none;
    }
</style>