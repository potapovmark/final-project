import Swiper from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

document.addEventListener('DOMContentLoaded', () => {
  const indicatorDots = document.querySelectorAll('.slider-indicator__dot')

  // Check screen width on load and initialize Swiper if needed
  if (window.innerWidth <= 768) {
    // MOBILE: SLIDER INDICATOR SYNC
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      spaceBetween: 16,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    })

    // Sync custom indicator dots with Swiper
    swiper.on('slideChange', function () {
      const activeIndex = this.realIndex
      indicatorDots.forEach((dot, index) => {
        if (index === activeIndex) {
          dot.classList.add('slider-indicator__dot--active')
        } else {
          dot.classList.remove('slider-indicator__dot--active')
        }
      })
    })
  }
})
