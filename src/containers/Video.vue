<template>
  <div>
    <Title title="视频"/>
    <VideoList />
    <NewVideo title="最新" />
  </div>
</template>

<script>
import Title from "../components/Title";
import VideoList from "../components/VideoList";
import NewVideo from "../components/NewVideo";
export default {
  name: "Aideos",
  components: {
    Title,
    VideoList,
    NewVideo
  }
};
</script>

<style scoped>
</style>