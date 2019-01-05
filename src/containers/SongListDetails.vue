<template>
  <div>
    <Title title="歌单"/>
    <SongListDetailsTop/>
    <SongListDetailsContents/>
    <SongListDetailsList/>
  </div>
</template>
<script>
import Title from "../components/Title";
import SongListDetailsTop from "../components/SongListDetailsTop";
import SongListDetailsContents from "../components/SongListDetailsContents";
import SongListDetailsList from "../components/SongListDetailsList";
export default {
  name: "SongListDetails",
  data() {
    return {
      id: ""
    };
  },
  components: {
    Title,
    SongListDetailsTop,
    SongListDetailsContents,
    SongListDetailsList
  }
};
</script>

<style scoped>
</style>