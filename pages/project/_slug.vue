<template>
  <main>
    <div class="  mx-auto" style="max-width: 1000px">
    

      <img class="img mx-auto"  :src="'/project-image/'+proj.image" alt="">
      <h3 class="font-bold text-2xl mt-8 ">{{proj.title}}</h3>
    
      <p class="dec mt-2">{{proj.description}}</p>
      <h3 class="font-bold text-2xl mt-8 mb-1">Thecnology</h3>
          <div class="flex flex-wrap" style="max-width:800px">
            <div v-for="tech in proj.tech" :key="tech" class="glass rounded-full py-1 px-4 mr-3 my-2">{{tech}}</div>
           
       
          </div>
          <a :href="proj.link">
           <div v-if="proj.link"
            class="
            my-6
              px-8
              py-2
              rounded-xl
              glass-btn
              text-rose-600
              hover:text-white
              duration-500
              font-semibold
              
              text-center
            "
          >

            See The Website ->
          </div>
          </a>
    </div>
   
  </main>
</template>

<script>
export default {
  layout: "single_proj",
  async asyncData({ $content, params }) {
    const proj = await $content("project", params.slug).fetch();
  
    return { proj };
  },
};
</script>
<style lang="scss" scoped>
.dec{
position: relative;
padding-left: 25px;
  &::before{
    content: '';
    background-color:  rgb(230, 45, 85);
    width: 12px;
    height: 12px;
    border-radius: 9999px;
    position: absolute;
    transform: translateY(50%);

    left: 0;
  }
}
</style>