<template>
  <div>
      <Title title="最新视频" />
      <LatestVideoTbs />
  </div>
</template>

<script>
import Title from "../components/Title";
import LatestVideoTbs from "../components/LatestVideoTbs";
export default {
  name: "LatestVideo",
  components: {
      Title,
      LatestVideoTbs
  }
};
</script>

<style scoped>
</style>