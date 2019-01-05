<template>
    <div>
        <ul>
            <li v-for="(item,index) in djRadios" :key="index">
                <div class="top">
                    <img :src="item.dj.avatarUrl" alt="">
                    <span>{{item.dj.nickname}}</span><span>发表文章</span>
                </div>
                <div class="center">
                    <p>{{item.dj.signature}}</p>
                    <img :src="item.dj.backgroundUrl" alt="">
                </div>
                <div class="foot">
                    <span>
                        <i class="el-icon-star-off"></i>
                    </span>
                    <span>
                        <i class="el-icon-edit-outline"></i>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name:"Dynamic",
    data(){
        return{
            djRadios:[]
        }
    },
    mounted() {
      this.$axios.get("http://localhost:3000/dj/recommend")
      .then(res => {
        // console.log(res.data.djRadios)
        this.djRadios = res.data.djRadios;
      })
      .catch(error => {
        console.log(new Error(error));
      });
    }
}
</script>
<style lang="less" scoped>
.top{
    img{
        width: 50px;
        height: 50px;
    }
    span:nth-child(2){
        font-size: 16px;
        margin-left: 10px;
    }
    span:nth-child(3){
        font-size: 10px;
        margin-left: 3px;
    }
}
.center{
    img{
        width: 100%;
        height: 172.5px;
    }
    p{
        margin: 11px 0 9px;
        font-size: 12px;
        height: 14px;
        width: 100%;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
}
.foot{
    text-align: right;
    margin-top: 7px;
}
ul{
    padding: 5px 10px 0;
}
</style>