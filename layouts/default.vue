<template>
  <body >
    <BGGradientTron/>
    <Nuxt />
    
  </body>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuIsActive: false,
    };
  },
  methods: {
    ToggleMobileMeuu() {
      this.mobileMenuIsActive = !this.mobileMenuIsActive;
      console.log("workin");
    },
  },
};
</script>


<style  lang="scss">



</style>
