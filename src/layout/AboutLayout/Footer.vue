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
        <img src="@/assets/Kulturbryggan.png" id="third-img" />
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
  height: 64px;
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
}
.footer a {
  height: 100%;
  float: left;
  margin-left: 10px;
}
.footer a img {
  max-width: 64px;
  height: 100%;
}
#third-img {
  max-width: 372px;
}

@media (max-width: 540px) {
  .footer {
    height: 32px !important;
  }
  .footer a img {
    width: 32px !important;
  }
  .footer a:nth-child(3) img {
    width: 174px !important;
  }
}
</style>