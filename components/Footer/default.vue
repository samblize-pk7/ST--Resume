<template>
  <div>
 
    <footer class="w-full   bg-blueGray-900 relative">
      <div class="header absolute text-blueGray-900   ">Contact Me</div>
      <div class="social pt-60 pb-5 px-4 flex justify-center flex-wrap ">
         <CardSocial class="m-4" lable="Instagram" colorClass="bg-rose-800" icon="instagram"/>
         <CardSocial class="m-4" lable="github" colorClass="bg-blueGray-700" icon="github"/>
         <CardSocial class="m-4" lable="whatsapp" colorClass="bg-green-600" icon="whatsapp"/>
         <CardSocial class="m-4" lable="twitter" colorClass="bg-lightBlue-600 " icon="twitter"/>
       
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"scoped>
footer{
  min-height: 300px;
}
.header {
  font-size: 15vw;
  letter-spacing: 20px;
  
  transform: translateY(-60%);
  top: 0;
  font-family: "Dosis", sans-serif;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
  width: 100%;
  text-align: center;
  @media only screen and (max-width:600px){
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
    font-size: 15vw;
    letter-spacing: 10px;
    font-weight: bold;
  }
}



</style>