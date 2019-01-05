<template>
  <div>
    <Title title="排行榜"/>
    <RankingListContent/>
  </div>
</template>

<script>
import Title from "../components/Title";
import RankingListContent from "../components/RankingListContent";

export default {
  name: "RankingList",
  data() {
    return {};
  },
  components: {
    Title,
    RankingListContent
  }
};
</script>

<style lang="less" scoped>
</style>