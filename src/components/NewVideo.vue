<template>
    <div class="new">
        <div class="top">
            <h3>{{title}}</h3>
            <i class="el-icon-arrow-right"></i>
        </div>
        <div v-if="data.length>0">
            <ul>
                <li>
                    <router-link to="/album" v-for="(item,index) in data" :key="index">
                        <img :src='item.cover' alt="">
                        <p>{{item.name}}-{{item.artistName}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div v-else>数据正在加载中。。。</div>
    </div>
</template>
<script>

export default {
    name:"NewVideo",
    data(){
        return{
            data:[]
        }
    },
    props:{
        title:{
            type:String,
            default:""
        }
    },
    mounted() {
      this.$axios.get('http://localhost:3000/mv/first',{
          params:{
              limit:6
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
}
</script>
<style lang="less" scoped>
.new{
    background: #fff;
    .top{
        position: relative;
        h3{
            padding: 14px 10px;
            font-weight: 700;
            font-size: 18px;
        }
        i{
            position: absolute;
            top: 18px;
            right: 5px;
            font-size: 20px;
        }
    }
    
    div{
        ul{
            li{
                display: flex;
                flex-wrap:wrap;
                a{
                    flex: 0 0 49%;
                    color: #333;
                    margin-bottom: 10px;
                    p{
                        padding: 0 3px;
                        font-size: 12px;
                        display: block;
                        width: 100%;
                        height: 16px;
                        margin-top: 9px;
                        overflow: hidden;
                        span{
                            display: block;
                            width: 100px;
                            color: rgb(117, 116, 116);
                            a{
                                border: 1px solid #333;
                                padding: 5px 8px;
                                border-radius: 12px; 
                            }
                        }
                        .money{
                            width: 100%;
                            position: relative;
                            a{
                                position: absolute;
                                top: -15px;
                                right: 0;
                            }
                        }
                        
                    }
                    img{
                        width: 100%;
                        height: 103.5px;
                    }
                }
                a:nth-child(odd){
                    margin-right: 2%
                }
                
            }
        }
    }
}
</style>