<template>
  <main>
    <div class="mt-24">
      <h1 class="text-5xl font-bold text-center">Contact Me</h1>
      <div
        class="flex xl:flex-row flex-col justify-center xl:items-start items-center px-3"
      >
        <div class="px-3 xl:px-10 xl:w-1/2">
          <div class="mt-14">
            <form
              class="flex flex-col"
              action="https://formspree.io/f/xqkweawr"
              method="POST"
            >
              <input
                class="glass rounded-full px-4 my-3"
                name="name"
                type="text"
                placeholder="Name"
                required
              />
              <input
                class="glass rounded-full px-4 my-3"
                name="email"
                type="email"
                placeholder="Email"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]"
              />
              <input
                class="glass rounded-full px-4 my-3"
                name="subject"
                type="text"
                placeholder="Subject"
                required
              />
              <textarea
                class="glass rounded-2xl px-4 my-3"
                name="Message"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                style="max-width: 200px"
                class="mt-4 px-4 py-1 rounded-3xl glass-btn text-rose-600 hover:text-white duration-500 font-semibold focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div class="flex flex-col px-10 mt-14 xl:w-1/2">
          <div class="my-3">
            <h6 class="font-bold text-2xl">Email</h6>
            <p class="">samycrip10@gmail.com</p>
          </div>
          <div class="my-3">
            <h6 class="font-bold text-2xl">Phone</h6>
            <p class="num">+98 903 275 5825</p>
          </div>
          <div class="my-3">
            <h6 class="font-bold text-2xl">Follow Me</h6>
            <div class="flex flex-wrap">
              <a href="https://github.com/samblize-pk7">
                <div
                  class="glass-btn rounded-full flex justify-center items-center mr-3 my-2 text-rose-600 hover:text-white duration-400 overflow-hidden w-12 h-12"
                >
                  <fa class="text-xl" :icon="['fab', 'github']" />
                </div>
              </a>
              <a href="https://www.instagram.com/sajjad.theory/?r=nametag">
                <div
                  class="glass-btn rounded-full flex justify-center items-center mr-3 my-2 text-rose-600 hover:text-white duration-400 overflow-hidden w-12 h-12"
                >
                  <fa class="text-xl" :icon="['fab', 'instagram']" />
                </div>
              </a>
              <a href="https://twitter.com/Sajjad_Theory?s=09">
                <div
                  class="glass-btn rounded-full flex justify-center items-center mr-3 my-2 text-rose-600 hover:text-white duration-400 overflow-hidden w-12 h-12"
                >
                  <fa class="text-xl" :icon="['fab', 'twitter']" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/sajjsd-alizadeh-1b7033a0/">
                <div
                  class="glass-btn rounded-full flex justify-center items-center mr-3 my-2 text-rose-600 hover:text-white duration-400 overflow-hidden w-12 h-12"
                >
                  <fa class="text-xl" :icon="['fab', 'linkedin-in']" />
                </div>
              </a>
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
textarea::-webkit-scrollbar {
  width: 8px;

  // margin: 30px;
}
textarea::-webkit-scrollbar-track {
  border-radius: 9999px;
  margin: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

textarea::-webkit-scrollbar-thumb {
  // margin: 30px;
  border-radius: 9999px;
  background-color: rgb(22, 104, 211);
}
.num {
  font-family: "Courier New", Courier, monospace;
}
</style>