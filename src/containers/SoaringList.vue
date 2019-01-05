<template>
  <div>
    <SoaringListTitle/>
    <SoaringListTab/>
  </div>
</template>

<script>

import SoaringListTitle from "../components/SoaringListTitle";
import SoaringListTab from "../components/SoaringListTab";

export default {
  name: "RankingList",
  data() {
    return {};
  },
  components: {
    SoaringListTitle,
    SoaringListTab
  }
};
</script>

<style lang="less" scoped>

</style>