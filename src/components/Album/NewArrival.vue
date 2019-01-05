<template>
    <div class="new">
        <h3>{{title}}</h3>
        <div v-if="album.length>0">
            <ul>
                <li>
                    <router-link to="/album" v-for="(item,index) in album" :key="index">
                        <img :src='item.picUrl' alt="">
                        <p>{{item.name}}</p>
                        <p>
                            <span>{{item.artists[0].name}}</span>
                            <span class="money">
                                ￥30
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
    name:"NewArrival",
    data(){
        return{
            album:[]
        }
    },
    props:{
        title:{
            type:String,
            default:"最新"
        }
    },
    mounted() {
      this.$axios.get('http://localhost:3000/top/album',{
          params:{
              offset:0,
              limit:4
          }
      })
      .then(res => {
        this.album = res.data.albums;
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
    h3{
        padding: 14px 10px;
        font-weight: 700;
        font-size: 18px;
    }
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
                    p:nth-child(2){
                        display: block;
                        width: 100%;
                        height: 16px;
                        margin-top: 9px;
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