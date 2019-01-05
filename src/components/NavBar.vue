<template>
  <div>
    <ul>
      <li v-for="(item, index) in classIfy" :key="index">
        <router-link to="/">{{ item.name }}</router-link>
      </li>
    </ul>
    <button>查看更多 &gt;&gt;</button>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      classIfy: []
    };
  },
  mounted() {
    this.$axios
      .get("http://localhost:3000/playlist/catlist")
      .then(res => {
        this.classIfy = res.data.sub;
        // console.log(this.classIfy);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scoped>
div {
  text-align: center;
  background: #fff;
  margin-bottom: 10px;
  ul {
    width: 375px;
    height: 165px;
    padding: 16px 20px 0;
    box-sizing: border-box;
    text-align: center;
    column-count: 5;
    overflow: hidden;
    li {
      list-style: none;

      a {
        font-size: 15px;
        text-decoration: none;
        color: #333;
        width: 40px;
        height: 30px;
      }
    }
  }
  button {
    background: #fff;
    border: none;
    font-size: 18px;
    color: #666666;
    outline: none;
  }
}
</style>