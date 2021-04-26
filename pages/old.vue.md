<template>
  <div>
    <!-- <MenuSideNavbar/> -->
    <!--  <MenuStickyNavbar/> -->
    <div class="title"><h1>@Sajjad.theory</h1></div>
    <div class="center-view">
      <HoverCard3DCollapse />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
});
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;600;700&display=swap");

.title {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    bottom: 100px;
    font-family: "Oswald", sans-serif;
    text-transform: uppercase;
    position: absolute;
    background: #fff;
    border-radius: 4px;
    padding: 8px 10px;
    font-weight: bold;
    left: 50%;
    transform: translateX(-50%);
    // width: 50px;
  }
}
.center-view {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  //  background: url("~assets/image/sample/nature-4.jpg") no-repeat top center / cover;
  //background: #7edabb;
  background: rgb(64, 173, 128);
  background: linear-gradient(
    60deg,
    rgba(64, 173, 128, 1) 2%,
    rgba(25, 173, 152, 1) 97%
  );
  overflow: hidden;
}
</style>
