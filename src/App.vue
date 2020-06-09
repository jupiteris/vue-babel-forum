<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    getTimeStamp(date) {
      return new Date(date).getTime();
    }
  },
  mounted() {
    // get the stories when page is loaded at first
    (async () => {
      const proxy = "https://cors-anywhere.herokuapp.com/";
      // fetch the stories from the api
      let data = await fetch(
        `${proxy}https://bbu.world/webkit_components/topics.json?tags=ethno-bbu&per=500&serializer=event`,
        {
          method: "get"
        }
      );
      data = await data.json();
      // sort the data by created_at
      data = data.sort((a, b) =>
        this.getTimeStamp(a.created_at) - this.getTimeStamp(b.created_at) < 0
          ? 1
          : -1
      );
      // add the about brief block on the top of the array.
      data.unshift({
        id: "about",
        title: "Bable \nbetween US",
        excerpt: "About the project"
      });
      // save the stories to the vux store
      this.$store.dispatch("setStories", data);
    })();
  }
};
</script>

<style>
#app {
  font-family: Times New Roman, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111111;
  background-color: #fdfdfd;
}
</style>
