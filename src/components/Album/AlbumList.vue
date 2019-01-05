<template>
    <div class="listpic">
        <div class="pic"><img :src="album.blurPicUrl" alt=""></div>
        <div class="list">
            <ul>
                <li>
                    <router-link to="/bestsellerLlist">
                        <i class="el-icon-bell"></i>
                        <p>畅销榜</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/specialSale">
                        <i class="el-icon-edit"></i>
                        <p>特卖场</p>
                    </router-link>
                </li>
                <li>
                    <router-link to="/classification">
                        <i class="el-icon-edit-outline"></i>
                        <p>分类</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>

export default {
    name:"AlbumList",
    data(){
        return{
            album:""
        }
    },
    mounted() {
      this.$axios.get('http://localhost:3000/album',{
          params:{
              id:32311
          }
      })
      .then(res => {
        this.album = res.data.album;
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
            margin-top: -80px;
        }
    }
    .list{
        padding: 15px 20px 17px;
        margin-bottom: 10px;
        ul{
            display: flex;
            li{
                flex: 1;
                text-align: center;
                a{
                    color: #333;
                }
                i{
                    font-size: 32px;
                    margin-bottom: 8px;
                }
            }
        }
        
    }
}
</style>