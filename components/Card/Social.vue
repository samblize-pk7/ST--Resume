<template>
  <div class="card relative">
    <div
      class="box flex justify-center items-center  shadow-md relative bg-opacity-90 " :class="colorClass"
    >
      <fa class="fa text-3xl text-white opacity-60 duration-300" :icon="['fab', icon]" />
    </div>
    <div class="lable absolute  bottom-0">{{ lable }}</div>
  </div>
</template>

<script>
export default {
  props: {
    lable: {
      type: String,
      default: function () {
        return "...";
      },
    },
    colorClass: String,
    icon: String,
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Cookie&display=swap");
.box {
  width: 80px;
  height: 80px;
  border-radius: 9px;
  z-index: 1;
  transition: 0.35s ease;
  @media only screen and (max-width:490px){
     width: 50px;
     height: 50px;
     
  }
}
.lable {
  width: 100%;
  background: #fff;
  text-align: center;
  border-radius: 0 0 12px 12px;
  font-family: "Cookie", cursive;
  font-size: 20px;
  text-transform: capitalize;
  cursor: pointer;
   @media only screen and (max-width:490px){
      
      font-size: 14px;
     
  }
}
.card:hover .box {
   height:60px;
  transform: translateY(-10px);
  border-radius:8px 8px 0  0;
  .fa{

     opacity: 1;
     font-size: 1.8rem;
  }
   @media only screen and (max-width:490px){
      transform: translateY(-20px);
    
     height: 50px;
     
  }

}

</style>