<template>
  <div style="direction:ltr;" >
    <no-ssr >
      <!-- important to add no-ssr-->
      <carousel  :autoplay="false" :center="true" :items="1"  :loop="true" :margin="30" >
        <img style="max-height : 550px" src="https://placeimg.com/200/200/any?1" />
        <img style="max-height : 550px" src="https://placeimg.com/200/200/any?2" />
        <img style="max-height : 550px" src="https://placeimg.com/200/200/any?3" />
        <img style="max-height : 550px" src="https://placeimg.com/200/200/any?4" /> 
        <img style="max-height : 550px" src="https://placeimg.com/200/200/any?5" /> 
        <img style="max-height : 550px" src="https://placeimg.com/200/200/any?6" /> 
        </carousel
    ></no-ssr>
  </div>
</template>

<script>

export default {};
</script>

<style>
</style>