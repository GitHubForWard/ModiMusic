<template>
    <div class="head">
        <ul>
            <li @click='prev'><i class="el-icon-arrow-left"></i></li>
            <li>{{title}}</li>
            <li><i class="el-icon-more"></i></li>
        </ul>
    </div>
</template>
<script>

export default {
    name:"Headler",
    props:{
        title:{
            type:String,
            default:""
        }
    },
    methods:{
        prev(){
            this.$router.go(-1)
        }
    },
}
</script>
<style lang="less" scoped>
.head{
    width: 100%;
    background: #632798;
    ul{
        padding: 0 10px;
        display: flex;
        li{
            flex: 1;
            color: #fff;
            text-align: center;
            line-height: 43px;
            font-size: 18px;
            a{
                color: #fff;
            }
        }
        li:nth-child(1){
            text-align: left;
        }
        li:nth-child(3){
            text-align: right;
            font-size: 12px
            
        }        
    }
}
</style>