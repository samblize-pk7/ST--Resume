<template>
  <main>
    <div class="my_container_box">
      <div class="navbar">
        <div class="menu">
          <h3 class="logo">Pnf <span>team</span></h3>
          <div class="hamburger_menu"><div class="bar"></div></div>
        </div>
      </div>
      <div class="main_container">
        <div class="main">
          <header>
            <div class="overlay">
              <div class="inner">
                <h2 class="title">Picturing Niche Future</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Perspiciatis facere cum eveniet velit praesentium maxime,
                  voluptatum id minus fuga fugiat asperiores voluptas?
                </p>
                <div href="#" class="btn"><a href=""> Read more </a></div>
              </div>
            </div>
          </header>
        </div>
        <div class="shadow one"></div>
        <div class="shadow two"></div>
      </div>

      <div class="links">
        <ul>
          <li><a href="#" style="--i: 0.1s">Home</a></li>
          <li><a href="" style="--i: 0.15s">Services</a></li>
          <li><a href="" style="--i: 0.2s">About</a></li>
          <li><a href="" style="--i: 0.25s">Portfolio</a></li>
          <li><a href="" style="--i: 0.3s">Contact</a></li>
          <li><a href="" style="--i: 0.35s">WorkShop</a></li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  
  data: {},

  mounted() {
    const hamburger_menu = document.querySelector(".hamburger_menu");
    const container = document.querySelector(".my_container_box");
    hamburger_menu.addEventListener("click", () => {
      container.classList.toggle("active");
      
    });
  },
};
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;700&display=swap");
* {
  direction: ltr;
}
main {
  font-family: "Dosis", sans-serif;
}
.my_container_box {
  min-height: 100vh;
  width: 100%;
  background-color: #485461;
  background-image: linear-gradient(135deg, #485461 0%, #28313b 74%);
  overflow: hidden;
  transform-style: preserve-3d;
}
.main_container {
  transform-style: preserve-3d;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 3rem;
}

.menu {
  max-width: 72rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgb(243, 237, 237);
}

.logo {
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 4rem;
  span {
    font-weight: 300;
  }
}
.hamburger_menu {
  width: 4rem;
  height: 3rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  .bar {
    width: 1.9rem;
    height: 1.5px;
    border-radius: 2px;
    background-color: #eeeeee;
    transition: 0.5s;
    position: relative;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: inherit;
      height: inherit;
      background-color: #eeeeee;
      transition: 0.5s;
    }
    &::before {
      transform: translateY(-9px);
    }
    &::after {
      transform: translateY(9px);
    }
  }
}

.main {
  position: relative;
  width: 100%;
  left: 0;
  z-index: 5;
  background-color: #ffffff;
  overflow: hidden;
  transform-origin: left;
  transform-style: preserve-3d;
  transition: 0.5s;
}
header {
  min-height: 100vh;
  width: 100%;
  background: url("~assets/image/sample/nature-4.jpg") no-repeat top center /
    cover;
  position: relative;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(28, 33, 48, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  .inner {
    max-width: 35rem;
    color: #ffffff;
    text-align: center;
    padding: 0 2rem;
    .title {
      font-size: 3.3rem;
      font-weight: bold;
      text-transform: capitalize;
    }
    .btn {
      margin-top: 1.2rem;
      // background-color: #1179e7;
      border: none;
      color: #ffffff;
      text-transform: uppercase;
      cursor: pointer;
      a {
        border-radius: 12px;
        padding: 0.6rem 1.8rem;
        background-color: #1462b6;
      }
    }
  }
}
.main_container{
    transform-style: preserve-3d;
    position: relative;
  transform-origin: left;
overflow: hidden;

}
.my_container_box.active {
  .bar {
    transform: rotate(180deg);
    background-color: transparent;
    &::after {
      transform: translateY(0) rotate(45deg);
    }
    &::before {
      transform: translateY(0) rotate(-45deg);
    }
  }
  .main {
    animation: main-animation 0.5s ease;
    transform: perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5);
    cursor: pointer;
  }

  .links a {
    animation: appear 0.5s forwards ease var(--i);
  }
  .shadow.one {
    transform: perspective(1300px) rotateY(20deg) translateZ(215px) scale(0.5);
    animation:shadow-one  0.6s ease-out;
  }
  .shadow.two {
    transform: perspective(1300px) rotateY(20deg) translateZ(120px) scale(0.5);
    animation:shadow-two  0.6s ease-out;
  }
  .main:hover +.shadow.one{
     

        transform: perspective(1300px) rotateY(20deg) translateZ(230px) scale(0.5);
     

  }
  .main:hover{
     transform: perspective(1300px) rotateY(20deg) translateZ(340px) scale(0.5);

  }
}

@keyframes shadow-one {
  0% {
    transform: translate(0);
  }
  5% {
    transform: perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5);
  }
  100% {
    transform: perspective(1300px) rotateY(20deg) translateZ(215px) scale(0.5);
  }
}
@keyframes shadow-two {
  0% {
    transform: translate(0);
  }
  20% {
    transform: perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5);
  }
  100% {
    transform: perspective(1300px) rotateY(20deg) translateZ(120px) scale(0.5);
  }
}
@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes hide {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
}
@keyframes main-animation {
  from {
    transform: translateY(0);
  }
  to {
    transform: perspective(1300px) rotateY(20deg) translateZ(310px) scale(0.5);
  }
}

.links {
  position: absolute;
  width: 30%;
  right: 0;
  top: 0;
  height: 100vh;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: rgb(217, 219, 226);
    padding: 0.7rem 0;
    display: inline-block;
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: 0.3s;
    opacity: 0;
    transform: translateY(10px);
    animation: hide 0.5s forwards ease;
    &:hover {
      color: #ffffff;
      text-shadow: 0 0 20px #18dcff, 2px 2px 2px rgba(206, 89, 55, 0);
    }
  }
}

.shadow {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: white;

   transform-style: preserve-3d;
  transform-origin: left;
  transition: 0.5s;
  &.one {
    z-index: -2;

    opacity: 0.15;
  }
  &.two {
    opacity: 0.1;
    z-index: -2;
  }
}
</style>