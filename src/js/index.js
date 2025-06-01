import '../scss/style.scss';
import './menu.js';
import './show-all.js';
import './slider.js';

// Обработка кнопок показать/скрыть в секции брендов
const showAllBtn = document.querySelector('.brands__show-all');
const hideAllBtn = document.querySelector('.brands__hide-all');
const brandItems = document.querySelectorAll('.brands__item');

if (showAllBtn && hideAllBtn) {
    // Функция для проверки текущего разрешения
    const checkScreenSize = () => {
        const width = window.innerWidth;
        if (width <= 768) {
            // На мобильных устройствах показываем все карточки
            brandItems.forEach(item => {
                item.classList.remove('brands__item--hidden');
            });
            showAllBtn.style.display = 'none';
            hideAllBtn.style.display = 'none';
        } else if (width <= 1360) {
            // На планшетах показываем 6 карточек
            brandItems.forEach((item, index) => {
                if (index >= 6) {
                    item.classList.add('brands__item--hidden');
                } else {
                    item.classList.remove('brands__item--hidden');
                }
            });
            showAllBtn.style.display = 'flex';
            hideAllBtn.style.display = 'none';
        } else {
            // На десктопе показываем 8 карточек
            brandItems.forEach((item, index) => {
                if (index >= 8) {
                    item.classList.add('brands__item--hidden');
                } else {
                    item.classList.remove('brands__item--hidden');
                }
            });
            showAllBtn.style.display = 'flex';
            hideAllBtn.style.display = 'none';
        }
    };

    // Проверяем размер экрана при загрузке
    checkScreenSize();

    // Проверяем размер экрана при изменении размера окна
    window.addEventListener('resize', checkScreenSize);

    showAllBtn.addEventListener('click', () => {
        brandItems.forEach(item => {
            item.classList.remove('brands__item--hidden');
        });
        showAllBtn.style.display = 'none';
        hideAllBtn.style.display = 'flex';
    });

    hideAllBtn.addEventListener('click', () => {
        checkScreenSize();
    });
}

// Обработка кнопок показать/скрыть в секции типов устройств
const deviceTypesShowAllBtn = document.querySelector('.device-types__show-all');
const deviceTypesHideAllBtn = document.querySelector('.device-types__hide-all');
const deviceTypeItems = document.querySelectorAll('.device-types__item');

if (deviceTypesShowAllBtn && deviceTypesHideAllBtn) {
    // Функция для проверки текущего разрешения
    const checkScreenSize = () => {
        const width = window.innerWidth;
        if (width < 1020) {
            // На мобильных устройствах показываем все карточки
            deviceTypeItems.forEach(item => {
                item.classList.remove('device-types__item--hidden');
            });
            deviceTypesShowAllBtn.style.display = 'none';
            deviceTypesHideAllBtn.style.display = 'none';
        } else if (width < 1120) {
            // На десктопе до 1120px показываем 2 карточки
            deviceTypeItems.forEach((item, index) => {
                if (index >= 2) {
                    item.classList.add('device-types__item--hidden');
                } else {
                    item.classList.remove('device-types__item--hidden');
                }
            });
            deviceTypesShowAllBtn.style.display = 'flex';
            deviceTypesHideAllBtn.style.display = 'none';
        } else if (width < 1360) {
            // На десктопе от 1120px до 1360px показываем 3 карточки
            deviceTypeItems.forEach((item, index) => {
                if (index >= 3) {
                    item.classList.add('device-types__item--hidden');
                } else {
                    item.classList.remove('device-types__item--hidden');
                }
            });
            deviceTypesShowAllBtn.style.display = 'flex';
            deviceTypesHideAllBtn.style.display = 'none';
        } else {
            // На десктопе от 1360px показываем 4 карточки
            deviceTypeItems.forEach((item, index) => {
                if (index >= 4) {
                    item.classList.add('device-types__item--hidden');
                } else {
                    item.classList.remove('device-types__item--hidden');
                }
            });
            deviceTypesShowAllBtn.style.display = 'flex';
            deviceTypesHideAllBtn.style.display = 'none';
        }
    };

    // Проверяем размер экрана при загрузке
    checkScreenSize();

    // Проверяем размер экрана при изменении размера окна
    window.addEventListener('resize', checkScreenSize);

    deviceTypesShowAllBtn.addEventListener('click', () => {
        deviceTypeItems.forEach(item => {
            item.classList.remove('device-types__item--hidden');
        });
        deviceTypesShowAllBtn.style.display = 'none';
        deviceTypesHideAllBtn.style.display = 'flex';
    });

    deviceTypesHideAllBtn.addEventListener('click', () => {
        checkScreenSize();
    });
}

// Функция для управления видимостью карточек
function setupCardsVisibility() {
  // Настройка для секции брендов
  const brandsList = document.querySelector('.brands__list');
  const brandsShowAll = document.querySelector('.brands__show-all');
  const brandsHideAll = document.querySelector('.brands__hide-all');
  
  // Настройка для секции видов техники
  const deviceTypesList = document.querySelector('.device-types__list');
  const deviceTypesShowAll = document.querySelector('.device-types__show-all');
  const deviceTypesHideAll = document.querySelector('.device-types__hide-all');

  // Обработчики для брендов
  brandsShowAll.addEventListener('click', () => {
    brandsList.style.maxHeight = brandsList.scrollHeight + 'px';
    brandsShowAll.style.display = 'none';
    brandsHideAll.style.display = 'flex';
  });

  brandsHideAll.addEventListener('click', () => {
    brandsList.style.maxHeight = '160px'; // Высота для отображения первых 4 карточек
    brandsShowAll.style.display = 'flex';
    brandsHideAll.style.display = 'none';
  });

  // Обработчики для видов техники
  deviceTypesShowAll.addEventListener('click', () => {
    const hiddenItems = deviceTypesList.querySelectorAll('.device-types__item--hidden');
    hiddenItems.forEach(item => {
      item.style.display = 'flex';
    });
    deviceTypesShowAll.style.display = 'none';
    deviceTypesHideAll.style.display = 'flex';
  });

  deviceTypesHideAll.addEventListener('click', () => {
    const hiddenItems = deviceTypesList.querySelectorAll('.device-types__item--hidden');
    hiddenItems.forEach(item => {
      item.style.display = 'none';
    });
    deviceTypesShowAll.style.display = 'flex';
    deviceTypesHideAll.style.display = 'none';
  });

  // Инициализация начального состояния
  brandsHideAll.style.display = 'none';
  deviceTypesHideAll.style.display = 'none';
}

// Запуск функции при загрузке страницы
document.addEventListener('DOMContentLoaded', setupCardsVisibility);