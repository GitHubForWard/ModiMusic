<template>
  <div class="LookBack">
      <h3>直播回看</h3>
      <div><img :src="data[0].cover" alt=""></div>
  </div>
</template>

<script>
export default {
  name: "LookBack",
  data(){
      return{
          data:""
      }
  },
  mounted() {
      this.$axios.get('http://localhost:3000/mv/first',{
          params:{
              limit:1
          }
      })
      .then(res => {
        //   console.log(res.data.data)
        this.data = res.data.data;
      })
      .catch(error => {
        console.log(new Error(error));
      });
  }
};
</script>

<style scoped>
.LookBack{
    background: #fff;
}
h3{
    padding: 16px 10px 13.5px;
}
</style>