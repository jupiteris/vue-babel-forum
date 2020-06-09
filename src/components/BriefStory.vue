<template>
  <b-col lg="2" md="4" sm="6" xs="12" class="briefDiv">
    <b-card
      v-bind:title="story.title"
      tag="article"
      class="mb-2"
      v-bind:id="story.id === 'about' && 'about'"
      @click="handleMoveReader(story.id)"
    >
      <div class="textDiv">
        <b-card-text>{{story.raw}}</b-card-text>
      </div>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "BriefStory",
  props: {
    story: Object
  },
  methods: {
    handleMoveReader(id) {
      // route to the About page
      if (id === "about") {
        window.location.href = "#/about";
      }
      // navigate to the BBU custom reader page by id
      else {
        window.location.assign("https://read.babelbetween.us/#/t/" + id);
      }
    }
  },
  mounted() {}
};
</script>

<style scoped>
.briefDiv {
  padding: 20px;
}
.briefDiv:hover {
  cursor: pointer;
}
.card {
  border: 0px;
  overflow: hidden;
  height: 200px;
  max-width: unset;
}
.card-body {
  padding: 0px;
  text-align: left;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
.card-title {
  font-size: 20px;
  font-weight: bold;
}
.textDiv {
  margin-bottom: 5px;
  height: 70%;
}
.card-text {
  font-size: 14px;
  white-space: pre-line;
}
#about .card-title {
  font-size: 26px;
  white-space: pre;
}
#about .card-text {
  font-size: 20px;
  font-weight: bold;
}
@media (max-width: 540px) {
  #about {
    height: 80px;
  }
  #about .card-title {
    white-space: nowrap;
  }
  .briefDiv {
    padding: 10px;
  }
  .card {
    height: 150px;
  }
}
</style>