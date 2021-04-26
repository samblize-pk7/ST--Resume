<template>
  <div class="carousel">
    <!-- :: the Slider Card  -->
    <div class="box">
      <p class="marvel">Robot Hv-47</p>
      <img class="model" src="https://robohash.org/ds" alt="marvel" />
      <!-- details  -->
      <div class="details">
        <P
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, sit!
          Impedit tempore iste, dolores ad eius iusto id laudantium minus
          inventore quisquam. Animi, quasi eveniet qui amet dolores repellat
          maiores.</P
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.carousel {
  width: 100%;
  height: 100vh;
  background-color: #a4152c;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 350px;
  height: 610px;
  background-color: #1e1e26;
  border-radius: 10px;
  box-shadow: 2px 10px 12px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 20px 10px;
}

.model {
  height: 350px;
  max-height: 100%;
  max-width: 100%;
}
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  p {
    font-weight: bold;
    color: #6d6d79;
    text-align: left;
    margin: 20px 0;
  }
}
.marvel {
color: #32323e;
font-weight: bold;
font-size:24px;
padding:20px 0;
   }
</style>

