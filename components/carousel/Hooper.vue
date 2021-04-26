<template>
  <hooper :settings="hooperSettings">
    <slide>
      <div style="background-color: green; text-align: center; height: 100%">
        Hello
      </div>
    </slide>
    <slide>
      <div style="background-color: cyan; text-align: center; height: 100%">
        Hello
      </div>
    </slide>
    <slide>
      <div style="background-color: magenta; text-align: center; height: 100%">
        Hello
      </div>
    </slide>
    <slide>
      <div style="background-color: blue; text-align: center; height: 100%">
        Hello
      </div>
    </slide>
    <slide>
      <div style="background-color: white; text-align: center; height: 100%">
        Hello
      </div>
    </slide>
    <slide>
      <div style="background-color: red; text-align: center; height: 100%">
        Hello
      </div>
    </slide>
    <slide>
      <div style="background-color: violet; text-align: center; height: 100%">
        Hello
      </div>
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 2,
        centerMode: true,
        rtl: true,
      },
    };
  },
};
</script>

<style>
</style>