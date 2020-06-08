<template>
  <div class="about">
    <img
      src="https://images.squarespace-cdn.com/content/v1/5dfb4e77f844f40ff2c624f2/1576752601759-QLEB4ZK2ASUYJXPVWL5Q/ke17ZwdGBToddI8pDm48kLbG6R0rcBhWjROiZCOh_5F7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UWC13EWYIWSRzAbX771QuUKIuWOe62sE3waH_l-3VcA1W07ycm2Trb21kYhaLJjddA/tav22.png"
    />
    <p v-for="(about, index) in abouts" :key="index">{{about}}</p>
    <h2>Image by Sune Skote, Fornvårdar, 1950</h2>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      abouts: [
        `Babel Between Us is a cartographic visualization of a collaboratively created fiction, 
          exploring the uncharted waters between collaboration, language and ethnography.`,
        `A group of 18 writers collectively improvise a story on an online forum during an extensive amount of time. 
          The resulting fiction is analyzed by a team of ethnographers and presented as an interactive map. 
          This map is then presented back to the group throughout the process. 
          The final map is presented in itself as an entry point for the general public to experience the work.`,
        `The project is currently ongoing, follow us on twitter for recurring update.`,
        `If you have any questions contact us on our forum, at team [at] bbu.world.`
      ]
    };
  }
};
</script>

<style scoped>
.about {
  margin: 20px 0px;
}
img {
  width: 95%;
}
p {
  text-align: left;
  margin-bottom: 40px;
  font-size: 18px;
  line-height: 1.6em;
}
h2 {
  text-align: left;
  white-space: pre-wrap;
  color: #8a8a8a;
  font-weight: 400;
  font-style: italic;
  line-height: 1.3em;
  font-size: 12px;
  text-transform: none;
  text-decoration: none;
  letter-spacing: 0.02em;
}
</style>