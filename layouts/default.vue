<template>
  <body>
    <BGGradientTron />
    <div class="flex justify-center">
      <div
        class="glass mx-2 sm:mx-3 mt-10 mb-10 lg:mx-10 w-full max-view relative"
      >
        <nav class="absolute top-3 right-5">
          <div class="nav-btn glass rounded-full" @click="ToggleMobileMenu()" >
            <div class="nav-bar bg-rose-400" :class="{'active': mobileMenuIsActive}"></div>
          </div>
        </nav>
        <Nuxt />
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
    &.active{
      
      background:rgba(255, 255, 255, 0);
      &::before {
        // width: 40px;
        transform:rotate(45deg) ;
        @apply bg-red-400;
        top: 0px;
      }
      &::after{
        @apply bg-red-400;
        // width: 40px;
        
        top: 0;
        transform:rotate(-45deg) ;
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
</style>
