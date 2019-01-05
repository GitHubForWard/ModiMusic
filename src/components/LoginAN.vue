<template>
    <div class="ANniu">
        <!-- <div class="text-box"> -->
        <router-link to="/musiclibrary">登 &nbsp;&nbsp;&nbsp;&nbsp;录</router-link>
    <!-- </div> -->
    </div>
</template>
<script>
export default {
    name: "Login",
    data() {
        return {};
    }
};
</script>
<style scoped lang="less">
 

 a {
     display: block;
     color:#fff;
     line-height: 50px;
     font-size: 20px;
     text-align: center;
 }
 .ANniu{
     position: absolute;
     top:450px;
     width: 200px;
     height: 50px;
     background-color: #b037ec;
     border-radius: 5px;
     margin-left: 82px;
     z-index: 666;
 }
</style>