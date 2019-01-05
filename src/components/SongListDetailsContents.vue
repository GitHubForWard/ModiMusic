<template>
  <div>
    <div class="msg-button">
      <button>
        ☆播放全部
        <span>(共222首)</span>
      </button>
      <button>+收藏(45.5万)</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SongListDetailsContents"
};
</script>

<style scoped>
div.msg-button {
  width: 100%;
  height: 50px;
  line-height: 50px;
  position: relative;
  top: -10px;
  background: #fff;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  border-bottom: 1px solid gray;
}
button {
  border: none;
  background: #fff;
  outline: none;
}
.msg-button > button:first-child {
  height: 100%;
  position: absolute;
  left: 10px;
  font-size: 16px;
}
.msg-button > button:first-child > span {
  font-size: 15px;
  color: rgb(124, 124, 117);
}

.msg-button > button:nth-child(2) {
  width: 105px;
  height: 100%;
  color: #fff;
  background: red;
  position: absolute;
  right: 0px;
}
</style>
