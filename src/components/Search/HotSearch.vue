<template>
    <div class="search">
        <h3>{{title}}</h3>
        <ul>
            <li v-for="(item,index) in hots" :key="index"><a href="#">{{item.first}}</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"HotSearch",
    data(){
        return{
            hots:[]
        }
    },
    props:{
        title: {
        type: String,
        default: "热门"
        }
    },
    mounted() {
      this.$axios.get('http://localhost:3000/search/hot')
      .then(res => {
        this.hots = res.data.result.hots;
      })
      .catch(error => {
        console.log(new Error(error));
      });
    }
}
</script>
<style lang="less" scoped>
.search{
    background: #fff;
    padding: 0 10px;
    margin-bottom: 10px;
    h3{
        font-weight: 700;
        font-size: 20px;
        color: #333;
        padding-top: 16px;
        padding-bottom: 13.5px;
    }
    ul{
        display: flex;
        -webkit-flex-wrap:wrap;
        flex-wrap: wrap; 
        justify-content: flex-start;
        li{
            flex: 0;
            text-align: center;
            line-height: 32px;
            margin-right: 10px;
            margin-bottom: 16px;
            
            a{
                display: block;
                width: 75px;
                height: 30px;
                color: #333;
                border: 1px solid #333;
                border-radius: 25px;
                font-size: 12px;
            }
        }
        li:last-child{
            padding-bottom: 40px;
        }
    }
    
}
</style>