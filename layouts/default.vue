<template>
  <body>
    <BGGradientTron />
    <div class="flex justify-center">
      <div
        class="glass rounded-xl mx-2 sm:mx-3 mt-10 mb-10 lg:mx-10 w-full max-view relative"
      >
        <nav class="absolute top-3 right-5">
          <div class="nav-btn glass rounded-full" @click="ToggleMobileMenu()">
            <div
              class="nav-bar bg-rose-400"
              :class="{ active: mobileMenuIsActive }"
            ></div>
          </div>
        </nav>
        <transition name="menuAnime">
          <div v-if="!mobileMenuIsActive">
            <Nuxt />
          </div>
        </transition>
        <transition name="menuAnime">
          <ul
            v-if="mobileMenuIsActive"
            class="flex flex-col justify-center items-center"
            style="height: 89vh"
          >
            <nuxt-link to="/">
              <li class="text-4xl my-4 menu-item text-gray-900 duration-200 hover:text-rose-500" @click="ToggleMobileMenu()">Home</li>
            </nuxt-link>
            <nuxt-link to="/About">
              <li class="text-4xl my-4 menu-item text-gray-900 duration-200 hover:text-rose-500" @click="ToggleMobileMenu()">About</li>
            </nuxt-link>
            <nuxt-link to="/Portfolio">
              <li class="text-4xl my-4 menu-item text-gray-900 duration-200 hover:text-rose-500" @click="ToggleMobileMenu()">Portfolio</li>
            </nuxt-link>
            <nuxt-link to="/Contact">
              <li class="text-4xl my-4 menu-item text-gray-900 duration-200 hover:text-rose-500" @click="ToggleMobileMenu()">Contact</li>
            </nuxt-link>
          </ul>
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

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;300;400;600;700&display=swap');
  *{
   
    font-family: 'Raleway', sans-serif;
  
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

  .nav-bar {
    width: 22px;
    height: 2px;
    position: relative;
    &::after,
    &::before {
      transition: inherit;
      position: absolute;
      width: inherit;
      height: inherit;
      content: "";
      background: inherit;
    }
    &::before {
      top: -8px;
      left: 0;
    }
    &::after {
      top: 8px;
      right: 0;
    }

    transition: 0.3s;
    &.active {
      background: rgba(255, 255, 255, 0);
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
  &:hover {
    .nav-bar:not(.active) {
      &::before {
        width: 50%;
      }
      &::after {
        width: 50%;
      }
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

.menu-item{
  position: relative;
  &::before{
   content:'';
   position: absolute;
   right: 0;
   bottom: -10px;
   height:30px;
   z-index: -1;
   background: rgba(248, 245, 247, 0.863);
   transition: all .4s;
   width: 0%;
 }
 &:hover{
   &::before{
     width: 80%;
   }
 }
}
</style>
