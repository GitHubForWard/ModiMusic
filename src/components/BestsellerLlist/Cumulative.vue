<template>
    <div>
        <ul>
            <li v-for="(item,index) in tracks" :key="index">
                <div><img :src="item.al.picUrl" alt=""></div>
                <div class="font">
                    <p>{{item.name}}</p>
                    <p>
                        <span v-for="(items,index) in item.ar" :key="index">{{items.name}}</span>
                    </p>
                    <p>{{tracks.index}}</p>
                    <p>{{item.v}}万张</p>
                    <p class="index">{{index+1}}</p>
                    <a href="#">购买</a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Cumulative",
    data(){
        return{
            tracks:[]
            
        }
    },
    mounted() {
      this.$axios.get('http://localhost:3000/top/list?idx=1')
      .then(res => {
        //   console.log(res.data.playlist.tracks)
        this.tracks = res.data.playlist.tracks.slice(0,6);
      })
      .catch(error => {
        console.log(new Error(error));
      });
    }
}
</script>
<style lang="less" scoped>
div{
    padding: 5px 5px 0;
    ul{
        li{
            width: 100%;
            margin-bottom: 8px;
            display: flex;
            div{
                flex:0 0 50%;
                img{
                    width: 120px;
                    height: 120px;
                }
            }
            .font{
                position: relative;
                margin-left: -65px;
                a{
                    color: #333;
                    border: 1px solid #333;
                    padding: 5px 8px;
                    border-radius: 14px; 
                    position: absolute;
                    bottom: 0;
                    right: -38px;
                }
                .index{
                    position: absolute;
                    top: 36px;
                    right: -20px;
                    color: #C890F5;
                    font-size: 35px;
                }
                p{
                    margin-top: 5px;
                    font-size: 12px;
                }
                p:first-child{
                    margin-top: 20px;
                }
            }
        }
    }
}
</style>