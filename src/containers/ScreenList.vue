<template>
  <div>
    <Title title="视频榜单"/>
    <ScreenLists />
    <NewVideo title="最新" />
  </div>
</template>

<script>
import Title from "../components/Title";
import ScreenLists from "../components/ScreenLists";
import NewVideo from "../components/NewVideo";
export default {
  name: "ScreenList",
  components: {
    Title,
    ScreenLists,
    NewVideo
  }
};
</script>

<style scoped>
</style>