<template>
    <div class="listpic">
        <div class="pic"><img :src="data.cover" alt=""></div>
        <div class="list">
            <ul>
                <li>
                    <router-link to="/latestVideo">
                        <i class="el-icon-bell"></i>
                        <p>最新视频</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/hotVideo">
                        <i class="el-icon-edit"></i>
                        <p>最热视频</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/screenList">
                        <i class="el-icon-edit-outline"></i>
                        <p>视频榜单</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/liveBroadcast">
                        <i class="el-icon-news"></i>
                        <p>歌手直播</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
    name:"VideoList",
    data(){
        return{
            data:""
        }
    },
    mounted() {
      this.$axios.get('http://localhost:3000/mv/detail',{
          params:{
              mvid:5436712
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
.listpic{
    margin-bottom: 10px;
    background: #fff;
    .pic{
        width: 100%;
        height: 175px;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
    .list{
        padding: 15px 10px 17px;
        margin-bottom: 10px;
        ul{
            display: flex;
            list-style: none;
            li{
                flex: 1;
                text-align: center;
                list-style: none;
                a{
                    color: #333;
                    list-style: none;
                }
                i{
                    font-size: 32px;
                    margin-bottom: 8px;
                }
                p{
                    font-size: 15px;
                }
            }
        }
        
    }
}
</style>