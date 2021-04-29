<template>
  <body>
    <BGGradientTron />
    <div class="flex justify-center">
      <div
        class="glass rounded-xl mx-2 sm:mx-3 mt-10 mb-10 lg:mx-10 w-full max-view relative"
      >
        <nav class="absolute -top-4 -right-4 ">
           <nuxt-link to="/Portfolio">
           
          <div class="nav-btn glass rounded-full duration-500 hover:-translate-y-1 transform" >
            <div class="times" :class="{ active: mobileMenuIsActive }"></div>
          </div>
           </nuxt-link>
        </nav>
        <transition name="menuAnime">
          <div v-if="!mobileMenuIsActive">
            <Nuxt />
          </div>
        </transition>
       
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      mobileMenuIsActive: false,
    };
  },
  methods: {
    ToggleMobileMenu() {
      this.mobileMenuIsActive = !this.mobileMenuIsActive;
      console.log("workin");
    },
  },
};
</script>


<style  lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;600;700&display=swap");
* {
  font-family: "Raleway", sans-serif;
}
body::-webkit-scrollbar {
  width: 5px;
}
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

body::-webkit-scrollbar-thumb {
  background-color: rgb(211, 22, 117);
  outline: 1px solid rgba(50, 67, 85, 0.404);
}
.nav-btn {
  
  &.glass {
    border-radius: 9999px;
  }
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;

  .times {
    width: 22px;
    height: 3px;
    position: relative;
    background: rgba(255, 255, 255, 0);
    &::after,
    &::before {
      position: absolute;
      width: inherit;
      height: inherit;
      border-radius: 1000px;
      content: "";
    }

    &::before {
      // width: 40px;
      transform: rotate(45deg);
      @apply bg-red-400;
      top: 0px;
    }
    &::after {
      @apply bg-red-400;
      // width: 40px;

      top: 0;
      transform: rotate(-45deg);
    }
  }
}

.menuAnime-enter-active,
.menuAnime-leave-active {
  transition: opacity 0.3s;
}
.menuAnime-enter, .menuAnime-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
