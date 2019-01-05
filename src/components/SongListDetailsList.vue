<template>
  <div>
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <router-link :to="{ name:'Player',params:{ songId:item.id } }">
          <div>
            <p>{{ item.name }}</p>
            <p>
              <span v-for="(items, index) in item.ar" :key="index">{{ items.name }}</span>
            </p>
          </div>
          <div>
            <span>
              <router-link :to="{name:'MVPage'}">MV</router-link>
            </span>
            <span>···</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SongListDetailsList",
  data() {
    return {
      id: "",
      data: ""
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    // console.log(this.id);
    this.$axios
      .get("http://localhost:3000/playlist/detail", {
        params: {
          id: this.id
        }
      })
      .then(res => {
        // console.log(res.data);
        this.data = res.data.playlist.tracks;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style lang="less" scoped>
ul {
  padding: 0 12px;
  box-sizing: border-box;
  li {
    height: 50px;
    border-bottom: 1px solid gray;
    list-style: none;
    position: relative;
    a {
      color: #333;
      div:first-child {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        position: absolute;
        top: 10px;
        p:first-child {
          width: 230px;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-weight: 600;
          font-size: 12px;
        }
        p:last-child {
          margin-top: 10px;
          font-size: 9px;
        }
      }
      div:last-child {
        position: absolute;
        right: 0;
        span:first-child {
          border: 1px solid #333;
          border-radius: 5px;
          padding: 2px 8px;
          font-size: 9px;
          vertical-align: middle;
          a {
            text-decoration: none;
          }
        }
        span:last-child {
          margin-left: 33px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>