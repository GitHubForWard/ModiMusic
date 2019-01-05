<template>
    <div class="big-box">
        <div class="music">
        <router-link to="/"
        v-for="(it,index) in AAA"
        :key="index"
        >
           <div class="img1">

              <img :src="it.picUrl" alt="">
           </div>
        </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:"Picture",
    data(){
         return{
            AAA:[]
         }
    },
    mounted() {
        this.$axios.get("http://localhost:3000/artist/album",{
            params:{
                id:6452,
                limit:30
            }
        })
        .then(res => {
            console.log(res.data.hotAlbums)
            this.AAA=res.data.hotAlbums
        })
        .catch(error => {
            console.log(error);
        })
    }
}
</script>
<style scoped lang="less">
    
</style>