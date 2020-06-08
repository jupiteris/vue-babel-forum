<template>
  <div class="footer">
    <div>
      <a href="https://edgeryders.eu/" style="width:15%">
        <img src="@/assets/Edgeryders.png" />
      </a>
      <a href="https://www.blivande.com/" style="width:15%">
        <img src="@/assets/Blivande Logo.png" />
      </a>
      <a href="https://www.konstnarsnamnden.se/kulturbryggan" style="width:70%">
        <img src="@/assets/Kulturbryggan.png" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  margin-top: 100px;
  position: relative;
  width: 100%;
  height: 11vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer div {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 80%;
}
.footer a {
  margin-left: 10px;
  height: 100%;
}
.footer a img {
  height: 100%;
  width: 100%;
}
</style>