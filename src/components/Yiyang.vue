<template>
    <div class="tupian">
        <a @click="prev"><i class="el-icon-arrow-left"></i></a>
        <!-- {{"id:"+this.$route.params.yueid}} -->
        <div class="picture" v-for="(item,index) in BB" :key="index">
            <p>{{item.name}}</p>
            <p>{{item.ar[0].name}}</p>
            <img :src="item.al.picUrl" />
        </div>
        
        <!-- el-icon-close -->
        
    </div>
    
</template>
<script>
export default {
    name:"Playing",
    data() {
        return {
            BB:{}
        }
    },
    methods:{
        prev(){
            window.history.go(-1)
        }
    },
    mounted() {
        if(this.$route.params.yueid){
        
            this.$axios.get("http://localhost:3000/song/detail",{
                params:{
                    ids:this.$route.params.yueid
                }
            })
            
            .then(res =>{
                console.log(res.data)
                this.BB = res.data.songs
            })
            .catch(new Error(error))
        }
        // if(this.$route.params.yueid){
        //      this.$axios.get("http://localhost:3000/song/detail",{
        //         params:{
        //             ids:this.$route.params.yueid
        //         }
        //     })
            
        //     .then(res =>{
        //         console.log(res.data)
        //         this.BB = res.data.data
        //     })
        //     .catch(new Error(error))
        // }
    }

}
</script>
<style scoped lang="less">

    .picture{
        width: 50%;
        height: 50%;
        margin-left: 80px;
        overflow: hidden;
        // background-color: #fff;
        p{
            text-align: center;
            // font-size: 22px;
            margin-bottom: 10px;
            // margin-top: 20px;
            color: #fff;
        }
        p:last-child{
            font-size: 18px;
            margin-top: 5px;
        }
        p:first-child{
            font-size: 22px;
            margin-top: 15px;
        }
    }
    .tupian{
        background-color: #b037ec;
         a{
            i{
                font-size: 35px;
                color: #fff;
                margin-top: 10px;
                margin-left: 5px;
            }
    }
    }
   
</style>