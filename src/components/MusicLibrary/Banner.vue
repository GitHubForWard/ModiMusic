<template>
    <div class="banner">
        <div v-if="banners.length > 0 ">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item,index) in banners" :key='index'>
                    <img :src="item.picUrl" alt>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <div v-else>正在加载数据...</div>
    </div>
</template>
<script>
export default {
    name:"Banner",
    data(){
        return{
            swiperOption: {
                autoplay: true,
                pagination: {
                el: ".swiper-pagination"
                },
                loop : true
            },
            banners:[]
        }
    },
    mounted() {
      this.$axios.get('http://localhost:3000/banner')
      .then(res => {
        this.banners = res.data.banners;
      })
      .catch(error => {
        console.log(new Error(error));
      });
    }
}
</script>

<style scoped>
</style>
