<template>
    <div>
        <Head />
        <AlbumList />
        <NewArrival title="最新上架"/>
    </div>
</template>
<script>
import Head from '../components/Album/Head'
import AlbumList from '../components/Album/AlbumList'
import NewArrival from '../components/Album/NewArrival'
export default {
    name:"Album",
    components: {
        Head,
        AlbumList,
        NewArrival
    }
}
</script>
<style lang="less" scoped>

</style>