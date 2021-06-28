<template>
  <main>
    <div class="mt-20 mb-8">
      <h1 class="text-5xl font-bold text-center mb-14">Recent Works</h1>
      <div
        class="
          grid
          sm:px-10
          px-3
          xl:grid-cols-3
          md:grid-cols-2
          grid-cols-1
          justify-items-center
          w-full
          gap-8
        "
      >
        <div v-for="proj in project" :key="proj.slug" class="flex flex-col">
          <div class="glass rounded-xl">
            <div class="overflow-hidden m-1 px-2 py-1 rounded-xl">
                <nuxt-link :to="proj.path">
              <img
                class="
                  rounded-xl
                  duration-300
                  transform
                  hover:scale-125
                  hover:rotate-2
                "
                :src="'/project-image/'+proj.image"
                alt="image" style="max-height : 350px"
              />
                </nuxt-link>
            </div>
          </div>

          <div class="text-xl  font-bold capitalize my-4 line-clamp-1 dialog" style="letter-spacing:1px">
           {{proj.title}}
          </div>

  <nuxt-link :to="proj.path">
    
          <div
            class="
              px-8
              py-2
              rounded-xl
              glass-btn
              text-rose-600
              hover:text-white
              duration-500
              font-semibold
              w-28
              text-center
            "
          >
            Details
          </div>
  </nuxt-link>
        </div>
      </div>
  


    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  async asyncData({ $content, params }) {
    const project = await $content("project", params.slug)
      .only(["title", "image", "slug"])
      .sortBy("ID")
      .fetch();

    return { project };
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  filter: drop-shadow(2px 5px 15px #5dacf7);

  &::after {
    content: "";
    position: absolute;
    bottom: 1px;
    background: rgba(37, 100, 235, 0.5);
    // transform: rotate(45deg);
    border: inherit;
    z-index: -1;
    left: 0px;
    width: 80px;
    height: 8px;
    border-radius: 2px;
  }
}
</style>