<template>
  <main>
    <div class="mt-24">
      <h1 class="text-5xl font-bold text-center">About Me</h1>
      <div
        class="flex xl:flex-row flex-col justify-center xl:items-start items-center px-3"
      ><div class="px-3 xl:px-0">

        <div class="glass rounded-xl pl-6 pb-10 mt-14 ">
          <img
            class="avt-filter avt"
            src="~/assets/image/me.png"
            alt="sajjad Alizadeh"
            
          />
        </div>
      </div>
        <div class="flex flex-col px-10 mt-14">
          <p style="max-width: 800px">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
            tempore, ab ad beatae atque saepe perferendis vel aperiam voluptatem
            ullam dicta, fuga iste exercitationem doloremque illo nobis odio
            obcaecati excepturi.
          </p>
          <h3 class="font-bold text-2xl my-4">My Skills</h3>
          <div class="flex flex-wrap ">
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Vue/Nuxt</div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Angular</div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Javascript</div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Tailwinds</div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Html/Css/sass</div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Flutter</div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Dart</div>
          </div>
          <div class="flex flex-wrap my-4">
            <div
              class="mt-4 px-4 py-1 rounded-3xl glass-btn text-rose-600 hover:text-white duration-500 font-semibold"
            >
              More About Me
            </div>
            <div class="w-5"></div>
            <div
              class="mt-4 px-4 py-1 rounded-3xl glass-btn text-rose-600 hover:text-white duration-500 font-semibold"
            >
              Contact Me
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.avt{
  max-width: 400px;
  @media only screen and(max-width:500px){
    max-width: 300px;
    
  }
  @media only screen and(max-width:370px){
    max-width: 250px;
    
  }
}
</style>>
