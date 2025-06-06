import '../scss/style.scss'
import './menu.js'
import './show-all.js'
import './slider.js'

// Обработка кнопок показать/скрыть в секции брендов
const showAllBtn = document.querySelector('.brands__show-all')
const hideAllBtn = document.querySelector('.brands__hide-all')
const brandItems = document.querySelectorAll('.brands__item')

if (showAllBtn && hideAllBtn) {
  // Функция для проверки текущего разрешения
  const checkScreenSize = () => {
    const width = window.innerWidth
    if (width <= 768) {
      // На мобильных устройствах показываем все карточки
      brandItems.forEach((item) => {
        item.classList.remove('brands__item--hidden')
      })
      showAllBtn.style.display = 'none'
      hideAllBtn.style.display = 'none'
    } else if (width <= 1360) {
      // На планшетах показываем 6 карточек
      brandItems.forEach((item, index) => {
        if (index >= 6) {
          item.classList.add('brands__item--hidden')
        } else {
          item.classList.remove('brands__item--hidden')
        }
      })
      showAllBtn.style.display = 'flex'
      hideAllBtn.style.display = 'none'
    } else {
      // На десктопе показываем 8 карточек
      brandItems.forEach((item, index) => {
        if (index >= 8) {
          item.classList.add('brands__item--hidden')
        } else {
          item.classList.remove('brands__item--hidden')
        }
      })
      showAllBtn.style.display = 'flex'
      hideAllBtn.style.display = 'none'
    }
  }

  // Проверяем размер экрана при загрузке
  checkScreenSize()

  // Проверяем размер экрана при изменении размера окна
  window.addEventListener('resize', checkScreenSize)

  showAllBtn.addEventListener('click', () => {
    brandItems.forEach((item) => {
      item.classList.remove('brands__item--hidden')
    })
    showAllBtn.style.display = 'none'
    hideAllBtn.style.display = 'flex'
  })

  hideAllBtn.addEventListener('click', () => {
    checkScreenSize()
  })
}

// Функция для управления видимостью карточек
function setupCardsVisibility() {
  // Настройка для секции брендов
  const brandsList = document.querySelector('.brands__list')
  const brandsShowAll = document.querySelector('.brands__show-all')
  const brandsHideAll = document.querySelector('.brands__hide-all')

  // Обработчики для брендов
  brandsShowAll.addEventListener('click', () => {
    brandsList.style.maxHeight = brandsList.scrollHeight + 'px'
    brandsShowAll.style.display = 'none'
    brandsHideAll.style.display = 'flex'
  })

  brandsHideAll.addEventListener('click', () => {
    brandsList.style.maxHeight = '160px' // Высота для отображения первых 4 карточек
    brandsShowAll.style.display = 'flex'
    brandsHideAll.style.display = 'none'
  })

  // Инициализация начального состояния
  brandsHideAll.style.display = 'none'
}

// Запуск функции при загрузке страницы
document.addEventListener('DOMContentLoaded', setupCardsVisibility)
