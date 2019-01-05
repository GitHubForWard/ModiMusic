<template>
    <div class="big-box">
          <div class="header">
                <a  @click="prev"><i class="el-icon-arrow-left"></i></a>
                <p>电台分类</p>
           </div>
     
       <!-- <p>{{this.$route.params.radioid}}</p> -->
       <div class="center-box" v-for="(item,index) in radio" :key="index">
           <p>{{ item.name }}</p> 
          <!-- <div></div> -->
          <img :src="item.picUrl">
          <p>{{item.desc}}</p>
          <br>
          <br>
          <hr>
       </div>
    </div>
</template>
<script>
export default {
    name:"Radio",
    data(){
        return{
            radio:{}
        }
    },
    methods:{
        prev(){
            window.history.go(-1)
        }
    },
    mounted() {
       if(this.$route.params.radioid){
           this.$axios.get("http://localhost:3000/dj/recommend/type",{
               params:{
                   type:this.$route.params.radioid
               }
           })
           .then(res =>{
           console.log(res.data.djRadios)
           this.radio = res.data.djRadios
           })
           .catch(new Error(error))
       }
       
    }
}
</script>
<style scoped lang="less">

    .center-box{
        width: 85%;
        height: 85%;
        padding: 10px;
        background: #fff;
        // margin: 0 auto;
        img{
            width: 50%;
            height: 50%;
            margin-top: 20px;
            margin-left: 78px;
            margin-bottom: 20px;
        }
        p{   
            // width: 70%;
            //  height: 70%;
            text-align: center;
        }
    }
    .header{
        width: 100%;
        height: 50px;
        text-align: left;
        background-color: #612499;
        color: #fff;
        overflow: hidden;
        i{
            // background-color: #612499;
            color: #fff;
            font-size: 30px;
            margin-left: 10px;
            margin-top: 10px;
        }
        p{
             width: 90%;
        background-color: #612499;
        color: #fff;
        margin-left: 160px;
        margin-top: -25px;

        }
    }
    .big-box{
        width: 100%;
        height: 100%;
    }
</style>