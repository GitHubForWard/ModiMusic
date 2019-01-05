<template>
    <div>
        <Headler title="已购" />
        <Tabs />
    </div>
</template>
<script>
import Headler from '../components/Headler'
import Tabs from '../components/Purchased/Tabs'
export default {
    name:"Purchased",
    data(){
        return{
        }
    },
    components: {
        Headler,
        Tabs
    }
}
</script>
<style lang="less" scoped>
</style>