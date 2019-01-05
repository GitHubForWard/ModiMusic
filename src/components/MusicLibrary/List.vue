<template>
    <div class="list">
        <ul>
            <li>
                <router-link to="/">
                    <span><i>♥</i></span>
                    <p>歌手</p>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <span><i>♥</i></span>
                    <p>视频</p>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <span><i>♥</i></span>
                    <p>电台</p>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <span><i>♥</i></span>
                    <p>歌单</p>
                </router-link>
            </li>
            <li>
                <router-link to="/album">
                    <span><i>♥</i></span>
                    <p>专辑</p>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <span><i>♥</i></span>
                    <p>排行榜</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"List",
    components: {
    
    }
}
</script>
<style lang="less" scoped>
.list{
    width: 100%;
    background: #fff;
    margin-bottom: 10px;
    ul{
        padding: 15px 55px 18px;
        display: flex;
        -webkit-flex-wrap:wrap;
        flex-wrap: wrap; 
        li{
            flex: 1;
            text-align: center;
            a{
                display: block;
                font-size: 15px;
                color: #333;
               p{
                   margin-top: 13.5px;
                   width: 45px;
                }
                span{
                    display: block;
                    width: 30px;
                    height: 30px;
                }
            }
            
        }
        li:nth-child(2)>a,li:nth-child(5)>a{
             margin: 0 65px;
        }
        li:nth-child(4),li:nth-child(5),li:nth-child(6){
             margin-top: 16px;
        }
        
    }
}
a{
    color: #333;
}
</style>