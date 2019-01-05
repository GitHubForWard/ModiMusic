<template>
    <div>
        <Head title="特卖场" />
        <Price />
    </div>
</template>
<script>
import Head from '../components/Head'
import Price from '../components/SpecialSale/Price'
export default {
    name:"SpecialSale",
    components: {
        Head,
        Price
    }
}
</script>
<style lang="less" scoped>

</style>