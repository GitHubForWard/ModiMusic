<template>
  <div>
    <Title title="个性推荐"/>
    <NavBar/>
    <RecList/>
  </div>
</template>

<script>
import Title from "../components/Title";
import NavBar from "../components/NavBar";
import RecList from "../components/RecList";

export default {
  name: "SongList",
  components: {
    Title,
    NavBar,
    RecList
  }
};
</script>

<style scoped>
div {
  background: rgb(202, 198, 198);
}
</style>