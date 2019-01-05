<template>
    <div>
        <TopNav />
        <Banner />
        <List />
        <SongRecommend title="歌单推荐"/>
    </div>
</template>
<script>
import TopNav from "../components/TopNav";
import Banner from "../components/MusicLibrary/Banner";
import List from "../components/MusicLibrary/List";
import SongRecommend from "../components/MusicLibrary/SongRecommend";
export default {
    name:"MusicLibrary",
    data(){
        return{
            
        }
    },
    components: {
    TopNav,
    Banner,
    List,
    SongRecommend
    }
}
</script>
<style lang="less" scoped>

</style>

