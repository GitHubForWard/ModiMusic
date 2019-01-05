<template>
  <div class="top">
    <ul class="top-nav">
      <li>
        <router-link to="/member">Ⅲ</router-link>
      </li>
      <li>
        <router-link to="/my">我的</router-link>
      </li>
      <li>
        <router-link to="/musiclibrary"  exact>乐库</router-link>
      </li>
      <li>
        <router-link to="/find">发现</router-link>
      </li>
      <li>
        <router-link to="/search">Ⅲ</router-link>
      </li>
    </ul>
    <div class="prve"></div>
  </div>
</template>
<script>
export default {
  name: "TopNav",
  data() {
    return {};
  }
};
</script>
<style scoped  lang="less">
.top{
  width: 100%;
  height: 42.5px;
  .top-nav {
    position: fixed;
    background: #5D289C;
    height: 42.5px;
    width: 100%;
    z-index:999;
    li{
      width: 18%;
      float: left;
      text-align: center;
      line-height: 42.5px;
        a {
            display: block;
            color: #C896F2;
        }
        .active {
          color: #fff;
        }
    }
    li:nth-child(3){
      width: 28%;
    }
  }
  .prve{
    clear: both;
  }
}
</style>