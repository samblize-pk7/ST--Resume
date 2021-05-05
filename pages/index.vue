<template>
  <main
    class="flex items-center xl:justify-between justify-center px-3 xl:flex-row flex-col-reverse"
  >
    <section
      class="flex flex-col xl:mx-10 mx-2 xl:items-start items-center mt-7 xl:mt-0"
    >
      <p class="py-1 font-light">Hello, I'm</p>
      <h1 class="text-3xl py-1 font-bold">Sajjad Alizadeh</h1>
      <h2 class="py-1 text-center">
        <span class="text-rose-600 font-bold">F</span>rontend web &
        <span class="text-rose-600 font-bold">M</span>obile Application
        <span class="text-blue-600 font-bold">D</span>eveloper
      </h2>
      <div class="flex flex-wrap justify-center">
        <div
          class="mt-4 px-4 py-1 rounded-3xl glass-btn text-rose-600 hover:text-white duration-500 font-semibold"
        >
          More About Me
        </div>
        <div class="w-5"></div>
        <div
          class="mt-4 px-4 py-1 rounded-3xl glass-btn text-rose-600 hover:text-white duration-500 font-semibold"
        >
          Portfolio
        </div>
      </div>
    </section>
    <section
      class="avatar-parent glass relative rounded-full p-2 xl:mr-28 mx-8 xl:mx-0"
    >
      <div class="absolute glass rounded-xl p-1 dialog">
        <p>Let's turn Your idea into reality.</p>
      </div>
      <div class="blue-filter overflow-hidden rounded-full">
        <img class="avt-filter" src="~/assets/image/avt-1.png" alt="avatar" />
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.dialog {
  top: 0;
  transform: rotate(90deg) translateX(70%);
  transition: 0.3s ease-in-out;
  font-weight: 600;
  opacity: 0;
 filter: drop-shadow(2px 5px 15px #5DACF7);

  &::after {
    content: "";
    position: absolute;
    bottom: 5px;
    background: rgba(37, 99, 235, 0.6);
    // transform: rotate(45deg);
    border: inherit;
    z-index: -1;
    left: 4px;
    width: 80px;
    height: 8px;
    border-radius: 2px;
  }
}

.avatar-parent:hover {
  .dialog {
    transform: rotate(0) translateX(-80%);
    opacity: 1;
  }
}
.avt-filter {
  transition: all 0.3s;
}
.blue-filter {
  position: relative;
  &::after {
    position: absolute;
    transition: all 0.6s;
    border-radius: 50%;
    content: "";
    background: rgba(29, 170, 180, 0.281);
    width: 100%;
    height: 100%;
    top: 0;
    transform: translate(-100%, 100%);
    opacity: 0;
  }
}
.blue-filter:hover {
  &::after {
    opacity: 1;
    transform: translate(0, 0);

    width: 100%;
    height: 100%;
  }
  .avt-filter {
    filter: grayscale(100%);
  }
}
</style>