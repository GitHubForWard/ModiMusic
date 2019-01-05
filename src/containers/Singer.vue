<template>
    <div class="big-box">
        <div class="QQQ">
             
        <p>歌手</p>
        </div>
        <Option />
        <Popularity />
    </div>
</template>
<script>
import Option from "../components/Option"
import Popularity from "../components/Popularity"

export default {
    name: "Singer",
    data() {
        return {}
    },
    components:{
        Option,
        Popularity
    }
}
</script>
<style scoped lang="less">
    .QQQ{
        width: 100%;
        height: 60px;
        background-color: #642598;
        font-size: 18px;
        color: #eee;
        text-align:center;
        // margin-right: 10px;
        line-height: 60px;
        p{
            width: 100px;
            height: 60px;
            // margin: 0 auto;
            margin-left: 110px;
        }
    }
    .big-box{
         text-align: center;
    }
    
</style>