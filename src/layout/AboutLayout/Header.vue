<template>
  <b-row>
    <b-col md="6" sm="12" class="col">
      <h1 @click="handleMoveAbout()">Babel between US</h1>
    </b-col>
    <b-col md="6" sm="12" class="col">
      <div class="nav">
        <router-link to="/about/description">Description</router-link>
        <router-link to="/">Project</router-link>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "Header",
  methods: {
    handleMoveAbout() {
      window.location.href = "#/about";
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 36px;
}
h1:hover {
  cursor: pointer;
}
a {
  color: #111111;
  font-size: 14px;
}
a:hover {
  text-decoration: none;
  color: #111111;
}
a:nth-child(2) {
  margin-left: 30px;
}
.col {
  display: flex;
  flex-basis: unset !important;
}
.col:nth-child(1) {
  justify-content: flex-start;
}
.col:nth-child(2) {
  justify-content: flex-end;
}
@media (max-width: 768px) {
  .col {
    justify-content: center !important;
  }
}
</style>