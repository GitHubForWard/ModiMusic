<template>
  <div>
    <Title title="最热视频"/>
    <HotVideos />
  </div>
</template>

<script>
import Title from "../components/Title";
import HotVideos from "../components/HotVideos";
export default {
  name: "HotVideo",
  components: {
    Title,
    HotVideos
  }
};
</script>

<style scoped>
</style>