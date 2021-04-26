<template>
  <div class="my_container">
    <div class="card">
      <div class="imgBx">
        <img src="~/assets/image/sample/nature-4.jpg" alt="Alaki" />
      </div>
      <div class="content">
        <h2>Card one</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et
          soluta pariatur molestias, fugiat quos modi deserunt nobis tempora, ab
          suscipit porro aut perspiciatis iusto?
        </p>
      </div>
    </div>
    <div class="card">
      <div class="imgBx">
        <img src="~/assets/image/sample/nature-5.jpg" alt="Alaki" />
      </div>
      <div class="content">
        <h2>Card two</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et
          soluta pariatur molestias, fugiat quos modi deserunt nobis tempora, ab
          suscipit porro aut perspiciatis iusto?
        </p>
      </div>
    </div>
    <div class="card">
      <div class="imgBx">
        <img src="~/assets/image/sample/nature-1.jpg" alt="Alaki" />
      </div>
      <div class="content">
        <h2>Card three</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et
          soluta pariatur molestias, fugiat quos modi deserunt nobis tempora, ab
          suscipit porro aut perspiciatis iusto?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	mounted() {
    var paper =new Audio('/audio/paper-3.mp3');
    const navUl = document.querySelector(".my_container").children;
    for (var i = 0; i < navUl.length ;i++){

      navUl[i].firstElementChild.addEventListener("mouseenter", function (event) {
        paper.play();
       });
      }
      
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2:wght@400;700&family=Pacifico&display=swap");

.my_container {
  /* font-family: 'Baloo Tammudu 2', cursive; */
  font-family: "Pacifico", cursive;
  position: relative;
  width: 1100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
  .card {
    max-width: 300px;
    height: 180px;
    position: relative;
    background: #fff;
    margin: 30px 10px;
    padding: 20px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
	border-radius:4px 4px  30px 0;
    &:hover {
	border-radius:2px 2px  8px 8px;
      height: 380px;
			.content{
				visibility: visible;
      opacity: 1;
			margin-top: -40px;
			transition-delay: .3s;
			}
    }
    .imgBx {
      position: relative;
      width: 260px;
      // height: 260px;
      top: -60px;
      left: 5px;
      z-index: 1;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

      img {
        max-width: 100%;
        border-radius: 4px;
      }
    }
    .content {
      position: relative;
      margin-top: -140px;
      padding: 10px 15px 15px;
      text-align: center;
      color: #111;
      visibility: hidden;
      opacity: 0;
      transition: 0.3s ease-in-out;
			h2{
				 font-family: 'Baloo Tammudu 2', cursive; 
				 font-size: 20px;
				 font-weight: bold;
			}
    }
  }
}
</style>