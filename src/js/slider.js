// import Swiper JS
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/css'
// import Swiper modules
import { Pagination } from 'swiper/modules'

const indicatorDots = document.querySelectorAll('.slider-indicator__dot')

const swiper = new Swiper('.swiper', {
  modules: [Pagination],
  direction: 'horizontal',
  loop: true,
  spaceBetween: 16,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'bullets'
  }
})
