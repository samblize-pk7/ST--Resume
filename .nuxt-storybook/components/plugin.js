import Vue from 'vue'

const components = {
  ButtonsDefaultBtn: () => import('../..\\components\\Buttons\\DefaultBtn.vue' /* webpackChunkName: "components/buttons-default-btn" */).then(c => c.default || c),
  CarouselOwl: () => import('../..\\components\\carousel\\owl.vue' /* webpackChunkName: "components/carousel-owl" */).then(c => c.default || c),
  CarouselProductSH: () => import('../..\\components\\carousel\\ProductSH.vue' /* webpackChunkName: "components/carousel-product-sh" */).then(c => c.default || c),
  MenuSideNavbar: () => import('../..\\components\\menu\\SideNavbar.vue' /* webpackChunkName: "components/menu-side-navbar" */).then(c => c.default || c),
  MenuStickyNavbar: () => import('../..\\components\\menu\\stickyNavbar.vue' /* webpackChunkName: "components/menu-sticky-navbar" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
