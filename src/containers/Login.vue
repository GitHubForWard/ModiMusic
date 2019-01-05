<template>
  <div>

    <img class="pic1" src="../assets/登录-tubiao.png" alt>
    <img class="pic2" src="../assets/登录.png" alt>
    <!-- <input class="shuru1" type="text" placeholder="请输入账号">
    <input type="password" placeholder="请输入密码">-->
    <div class="state-box">
      <div :class="['login', isLogin? current: '' ]" @click="changeType(1)">登录</div>
      <div :class="['register', !isLogin? current: '']" @click="changeType(2)">注册</div>
    </div>
    <Inputbox v-if="isLogin"/>
    <!-- <Inputbox v-if="!isLogin"/> -->
    <template v-if='!isLogin'>
      <div class="zhuce" style="">
         <input class="shuru1" type="text" placeholder="请输入账号">
         <input type="password" placeholder="请输入密码">
         <input type="password" placeholder="请再次输入密码">
      </div>
    </template>
    <LoginAN/>
  </div>
</template>
<script>
import LoginAN from "../components/LoginAN";
import Inputbox from "../components/Inputbox";

export default {
  name: "Login",
  data() {
    return {
      active: 0,
      isLogin: true,
      current: "active"
    };
  },
  components: {
    LoginAN,
    Inputbox
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
    },
    changeType(num){
      console.log(num);
      num == 1? this.isLogin = true: this.isLogin = false;
    }
  }
};
</script>
<style scoped lang="less">
.active {
  // color: red;
        
  border-bottom-color: #b037ec !important;
}
.pic1 {
  position: absolute;
  // z-index: 600;
}
.pic2 {
  // z-index: 500;
  float: left;
}
.zhuce{
  width:100%;
  height:100px;
  position:absolute;
  z-index:88888;
  left: 94px;
  top: 340px;
  input{
    margin-bottom: 10px;
    color: #fff;
    border-bottom: 0.5px solid;
    margin-left: -8px;
  }
}
.state-box {
  width: 194px;
  height: 50px;
  position: absolute;
  top: 272px;
  left: 91px;
  color: #fff;
  margin-left: -4px;
  .login {
    width: 50%;
    height: 100%;
    float: left;
    text-align: center;
    line-height: 220%;
    border-bottom: 0.6px solid #fff;
  }
  .register {
    width: 50%;
    height: 100%;
    float: left;
    text-align: center;
    line-height: 220%;
    border-bottom: 0.6px solid #fff;
  }
}
</style>