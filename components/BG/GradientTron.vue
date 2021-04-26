<template>
  <div class="bg-gradient fixed  h-screen w-screen overflow-hidden" >
     <div class="circle-p absolute bg-purple-300 rounded-full "></div>
     <div class="circle-r absolute bg-rose-500 rounded-full"></div>
     <div class="circle-y absolute bg-yellow-400 rounded-full"></div>
     <div class="circle-w absolute bg-blue-50 rounded-full"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.bg-gradient {
background: rgb(198,255,221);
background: linear-gradient(315deg, rgba(198,255,221,1) 0%, rgba(251,215,134,1) 52%, rgba(247,121,125,1) 100%);

z-index: -1;

}
.circle-p{
   width: 30px ;height: 30px;
   top: 10%;
   left: 10%;
}
.circle-r{
   width: 90px ;height: 90px;
   top: 30%;
   left: 30%;
}
.circle-y{
   width: 40px ;height: 40px;
   left:80px;bottom:10%;
}
.circle-w{
   width: 100px ;height: 100px;
   right: 20px;
   bottom: 50%;
}
@media only screen and(max-width:800px) {
   .circle-p{
     
      top: 10%;
      left: 10%;
   }
   .circle-r{
    
      top: 30%;
      left: 30%;
   }
   .circle-y{
      
      left:0px;bottom:10%;
      transform: translateX(-50%);
   }
   .circle-w{
      
      transform: translateX(50%);
      right: 0px;
      bottom: 50%;
   }
   
}

</style>