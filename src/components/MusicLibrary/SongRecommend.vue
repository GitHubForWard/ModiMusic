<template>
    <div class="collection-block">
      <div class="block-padding">
        <div class="title">
            <h3>{{ title }}</h3>
        </div>
        <div class="list clearfix" v-if="results.length > 0 ">
            <router-link 
            to="/" 
            v-for="(item,index) in results" 
            class="item"
            :class="{'clear-padding': index%3 !== 1}"
            :key="index">
            <div class="img-wrapper">
                <img :src="item.picUrl" alt>
            </div>
            <div class="main">{{ setMusicTitle(item.name) }}</div>
            </router-link>
        </div>
        <div v-else>正在加载数据...</div>
      </div>
    </div>
</template>
<script>
export default {
    name:"SongRecommend",
    data(){
        return{
            results:[]
        }
    },
    props: {
        title: {
        type: String,
        default: "新歌速递"
        }
    },
    methods:{
        setMusicTitle(title){
            if(title.length >8 ){
                return title.substring(0,8)+"..."
            }
            return title;
        }
    },
    mounted() {
      this.$axios.get('http://localhost:3000/personalized')
      .then(res => {
        this.results = res.data.result.slice(0,6);
      })
      .catch(error => {
        console.log(new Error(error));
      });
    }
}
</script>
<style lang="less" scoped>
.collection-block{
  background-color: #f8f8f8;
  padding: 5px 0;
}

.block-padding{
  padding: 10px 0;
  background-color: #fff;
}

.title{
  display: flex;
  margin: 16px 0 12px 10px;
}

.title h3{
  flex: 1 1 0%;
  display: block;
  font-weight: 700;
  font-size: 20px;
}

.list{
  width: 100%;
}

.list .item{
  float: left;
  width: 31.5%;
  padding: 0 10px;
  margin-bottom: 10px;
}

.clear-padding{
  padding: 0 !important;
}

.main{
  margin-top: 4px;
  font-size: 12px;
  display: block;
  height: 16px;
}

a{
    color: #333;
}

.img-wrapper>img{
  width: 117.5px;
  height: 117.5px;
}

.gray{
  margin-top: 4px;
  font-size: 12px;
  color: #999;
}

.btn-more{
  font-size: 12px;
  text-align: right;
  color: #333;
}
</style>