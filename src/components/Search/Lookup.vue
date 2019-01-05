<template>
    <div class="list">
        <div class="wrap">
            <ul>
                <li @click='prev'>❌</li>
                <li>
                    <i class="el-icon-search"></i>
                    <input type="text" 
                    @keyup.enter="onSubmit" 
                    v-model="msg" 
                    placeholder="搜索音乐、歌词、歌单">
                </li>
                <li>语音</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"Lookup",
    data(){
        return{
            msg:'',
            songs:[]
        }
    },
    methods:{
        prev(){
            this.$router.go(-1)
        },
        onSubmit(){
            this.$axios.get("http://localhost:3000/search/suggest",{
                params:{
                    keywords:this.msg
                }
            })
            .then(res => {
                // console.log(res.data.result.songs)
                this.songs = res.data.result.songs
                this.$emit("onMsg",this.songs)
            })
            .catch(error => {
                console.log(new Error(error));
            });
            
        }
    }
}
</script>
<style lang="less" scoped>
.list{
    width: 100%;
    background: #632798;
    .wrap{
        padding: 0 10px;
        ul{
            display: flex;
            li{
                flex:1;
                text-align: center;
                line-height: 42.5px;
                color: #fff;
                font-size: 14px;
                position: relative;
                input{
                    width: 197px;
                    height: 25px;
                    background: #fff;
                    padding-left: 23.5px;
                }
                i{
                    position: absolute;
                    top: 12px;
                    left: 1px;
                    font-size: 20px;
                    color: #333;
                }
            }
            li:nth-child(1){
                text-align: left;
            }
            li:nth-child(3){
                text-align: right;
            }
        }
    }
}
</style>