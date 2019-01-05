<template>
    <div>
        <ul>
            <li><a>地区</a></li>
            <li><a>内地</a></li>
            <li><a>港台</a></li>
            <li><a>欧美</a></li>
            <li><a>日本</a></li>
            <li><a>韩国</a></li>
        </ul>
        <ul>
            <li><a>种类</a></li>
            <li><a>流行</a></li>
            <li><a>嘻哈</a></li>
            <li><a>民谣</a></li>
            <li><a>电子</a></li>
            <li><a>摇滚</a></li>
        </ul>
        <ul>
            <li><a>地区</a></li>
            <li><a>内地</a></li>
            <li><a>港台</a></li>
            <li><a>欧美</a></li>
            <li><a>日本</a></li>
            <li><a>韩国</a></li>
        </ul>
        <span>查看更多</span>
    </div>
</template>
<script>
export default {
    name:"Option",
    data(){
        return{
          
        }
    }
    
}
</script>
<style scoped lang="less">
div{
    width: 100%;
    height: 190px;
    background: #fff;
    overflow: hidden;
    margin-bottom: 15px;
    span{
        font-size: 15px;
    }
}
      ul{
          margin-bottom:10px;
        //   padding: 15px;
        padding-left: 15px;
        padding-top: 5px;
        overflow: hidden;
        //  li{
        //   float: left;
        //   font-size: 15px;
        //   margin-right: 15px;
        //   margin-top: 5px;
        // //   color: aqua;

        //   }

      }
      ul>li{
          float: left;
          font-size: 15px;
          margin-right: 15px;
          margin-top: 5px;
      }
      ul>li:first-child{
        //   font-weight: 800;
          font-size: 20px;
          margin-bottom: 5px;
      }
     
</style>