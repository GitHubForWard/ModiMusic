<template>
    <div class="top">
        <div class="img"><img :src="img" alt=""></div>
        <div class="icon" @click="prev"><i class="el-icon-arrow-left"></i></div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        img:''
      }
    },
    components: {
    },
    methods:{
        prev(){
            this.$router.go(-1)
        }
    },
    mounted() {
      this.$axios.get('http://localhost:3000/top/list?idx=1')
      .then(res => {
        this.img = res.data.playlist.coverImgUrl;
      })
      .catch(error => {
        console.log(new Error(error));
      });
    }
  };
</script>
<style lang="less" scoped>
.top{
    position: relative;
}
.img{
    width: 100%;
    height: 210px;
    overflow: hidden;
}
img{
    width: 100%;
    margin-top: -75px;
}
.icon i{
    font-size: 35px;
    position: absolute;
    top: 9px;
    left: 5px;
}
</style>

