<template>
<nuxt-link :to='link'>
  <div
    class="card-body rounded-xl bg-amber-50 bg-opacity-20 my-6 border-white border relative"
  >
    <div class="img-box">
      <img
        :src="image"
        alt="component-001"
   
      />
    </div>
    <div class="title absolute w-full bg-white text-center font-bold">
   {{title}}
    </div>
  </div>
  </nuxt-link>
</template>

<script>
export default {
   props: {
      link: String,
      image: String,
      title:String,

   }
};
</script>

<style lang="scss" scoped>
.card-body {
  width: 290px;
  overflow: hidden;
  .img-box {
    overflow: hidden;
    width: 290px;
    height:200px;
    img {
      width: 290px;
      transition: 0.3s ease-out;
    }
  }
     .title {
        bottom:0 ;
     left: 0;
    
     transform: translateY(50px);
     @apply py-3 ;
        transition: 0.3s ease-out;
     }
  &:hover {
    .img-box img {
      transform: scale(1.1) rotate(-2deg);
    }
.title {
   transform: translateY(0px);
   box-shadow: 0px -20px 10px rgba(0, 0, 0,.6);
}
  }
}
</style>