import CatalogAutoApp from './CatalogAutoApp'
CatalogAutoApp();

// Button favorite
import btnFav from './modules/btn-fav.js';
btnFav();


// Catalog Card List display
document.addEventListener('DOMContentLoaded', () => {
  import('./modules/catalog-cards-list.js')
      .then((module) => {
          module.default();
      })
      .catch((error) => console.error('Ошибка при загрузке catalogCardsList:', error));
});




// Filter-slider
import filterSlider from './modules/filter-range-slider.js';
filterSlider(); 



// Filter-range-slider-modifier
import filterRangeSliderModifier from './modules/filter-range-slider-modifier.js';
filterRangeSliderModifier(); 



// Filter Hidden
import filterHidden from './modules/filter-hidden.js';
filterHidden();

console.log('catalogCardsList');

// Мобильная навигация
import mobileNav2 from './modules/mobile-nav2.js';
mobileNav2();

// //  Каталог модальное окно фильров по нажатию на кнопку
// import catalogFiltersModalMobile from './modules/catalog-filters-modal-mobile.js';
// catalogFiltersModalMobile();

// //  Каталог модальное окно фильров по нажатию на кнопку
// import catalogFiltersModalRadio from './modules/catalog-filters-modal-radio.js';
// catalogFiltersModalRadio();
