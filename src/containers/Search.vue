<template>
    <div>
        <Lookup @onMsg="getMsg" />
        <HotSearch title="热门搜索" />
        <HistorySearch title="历史搜索" :songs="songs" />
    </div>
</template>
<script>
import Lookup from "../components/Search/Lookup"
import HotSearch from "../components/Search/HotSearch"
import HistorySearch from "../components/Search/HistorySearch"
export default {
    name:"Search",
    data(){
        return{
            songs:""
        }
    },
    components: {
    Lookup,
    HotSearch,
    HistorySearch
    },
    methods: {
        getMsg(data){
            this.songs=data
            // console.log(data);
        }
    },
}
</script>
<style lang="less" scoped>

</style>