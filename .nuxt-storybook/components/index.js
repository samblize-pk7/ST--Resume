export { default as ButtonsDefaultBtn } from '../..\\components\\Buttons\\DefaultBtn.vue'
export { default as CarouselOwl } from '../..\\components\\carousel\\owl.vue'
export { default as CarouselProductSH } from '../..\\components\\carousel\\ProductSH.vue'
export { default as MenuSideNavbar } from '../..\\components\\menu\\SideNavbar.vue'
export { default as MenuStickyNavbar } from '../..\\components\\menu\\stickyNavbar.vue'

export const LazyButtonsDefaultBtn = import('../..\\components\\Buttons\\DefaultBtn.vue' /* webpackChunkName: "components/buttons-default-btn" */).then(c => c.default || c)
export const LazyCarouselOwl = import('../..\\components\\carousel\\owl.vue' /* webpackChunkName: "components/carousel-owl" */).then(c => c.default || c)
export const LazyCarouselProductSH = import('../..\\components\\carousel\\ProductSH.vue' /* webpackChunkName: "components/carousel-product-sh" */).then(c => c.default || c)
export const LazyMenuSideNavbar = import('../..\\components\\menu\\SideNavbar.vue' /* webpackChunkName: "components/menu-side-navbar" */).then(c => c.default || c)
export const LazyMenuStickyNavbar = import('../..\\components\\menu\\stickyNavbar.vue' /* webpackChunkName: "components/menu-sticky-navbar" */).then(c => c.default || c)
