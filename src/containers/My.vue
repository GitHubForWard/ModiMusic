<template>
  <div>
    <TopNav/>
    <ul class="my-items">
      <li>
        <router-link to="/localmusic">
          <i class="el-icon-bell">本地音乐</i>
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/downloadmanagement">
          <i class="el-icon-bell">下载管理</i>
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/historyrec">
          <i class="el-icon-bell">历史纪录</i>
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/mycollection">
          <i class="el-icon-bell">我的收藏</i>
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/myradio">
          <i class="el-icon-bell">我的电台</i>
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </li>
      <li>
        <router-link to="/postnews">
          <i class="el-icon-bell">发表动态</i>
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </li>
    </ul>
    <div class="create-musiclist">
      <div class="title">创建歌单</div>
      <ul>
        <router-link
          :to="{ name:'MyList'  ,params:{Listid: items.id} }"
        
          v-for="(items, index) in MyPlayList"
          :key="index"
        >
          <li>
            <div class="avatar">
              <img :src="items.coverImgUrl">
            </div>
            <i class="el-icon-arrow-right"></i>
            <h6 class="list-title">{{items.name}}</h6>
            <p class="list-count">{{items.trackCount}}首</p>
            <p class="list-downloaded">首已下载</p>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import TopNav from "../components/TopNav";
export default {
  name: "My",
  data() {
    return {
      MyPlayList: []
    };
  },
  components: {
    TopNav
  },
  mounted() {
    this.$axios
      .get("http://localhost:3000/user/playlist", {
        params: {
          uid: 32953014
        }
      })
      .then(res => {
        this.MyPlayList = res.data.playlist;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style lang="less" scoped>
.my-items {
  margin-bottom: 10px;
  li {
    position: relative;
    height: 55px;
    background: #fff;
    border-bottom: #555 1px solid;
    a {
      :nth-child(1) {
        position: absolute;
        left: 10px;
        top: 20px;
      }
      :nth-child(2) {
        position: absolute;
        right: 10px;
        top: 20px;
      }
    }
  }
}
.create-musiclist {
  background: #fff;
  margin-bottom: 10px;
  .title {
    color: #000;
    padding: 10px;
    border-bottom: 0.5px #000 solid;
    font-weight: 600;
  }
  li {
    padding: 10px;
    border-bottom: #000 solid 0.5px;
    overflow: hidden;
  }
  .avatar {
    float: left;
    width: 40px;
    height: 40px;
    background: #000;
    margin-right: 10px;
    img {
      height: 40px;
      width: 40px;
    }
  }
  .list-title {
    color: #000;
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 5px;
  }
  .list-count {
    font-size: 12px;
    float: left;
    color: #555;
    margin-right: 10px;
  }
  .list-downloaded {
    font-size: 12px;
    float: left;
    color: #555;
  }
  .el-icon-arrow-right {
    margin-top: 10px;
    float: right;
    font-size: 24px;
  }
}
</style>