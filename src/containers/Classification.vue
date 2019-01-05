<template>
    <div>
        <Headler title="专辑分类" />
        <List />
        <NewArrival title="最新上架" />
    </div>
</template>
<script>
import Headler from '../components/Headler'
import List from '../components/Classification/List'
import NewArrival from '../components/Album/NewArrival'
export default {
    name:"Classification",
    components: {
        Headler,
        List,
        NewArrival
    }
}
</script>
<style lang="less" scoped>
</style>