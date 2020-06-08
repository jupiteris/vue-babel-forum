<template>
  <div id="about_layout">
    <b-container class="bv-example-row">
      <Header />
      <router-view></router-view>
      <Footer />
    </b-container>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>
#about_layout {
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 0px;
}
</style>