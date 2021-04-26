<template>
  <div class="background">
    <section class="banner pt-11 px-4">
      <div class="descibe_me flex flex-col">
        <p class="text-8xl text-gray-900 mb-1">Hi!</p>
        <p class="text-5xl text-gray-900">Welcome to my portfolio</p>
      </div>
    </section>
    <div class="relative w-full h-64">
      <img
        class="me-avt left-0 absolute"
        src="/me.png"
        alt=""
        style="max-height: 450px"
      />
    </div>
    <main>
      <div class="relative z-10">
        <h2 class="head_line mt-44">Recent Component</h2>
        <div class="flex flex-wrap m-10">
        <div  v-for="proj in miniProjects" :key='proj.slug'>
          <div class="text-rose-700 block px-6">
          <CardComponent v-if=" proj.title && proj.image " :link="proj.path" :title="proj.title" :image="'/component/'+ proj.image"/>

     
          </div>
        </div>
        </div>
      </div>
    </main>
     
  </div>
</template>

<script >
export default {
 
  async asyncData({ $content ,params}) {
   const miniProjects = await $content("miniProject").only(['title' , 'image' , 'slug' , 'path']).fetch()
 
  
   console.dir(miniProjects);
   console.log(miniProjects[0].title +
   miniProjects[0].image+
   miniProjects[1].title+
   miniProjects[1].image)

   return {miniProjects};
  },
 

};
</script>

<style lang="scss"scoped>
.background {
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgb(0, 46, 70);
  background: linear-gradient(
    315deg,
    rgba(0, 46, 70, 1) 10%,
    rgba(19, 102, 140, 1) 32%,
    rgba(44, 164, 164, 1) 82%
  );
  background-size: cover;
}
.banner {
  // position: relative;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: "Dosis", sans-serif;
  width: 100%;
  height: 400px;
}
main {
  width: calc(100vw - 120px);
  position: relative;
  margin: 0 20px 00px 20px;
  border-radius: 20px;
  border: 1px solid #ffffff4b;
  margin-bottom: 250px;
  overflow: hidden;

  &::before {
    box-shadow: inset 0 0 0 3000px rgba(150, 202, 218, 0.199);
    content: "";
    background-color: #63e6e623;
    // background: inherit;
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    filter: blur(60px);
  }
  @media only screen and (max-width: 680px) {
    width: calc(100vw - 40px);
  }
  .glass {
    width: 100%;
    height: 400px;
  }
}
.me-avt {
  top: -90px;

  @media only screen and (max-width: 500px) {
    top: -50px;
  }
  @media only screen and (max-width: 400px) {
    top: -30px;
  }
}
.descibe_me {
  // @media only screen and (max-width: 1240px) {
  // padding-top:300px
  // }
}
</style>