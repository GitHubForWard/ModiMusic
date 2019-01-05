<template>
    <div class="new">
        <div v-if="list.length>0">
            <ul>
                <li>
                    <router-link to="/album" v-for="(item,index) in list" :key="index">
                        <img :src='item.picUrl' alt="">
                        <p>{{item.lastProgramName}}</p>
                        <p>
                            <span>{{item.name}}</span>
                            <span class="money">
                                <i>￥{{item.originalPrice}}</i>
                                <a href="#">购买</a>
                            </span>
                            
                        </p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div v-else>数据正在加载中。。。</div>
    </div>
</template>
<script>

export default {
    name:"My",
    data(){
        return{
            list:[]
        }
    },
    mounted() {
      this.$axios.get('http://localhost:3000/dj/paygift',{
          params:{
              offset:20,
              limit:10
          }
      })
      .then(res => {
        // console.log(res.data.data.list);
        this.list = res.data.data.list;
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
    div{
        ul{
            li{
                display: flex;
                flex-wrap:wrap;
                a{
                    flex: 0 0 49%;
                    color: #333;
                    p{
                        padding: 0 10px;
                        font-size: 12px;
                        span{
                            display: block;
                            width: 115px;
                            color: #757474;
                            white-space:nowrap;
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
                    p:nth-child(2){
                        display: block;
                        width: 150px;
                        height: 16px;
                        margin-top: 9px;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        white-space:nowrap
                    }
                    p:nth-child(3){
                        margin-top: 2px;
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