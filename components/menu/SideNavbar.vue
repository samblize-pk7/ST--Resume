<template>
  <div class="sidebar flex flex-col fixed bg-gray-900">
    <div class="text-white bg-indigo-900 flex justify-between items-center p-4">
      <div class="title">Dash-007</div>
      <button
        class="text-violet-600 hover:text-lightBlue-200 px-2 duration-300 text-lg focus:outline-none"
      >
        <fa icon="chevron-left" />
      </button>
    </div>
    <ul class="flex flex-col overflow-auto text-white py-3">
     <div class="item-title">custom</div>
      <li class="item-box"  :class="{'active' : activeItems === menuItems.Dashboard}" @click="ItemSelect(menuItems.Dashboard)">
        <div class="item">
          <div class="icon">
            <fa icon="cog" />
          </div>
          <span>Dashboard</span>
        </div>
        <div class="item-toggle">
          <fa icon="angle-down" />
        </div>
      </li>
      <li class="item-box"  :class="{'active' : activeItems === menuItems.About}"  @click="ItemSelect(menuItems.About)">
        <div class="item">
          <div class="icon">
            <fa icon="cog" />
          </div>
          <span>About</span>
        </div>
        <div class="item-toggle">
          <fa icon="angle-down" />
        </div>
      </li>
     <div class="item-title">custom</div>

      <li class="item-box">
        <div class="item">
          <div class="icon">
            <fa icon="cog" />
          </div>
          <span>Home</span>
        </div>
        <div class="item-toggle">
          <fa icon="angle-down" />
        </div>
      </li>
     
      <li class="item-box">
        <div class="item">
          <div class="icon">
            <fa icon="cog" />
          </div>
          <span>Home</span>
        </div>
        <div class="item-toggle">
          <fa icon="angle-down" />
        </div>
      </li>
     
      <li class="item-box">
        <div class="item">
          <div class="icon">
            <fa icon="cog" />
          </div>
          <span>Home</span>
        </div>
        <div class="item-toggle">
          <fa icon="angle-down" />
        </div>
      </li>
     
      <li class="item-box">
        <div class="item">
          <div class="icon">
            <fa icon="cog" />
          </div>
          <span>Home</span>
        </div>
        <div class="item-toggle">
          <fa icon="angle-down" />
        </div>
      </li>
     <div class="item-title">custom</div>
      <li class="item-box">
        <div class="item">
          <div class="icon">
            <fa icon="cog" />
          </div>
          <span>Home</span>
        </div>
        <div class="item-toggle">
          <fa icon="angle-down" />
        </div>
      </li>
     
      <li class="item-box">
        <div class="item">
          <div class="icon">
            <fa icon="cog" />
          </div>
          <span>Home</span>
        </div>
        <div class="item-toggle">
          <fa icon="angle-down" />
        </div>
      </li>
     
      <li class="item-box">
        <div class="item">
          <div class="icon">
            <fa icon="cog" />
          </div>
          <span>Home</span>
        </div>
        <div class="item-toggle">
          <fa icon="angle-down" />
        </div>
      </li>
     <div class="item-title">custom</div>
      <li class="item-box">
        <div class="item">
          <div class="icon">
            <fa icon="cog" />
          </div>
          <span>Home</span>
        </div>
        <div class="item-toggle">
          <fa icon="angle-down" />
        </div>
      </li>

    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      activeItems : "dashboard",
      menuItems:{
        Dashboard :"dashboard",
        About :"about",
      }
    };
  },
  methods :{
     ItemSelect(value :string){

       this.activeItems = value ;

   }
  }
});
</script>


<style lang="scss" scoped>
/*  scrollbar  */
::-webkit-scrollbar {
  -webkit-appearance: none;
}

::-webkit-scrollbar:vertical {
  width: 9px;
}

::-webkit-scrollbar:horizontal {
  height: 12px;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-600;
  border-radius: 10px;
  border: 3px solid;

  @apply border-blueGray-900;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
  @apply bg-blueGray-900;
}
/*  Google Font  */
@import url("https://fonts.googleapis.com/css2?family=Akaya+Telivigala&display=swap");

.sidebar {
  height: 100vh;
  width: 265px;
  z-index: 90;
 
}
.title {
  font-family: "Akaya Telivigala", cursive;
  font-size: 22px;
}
</style>


<style lang="postcss" scoped>
.item-title{
  @apply text-lightBlue-500 opacity-50 flex justify-between place-items-center mt-2 px-4 py-3;

}
.item-box {
  @apply text-blueGray-400 opacity-60 flex justify-between place-items-center duration-300 hover:opacity-100  hover:text-blueGray-50  hover:bg-blue-600 hover:bg-opacity-5 px-4 py-3 cursor-pointer;
}

.item-box .item {
  @apply flex  items-center;
}
.item-box .item .icon {
  @apply pl-3;
}
.item-box:hover .icon {
  @apply text-lightBlue-300;
}
.active{
@apply opacity-100  text-blueGray-50  bg-blue-600 bg-opacity-5 ;
}
.active .icon{
  @apply text-lightBlue-300;
}
</style>