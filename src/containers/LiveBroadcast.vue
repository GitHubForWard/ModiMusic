<template>
  <div>
    <Title title="歌手直播"/>
    <LiveBroadcastList />
    <LookBack />
  </div>
</template>

<script>
import Title from "../components/Title";
import LiveBroadcastList from "../components/LiveBroadcastList";
import LookBack from "../components/LookBack";
export default {
  name: "LiveBroadcast",
  components: {
    Title,
    LiveBroadcastList,
    LookBack
  }
};
</script>

<style scoped>
</style>