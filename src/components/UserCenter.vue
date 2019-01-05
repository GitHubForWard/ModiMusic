<template>
  <div>
    <div class="user-center">
      <div class="user-center-head">
        <img src alt>
        <el-button round class="minutes">0分钟</el-button>
        <el-button round class="vip-button">开通会员</el-button>
      </div>
      <ul class="user-items">
        <li>
          <i class="el-icon-info"></i>
          <router-link to="/vipcenter">会员中心</router-link>
          <i class="el-icon-arrow-right"></i>
        </li>
        <li>
          <i class="el-icon-info"></i>
          <router-link to="/newscenter">消息中心</router-link>
          <i class="el-icon-arrow-right"></i>
        </li>
        <li>
          <i class="el-icon-info"></i>
          <router-link to="/freeflow">在线听歌免流量</router-link>
          <i class="el-icon-arrow-right"></i>
        </li>
        <li>
          <i class="el-icon-info"></i>
          <router-link to="/qrcode">扫一扫</router-link>
          <i class="el-icon-arrow-right"></i>
        </li>
        <li>
          <i class="el-icon-info"></i>
          <router-link to="/skincenter">个性换肤</router-link>
          <i class="el-icon-arrow-right"></i>
        </li>
        <li>
          <i class="el-icon-info"></i>
          <router-link to="/distinguish">听歌识曲</router-link>
          <i class="el-icon-arrow-right"></i>
        </li>
        <li>
          <i class="el-icon-info"></i>
          <router-link to="/timingbroadcast">定时播放</router-link>
          <i class="el-icon-arrow-right"></i>
        </li>
        <li>
          <i class="el-icon-info"></i>
          <router-link to="/ringbell">魔笛铃声</router-link>
          <i class="el-icon-arrow-right"></i>
        </li>
        <li>
          <i class="el-icon-info"></i>
          <p>锁屏歌词</p>
          <el-switch v-model="isSwitch1" active-color="#5d289c" inactive-color="#555"></el-switch>
        </li>
        <li>
          <i class="el-icon-info"></i>
          <p>桌面歌词</p>
          <el-switch v-model="isSwitch2" active-color="#5d289c" inactive-color="#555"></el-switch>
        </li>
        <li>
          <i class="el-icon-info"></i>
          <p>流量提醒</p>
          <el-switch v-model="isSwitch3" active-color="#5d289c" inactive-color="#555"></el-switch>
        </li>
      </ul>
      <div class="setup-exit">
        <router-link to="/setup">
          <i class="el-icon-info"></i>设置
        </router-link>
        <router-link to="/login">
          <i class="el-icon-info"></i>退出
        </router-link>
      </div>
    </div>
    
  </div>
</template>


<script>
export default {
  data() {
    return {
      isSwitch1: true,
      isSwitch2: true,
      isSwitch3: false,
      isUserCenter: false
    };
  }
};
</script>



<style lang="less">
.shadow {
  z-index: 998;
  background: #000;
  opacity: 0.2;
  position: absolute;
  height: 900px;
  top: 0;
  right: 0;
  width: 10%;
}
.user-center {
  position: absolute;
  top: 0;
  left: 0;
  height: 900px;
  width: 90%;
  z-index: 998;
  background: #fff;
  .setup-exit {
    position: absolute;
    right: 15px;
    bottom: 35px;
    a {
      margin-left: 10px;
    }
  }
  .vip-button {
    position: absolute;
    top: 165px;
    left: 185px;
  }
  .minutes {
    position: absolute;
    top: 165px;
    left: 60px;
  }
  img {
    height: 100px;
    width: 100px;
    border: #000 solid 1px;
    border-radius: 50%;
    position: absolute;
    left: 120px;
    top: 40px;
  }
  .user-center-head {
    height: 250px;
  }
  .user-items {
    li {
      position: relative;
      text-align: left;
      z-index: 999;
      color: #000;
      height: 50px;
      width: 100%;
      border-bottom: black solid 1px;
      a,
      p {
        position: absolute;
        left: 35px;
        top: 15px;
      }
      :nth-child(1) {
        position: absolute;
        left: 10px;
        top: 15px;
      }
      :nth-child(3) {
        position: absolute;
        right: 10px;
        top: 15px;
      }
    }
  }
}
</style>