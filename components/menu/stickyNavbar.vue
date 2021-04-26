<template>
  <div>
    <header>
      <!-- <div class="shade  "></div> -->
      <div
        @click="toggleMobileMenu"
        class="px-2 py-5 relative z-10 lg:hidden bg-amber-50 bg-opacity-80 rounded-md"
        style="min-width: 46px"
      >
        <div class="hum_btn" :class="{ open: toggleMenu }"></div>
      </div>
      <ul class="">
        <li class="home">
          <a class="text-4xl pl-8" href="">
            <nuxt-link to="/"><fa icon="home" /></nuxt-link
          ></a>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/component">Component</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/themes">Themes</nuxt-link>
        </li>
        <!-- <li><a><nuxt-link to="/about">Contact me</nuxt-link></a></li> -->
        <li>
          <nuxt-link to="/projects">Projects</nuxt-link>
        </li>
      </ul>
      <nuxt-link to="/">
        <div class="logo" href="">Sajjad <span>Theory</span></div></nuxt-link
      >
    </header>

    <section class="mobile-menu" :class="{ active: toggleMenu }">
      <ul class="">
      
         <li class="home"  @click="toggleMobileMenu">
          <a class="text-4xl pl-8" >
            <nuxt-link to="/"><fa icon="home" /></nuxt-link
          ></a>
        </li>
        <li  @click="toggleMobileMenu">
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li  @click="toggleMobileMenu">
          <nuxt-link to="/component">Component</nuxt-link>
        </li>
        <li  @click="toggleMobileMenu">
          <nuxt-link to="/themes">Themes</nuxt-link>
        </li>
        <!-- <li><a><nuxt-link to="/about">Contact me</nuxt-link></a></li> -->
        <li  @click="toggleMobileMenu">
          <nuxt-link to="/projects">Projects</nuxt-link>
        </li>
    
      </ul>
    </section>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({
    toggleMenu: false,
  }),

  methods: {
    toggleMobileMenu() {
      this.toggleMenu = !this.toggleMenu;
    },
    handleScroll() {
      var header = document.querySelector("header");
      header?.classList.toggle("sticky", window.scrollY > 100);
    },
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
});
</script>

<style lang="scss" scoped>
header {
  direction: rtl;
  position: fixed;
  font-family: "Dosis", sans-serif;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.6s;
  padding: 40px 100px;
  z-index: 1000;
  overflow: hidden;
  .shade {
    position: absolute;
    background-color: black;
    clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);
    transform: translateX(35px);
    border-radius: 0px 0 0 4px;
    width: 237px;
    height: 100px;
    right: 0;
    top: 0;
  }
  .hum_btn {
    width: 30px;
    position: relative;
    height: 4px;
    border-radius: 25%;

    transition: 0.3s ease;
    background-color: rgb(21, 196, 88);
    &::before,
    &::after {
      transition: 0.3s ease;
      content: "";
      position: absolute;
      display: inherit;
      width: 25px;
      transform: translateX(0px);
      height: inherit;
      border-radius: inherit;
      background-color: inherit;
    }
    &::before {
      top: -10px;
      transform: translateX(0px);
    }
    &::after {
      top: 10px;
      transform: translateX(0px);
    }
    &.open {
      width: 0;

      &::before {
        transform: rotate(42deg);
        top: 0;
        width: 30px;
      }
      &::after {
        transform: rotate(-42deg);
        width: 30px;
        top: 0;
      }
    }
  }
  @media (max-width: 976px) {
    padding: 40px 52px 40px 20px;

    .shade {
      width: 170px;
    }
  }
  @media only screen and (max-width: 400px) {
    .logo {
      font-size: 1.5em !important;
    }
  }
}
header.sticky {
  padding: 20px 100px 10px 100px;
  background: #fff;
  @apply shadow-md;
  .logo {
    span {
      background-color: rgba(255, 255, 255, 0);
    }
  }

  @media (max-width: 976px) {
    padding: 20px 50px 10px 20px;
    .shade {
      clip-path: polygon(25% 0%, 100% 0, 75% 100%, 0% 100%);
      transform: translateX(35px);
      width: 100px;
      height: 100px;
      right: inherit;
    }
  }
  @media (max-width: 575px) {
    padding: 8px 50px 4px 20px;
    .shade {
      clip-path: polygon(25% 0%, 100% 0, 75% 100%, 0% 100%);
      transform: translateX(35px);
      width: 100px;
      height: 100px;
      right: inherit;
    }
  }
}
header .logo {
  position: relative;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.6s;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  span {
    font-size: 0.5em;

    z-index: -1;
    background: rgba(0, 0, 0, 0.808);
    clip-path: polygon(85% 0, 100% 50%, 85% 100%, 0% 100%, 5% 50%, 0% 0%);
    padding: 0 12px;
  }
}

header ul {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 976px) {
    display: none;
  }
}
header ul li {
  position: relative;
  list-style: none;
  font-weight: 600;
  font-size: 1.1rem;
}
header ul li a {
  position: relative;
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  transition: 0.6s;
}
header.sticky .logo,
header.sticky ul li a {
  color: #000;
}

// .sticky{
//   background: #fff;
//   @apply shadow-md;
// }

section.mobile-menu {
  background: #000;
  position: fixed;
  z-index: 900;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // display: none;
  transform: translateY(-100%);
  animation: hide 0.5s ease;

  ul {
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;
    li {
      margin: 25px 0px;
      position: relative;
      text-align: center;
      &::before {
        content: "";
        position: absolute;
        left: -40px;
        top: 10%;
        height: 80%;
        width: 8px;
        border-radius: 4px;
        background: rgba(42, 241, 232, 0.815);
      }
      a {
        color: #fff;
        font-size: 2rem;
        &.home {
          font-size: 2.2rem;
        }
      }
    }
  }
  &.active {
    opacity: 100;
    transform: translateY(0px);
    animation: showMenu 0.3s;
  }
}
@keyframes showMenu {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
@keyframes hide {
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  95% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>