<template>
  <body>
    <MenuStickyNavbar />
    <Nuxt />
    <FooterDefault />
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


<style  lang="postcss">
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;600;700;800&display=swap");
html {
   font-family: 'Dosis', sans-serif;
   /* direction: rtl; */
  @apply bg-gray-100 ;
}

.head_line{
@apply text-white  text-4xl  font-bold relative mb-8 ml-4 inline-block;
filter: drop-shadow(3px 10px 3px rgba(0,0,40, 0.2));


}
.head_line::after{
  content: "";
  position: absolute;
  width: 30%;
  height: 5px;
  bottom:-10px;
  left:0;
  @apply bg-gray-900 rounded-full;
}



</style>
