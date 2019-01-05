<template>
    <div>
        <TopNav />
        <Banner />
        <Tabs />
    </div>
</template>
<script>
import TopNav from "../components/TopNav";
import Banner from "../components/MusicLibrary/Banner";
import Tabs from "../components/Find/Tabs";
export default {
    name:"Find",
    components: {
    TopNav,
    Banner,
    Tabs
    }
}
</script>
<style lang="less" scoped>

</style>