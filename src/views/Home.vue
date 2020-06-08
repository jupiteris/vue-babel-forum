<template>
  <b-container class="bv-example-row">
    <div v-if="!$store.state.loaded" id="loadingDiv">
      <p>
        Babel
        <br />between US
      </p>
      <p>Loading...</p>
    </div>
    <b-row v-else>
      <BriefStory v-for="story in $store.state.stories" :key="story.id" :story="story" />
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import BriefStory from "@/components/BriefStory.vue";

export default {
  name: "Home",
  components: {
    BriefStory
  }
};
</script>

<style scoped>
#loadingDiv {
  margin-left: 20px;
}
#loadingDiv p {
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  line-height: normal;
}
#loadingDiv p:nth-child(2) {
  font-size: 20px;
  font-weight: 300;
  margin-top: 40px;
}
.bv-example-row {
  max-width: unset;
  padding: 30px 10px;
}
.row {
  margin: 0px;
}
@media (max-width: 540px) {
  .bv-example-row {
    max-width: unset;
    padding: 10px;
  }
}
</style>