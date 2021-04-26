<template>
  <div class="about-page bg-gray-200">
    <div class="drop-shadow">
      
    <div class="header "></div>
    </div>
    <div class="w-36 m-auto pt-8 font-bold text-xl" style="height:80vh">This is about</div>
  </div>
</template>

<script>
export default {
  

};
</script>

<style lang="scss" scoped>
.header {
  background: rgb(0, 46, 70);
  background: linear-gradient(
    315deg,
    rgba(0, 46, 70, 1) 10%,
    rgba(19, 102, 140, 1) 32%,
    rgba(44, 164, 164, 1) 82%
  );
  background-size: cover;
  height: 300px;
  width: 100%;
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 60% 75%, 50% 100%, 40% 75%, 0% 75%);
  
}
.drop-shadow{
  
  filter:drop-shadow( 0px 10px 10px rgba(0,0,0,.3) )

}
.content{
  height:70vh;
max-width: 1200px;
}
</style>