// Функция для управления видимостью карточек
function setupCardsVisibility() {
  // Настройка для секции брендов
  const brandsList = document.querySelector('.brands__list');
  const brandsShowAll = document.querySelector('.brands__show-all');
  const brandsHideAll = document.querySelector('.brands__hide-all');
  const brandItems = document.querySelectorAll('.brands__item');
  
  // Настройка для секции видов техники
  const deviceTypesList = document.querySelector('.device-types__list');
  const deviceTypesShowAll = document.querySelector('.device-types__show-all');
  const deviceTypesHideAll = document.querySelector('.device-types__hide-all');
  const deviceTypeItems = document.querySelectorAll('.device-types__item');

  // Функция для проверки размера экрана и настройки видимости карточек брендов
  const checkBrandsScreenSize = () => {
    const width = window.innerWidth;
    if (width <= 768) {
      brandItems.forEach(item => item.classList.remove('brands__item--hidden'));
      brandsShowAll.style.display = 'none';
      brandsHideAll.style.display = 'none';
    } else if (width <= 1360) {
      brandItems.forEach((item, index) => {
        item.classList.toggle('brands__item--hidden', index >= 6);
      });
      brandsShowAll.style.display = 'flex';
      brandsHideAll.style.display = 'none';
    } else {
      brandItems.forEach((item, index) => {
        item.classList.toggle('brands__item--hidden', index >= 8);
      });
      brandsShowAll.style.display = 'flex';
      brandsHideAll.style.display = 'none';
    }
  };

  // Функция для проверки размера экрана и настройки видимости карточек видов техники
  const checkDeviceTypesScreenSize = () => {
    const width = window.innerWidth;
    if (width < 1020) {
      deviceTypeItems.forEach(item => {
        item.classList.remove('device-types__item--hidden');
        item.style.display = 'flex';
      });
      deviceTypesShowAll.style.display = 'none';
      deviceTypesHideAll.style.display = 'none';
    } else if (width < 1120) {
      deviceTypeItems.forEach((item, index) => {
        if (index >= 2) {
          item.classList.add('device-types__item--hidden');
          item.style.display = 'none';
        } else {
          item.classList.remove('device-types__item--hidden');
          item.style.display = 'flex';
        }
      });
      deviceTypesShowAll.style.display = 'flex';
      deviceTypesHideAll.style.display = 'none';
    } else if (width < 1360) {
      deviceTypeItems.forEach((item, index) => {
        if (index >= 3) {
          item.classList.add('device-types__item--hidden');
          item.style.display = 'none';
        } else {
          item.classList.remove('device-types__item--hidden');
          item.style.display = 'flex';
        }
      });
      deviceTypesShowAll.style.display = 'flex';
      deviceTypesHideAll.style.display = 'none';
    } else {
      deviceTypeItems.forEach((item, index) => {
        if (index >= 4) {
          item.classList.add('device-types__item--hidden');
          item.style.display = 'none';
        } else {
          item.classList.remove('device-types__item--hidden');
          item.style.display = 'flex';
        }
      });
      deviceTypesShowAll.style.display = 'flex';
      deviceTypesHideAll.style.display = 'none';
    }
  };

  // Обработчики для брендов
  if (brandsShowAll && brandsHideAll) {
    brandsShowAll.addEventListener('click', () => {
      brandsList.style.maxHeight = brandsList.scrollHeight + 'px';
      brandItems.forEach(item => item.classList.remove('brands__item--hidden'));
      brandsShowAll.style.display = 'none';
      brandsHideAll.style.display = 'flex';
    });

    brandsHideAll.addEventListener('click', () => {
      brandsList.style.maxHeight = '160px';
      checkBrandsScreenSize();
    });
  }

  // Обработчики для видов техники
  if (deviceTypesShowAll && deviceTypesHideAll) {
    deviceTypesShowAll.addEventListener('click', () => {
      deviceTypeItems.forEach(item => {
        item.classList.remove('device-types__item--hidden');
        item.style.display = 'flex';
      });
      deviceTypesShowAll.style.display = 'none';
      deviceTypesHideAll.style.display = 'flex';
    });

    deviceTypesHideAll.addEventListener('click', () => {
      checkDeviceTypesScreenSize();
    });
  }

  // Инициализация начального состояния
  checkBrandsScreenSize();
  checkDeviceTypesScreenSize();

  // Обработка изменения размера окна
  window.addEventListener('resize', () => {
    checkBrandsScreenSize();
    checkDeviceTypesScreenSize();
  });
}

// Запуск функции при загрузке страницы
document.addEventListener('DOMContentLoaded', setupCardsVisibility);