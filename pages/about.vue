<template>
  <main>
    <div class="mt-24">
      <h1 class="text-5xl font-bold text-center">About Me</h1>
      <div
        class="
          flex
          xl:flex-row
          flex-col
          justify-center
          xl:items-start
          items-center
          px-3
        "
      >
        <div class="px-3 xl:px-0">
          <div class="glass rounded-xl pl-6 pb-10 mt-14">
            <img
              class="avt-filter avt"
              src="~/assets/image/me.png"
              alt="sajjad Alizadeh"
            />
          </div>
        </div>
        <div class="flex flex-col px-10 mt-14">
          <div class="bg-red-400 rounded-md p-1 bg-opacity-20">
            <p style="max-width: 800px" class="font-bold text-gray-900">
              Hello! I'm Front-end web/Android developer with some creativity
              and passion about solving problems and creating new stuff on the
              internet.I start my programming journey from
              <span class="text-rose-600">2017</span> and since today I had
              experience to work at a
              <span class="text-blue-600">start-up</span> and a
              <span class="text-blue-600">freelancing team</span> projects.
            </p>
            <p style="max-width: 800px" class="pt-2 font-bold text-gray-900">
              Recently I'm intrested in vue/nuxt framwork and also Flutter for
              mobile app development.
            </p>
            <p style="max-width: 800px" class="pt-2 font-bold text-gray-900">
              Here are a few technologies I've been working with recently:
            </p>
          </div>
          <h3 class="font-bold text-2xl my-4">My Skills</h3>
          <div class="flex flex-wrap" style="max-width:800px">
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Vue/Nuxt</div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Angular</div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Javascript</div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Tailwinds</div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">
              Html/Css/sass
            </div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Flutter</div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Dart</div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">jQuery</div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Photoshop</div>
            <div class="glass rounded-full py-1 px-4 mr-3 my-2">Illustrator</div>
          </div>
          <div class="flex flex-wrap my-4">
            <!-- <div
              class="mt-4 px-4 py-1 rounded-3xl glass-btn text-rose-600 hover:text-white duration-500 font-semibold"
            >
              More About Me
            </div> -->
            <!-- <div class="w-5"></div> -->
            <nuxt-link to="Contact">
              <div
                class="
                  mt-4
                  px-4
                  py-1
                  rounded-3xl
                  glass-btn
                  text-rose-600
                  hover:text-white
                  duration-500
                  font-semibold
                "
              >
                Contact Me
              </div>
            </nuxt-link>
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
.avt {
  max-width: 400px;
  @media only screen and(max-width:500px) {
    max-width: 300px;
  }
  @media only screen and(max-width:370px) {
    max-width: 250px;
  }
}
</style>>
