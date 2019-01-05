<template>
    <div>
        <div class="tupian-box">
            <a href=""></a>
            <!-- {{ID}} -->
         <!-- <img :src="item.title.picUrl" alt=""> -->
        </div>
    </div>
</template>
<script>
export default {
         name:"Bigpicture",
         data(){
             return{
                 artists:[]
             }
         },
        //  props:{
        //      ID:{
        //          type:num,
        //          default:''
        //      }
        //  },
         mounted() {
             this.$axios.get("http://localhost:3000/artists?id=8103")
        .then(data => {
            // console.log(data.data.list.artists);
           console.log(data.data);
           
           this.artists = data.data.list.artists
        })
        .catch(error => {
            console.log(error);
            
          })
        }
}
</script>
<style scoped lang="less">
    
</style>