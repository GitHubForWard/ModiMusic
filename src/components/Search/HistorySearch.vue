<template>
    <div class="history">
        <div class="title">
            <h3>{{ title }}</h3>
            <span>清空历史</span>
        </div>
        <ul>
            <li v-for="(item,index) in songs" :key="index">
                {{item.name}}
                <i>✖</i>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"HistorySearch",
    props:{
        title: {
            type: String,
            default: "历史"
        },
        songs: {
            type: [String,Number],
            default: ""
        },
    },
    components: {
    }
}
</script>
<style lang="less" scoped>
.history{
    background: #fff;
    .title{
        display: flex;
        padding: 0 10px;
        h3{
            flex: 1 1 0%;
            display: block;
            font-weight: 700;
            font-size: 20px;
            color: #333;
            padding-top: 16px;
            padding-bottom: 13.5px;
        }
        span{
            font-size: 16px;
            padding-top: 18px;
            padding-bottom: 13.5px;
        }
    }
    ul{
        padding: 0 10px;
        li{
            display: flex;
            padding-bottom: 19px;
            i{
                flex: 1 1 0%;
                display: block;
                text-align: right;
            }
        }
    }
}
</style>