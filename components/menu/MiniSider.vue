<template>
  <div>
    <div
      class="dark-go flex justify-start w-16 mb-7 text-amber-500 p-2 bg-white rounded-full"
      @click="DarkMode()"
    >
      <fa class="fa m-auto" :icon="Toggle" />
    </div>
    <nav class="navigation">
      <ul id="mini_nav"  >
        <li >
          <a href="#">
            <span class="icon"><fa class="fa" :icon="Home" /> </span>
            <span class="title">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"><fa class="fa" :icon="Code" /> </span>
            <span class="title">Mini Prohect</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"><fa class="fa" :icon="User" /></span>
            <span class="title">About</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"><fa class="fa" :icon="Rocket" /></span>
            <span class="title">Premume Project</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="icon"><fa class="fa" :icon="Cog" /></span>
            <span class="title">Settings</span>
          </a>
        </li>
      </ul>
    </nav>
     <div
      class=" flex justify-center mt-7 text-gray-800 font-bold text-xs p-2 bg-white  rounded-lg uppercase"
     
    >@Sajjad.Theory</div>
  </div>
</template>

<script >
import {
  faCog,
  faHome,
  faCode,
  faRocket,
  faUser,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default {
  data: function () {
    return {
      BeDark: false,
      btnClick: new Audio("/click.mp3"),
    };
  },

  computed: {
    Cog() {
      return faCog; // Font-Awsome ICON
    },
    Home() {
      return faHome; // Font-Awsome ICON
    },
    Rocket() {
      return faRocket; // Font-Awsome ICON
    },
    Code() {
      return faCode; // Font-Awsome ICON
    },
    User() {
      return faUser; // Font-Awsome ICON
    },
    Sun() {
      return faSun; // Font-Awsome ICON
    },
    Moon() {
      return faMoon; // Font-Awsome ICON
    },
    Toggle() {
      if (this.BeDark) {
        return faMoon; // Font-Awsome ICON
      }
      return faSun; // Font-Awsome ICON
    },
  },
  methods: {
    DarkMode() {
      this.BeDark = !this.BeDark;

      this.btnClick.play();
      const nav = document.querySelector(".navigation");
      nav.classList.toggle("dark-mode");
      const stive = document.querySelector(".stive-glass");
      stive.classList.toggle("dark-mode");
      const btn = document.querySelector(".dark-go");
      btn.classList.toggle("dark-mode");
    },
  },
  mounted() {
    var Flip =new Audio('/FlipPage.mp3')
    const navUl = document.querySelector("#mini_nav").children;
    for (var i = 0; i < navUl.length ;i++){

      navUl[i].firstElementChild.addEventListener("mouseenter", function (event) {
        Flip.play();
       });
      }
      
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;600;700&display=swap");
nav {
  font-family: "Oswald", sans-serif;
}

nav.navigation {
  position: relative;
  width: 72px;
  height: 310px;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: 0.5s;
  ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5px auto;
    li {
      position: relative;
      list-style: none;
      border-radius: 10px;
      margin: auto;
      width: 90%;
      box-sizing: border-box;
      &:hover {
        background: #0077ff;
        a .icon {
          color: #fff;
        }

        a .title {
          transform: translateY(-15%) translateX(10px);
          visibility: visible;
          opacity: 1;
        }
      }

      a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-decoration: none;
        color: #0077ff;
        font-weight: 500;

        .icon {
          position: relative;
          display: block;
          line-height: 60px;
          text-align: center;
          .fa {
            font-size: 24px;
          }
        }
        .title {
          position: absolute;
          left: 70px;
          display: block;
          padding: 5px 10px;
          background-color: #fff;
          transform: translateY(-15%) translateX(0px);
          width: max-content;
          border-radius: 6px;
          box-shadow: 0 5px 15pxrgba (0, 0, 0, 0.1);
          visibility: hidden;
          opacity: 0;
          transition: 0.5s;

          &::before {
            content: "";
            position: absolute;
            width: 12px;
            height: 12px;
            left: -8px;
            top: 48%;
            z-index: -1;
            background-color: #fff;
            border-radius: 2px;
            transform: rotate(45deg) translateY(-50%);
          }
        }
      }
    }
  }
}

.navigation.dark-mode {
  background: black;
  .title {
    background: black;
    &::before {
      background: black;
    }
  }
}
.dark-go {
  font-size: 20px;
}
.dark-go.dark-mode {
  background: black;
  color: #4fdde7;
}
</style>