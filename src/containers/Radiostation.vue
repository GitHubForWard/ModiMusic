<template>
    <div class="radio">
        <!-- 标签页属性 v-model="activeName" -->
        <div class="header">  电台分类</div>
        <el-tabs  stretch="boolean" v-model="activeName" >
            <el-tab-pane label="电台分类" name="first">
                <router-link class="one" 
                :to="{name:'Radioplay',params:{radioid:item.id}}"
                v-for="(item,index) in artist"
                :key="index">
                 <!-- <img :src="item.pic84x84IdUrl" alt>
                {{item.name}}
                {{item.id}} -->
                  <!-- {{index}} -->
                 <!-- <ul> -->
                   <div >
                    <img :src="item.pic84x84IdUrl" alt>
                    {{item.name}}
                    
                   <!-- {{item.id}} -->

                   </div>
                <!-- </ul> -->
                
              <br>
              <br>
              <!-- <hr>       -->
                </router-link>
      
            </el-tab-pane>
            <el-tab-pane label="电台排行" name="second">
                 <div class="paihang">排行榜</div>
                 <br>
                 <br>
                <router-link class="one" 
                :to="{name:'Radioplay',params:{radioid:item.id}}"
                v-for="(item,index) in artist"
                :key="index">
                <ul>
                   <div class="box">
                       {{index+1+"=>"}}
                    <img :src="item.pic84x84IdUrl" alt>
                    {{item.name}}
                    <!-- {{item.id}} -->

                   </div>
                </ul>
                
                 
                
                
              <br>
              <br>
              <!-- <hr>       -->
                </router-link>
            </el-tab-pane>
            <!-- <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
        
        
        </el-tabs>

        
    </div>
</template>
<script>
import Radio1 from '../components/Radio1'
 export default {
    name:"Radiostation",
    data() {
      return {
        activeName: 'second',
        artist:[]
      };
    },
    mounted() {
        this.$axios.get("http://localhost:3000/dj/catelist")
        .then(data => {
            console.log(data.data)
            this.artist = data.data.categories
        })
        .catch(error => {
            console.log(error);
            
        })
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
        Radio1
    }
  };
</script>
<style scoped lang="less">
.header{
    width: 100%;
    height: 50px;
    background-color: #612499;
    line-height: 50px;
    text-align: center;
    color: #fff;
    a{
        color:#fff;
        font-size: 25px;
        // display: inline-block;
        border-bottom: 1px solid #000;
        margin-left: 70px;
    }
}
.radio{
    background-color: #ffffff;
}
img{
    width: 30px;
    height: 30px;
    margin-right: 20px;
}
.one{
    margin-bottom: 10px;
}
hr{
    height: 0.01px;;
}
.paihang{
    // text-align: center;
    font-weight: 400;
    font-size: 20px;
    // border-bottom: 1px solid #000;
    padding:  0 140px 0;
    color: #612499;
}
.box{
    padding: 0 70px;
    border-bottom: 0.5px solid #810bf7;
}
ul{
    margin-right: 50px;
    padding:0 15px;
    // padding-bottom: 10px;
}
</style>
