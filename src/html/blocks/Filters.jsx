import React from 'react';
import filterBrands from '../blocks/data/filter-brands.json';
import RangeSlider from './catalog/range-slider';

const Filter = () => {
  return (
    <div className="filters">
      {/* Мобильный заголовок */}
      <div className="filters-mobile-title">
        <button className="filters-mobile-btnClose">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L18 18" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
            <path d="M18 6L6 18" stroke="#888888" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <h2 className="title">Фильтры</h2>
      </div>

      {/* Фильтры брендов */}
      <div className="filter filter-brands">
        <h4 className="filter__title">Марки</h4>
        <div className="filter__items">
          {filterBrands.map((brand) => (
            <div key={brand.id} className="filter__item">
              <input
                type="checkbox"
                className="filter-checkbox"
                id={brand.id}
                name={brand.name}
                value={brand.value}
              />
              <label className="filter__item-label" htmlFor={brand.for}>
                {brand.title}
              </label>
            </div>
          ))}
          <div className="filter__items-hidden">
            <div className="filter__items">
              {filterBrands.map((brand) => (
                <div key={`hidden-${brand.id}`} className="filter__item">
                  <input
                    type="checkbox"
                    className="filter-checkbox"
                    id={`hidden-${brand.id}`}
                    name={brand.name}
                    value={brand.value}
                  />
                  <label className="filter__item-label" htmlFor={brand.for}>
                    {brand.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="filter__links">
          <a href="#!" className="filter__link">Показать все</a>
          <a href="#!" className="filter__link filter__link-hide">Свернуть</a>
        </div>
      </div>

      {/* Фильтры кузова */}
      <div className="filter filter-body">
        <h4 className="filter__title">Кузов</h4>
        <div className="filter__items">
          {["Седан", "Хэчбэк 3 дв.", "Хэчбэк 5 дв.", "Лифтбэк", "Внедорожник 3 дв."].map((id) => (
            <div key={id} className="filter__item">
              <input type="checkbox" className="filter-checkbox" id={id} name={id} value={id} />
              <label className="filter__item-label" htmlFor={id}>{id}</label>
            </div>
          ))}
          <div className="filter__items-hidden">
            <div className="filter__items">
              {['Внедорожник 5 дв.', 'Внедорожник 7 дв.'].map((id) => (
                <div key={id} className="filter__item">
                  <input type="checkbox" className="filter-checkbox" id={id} name={id} value={id} />
                  <label className="filter__item-label" htmlFor={id}>{id}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="filter__links">
          <a href="#!" className="filter__link">Показать все</a>
          <a href="#!" className="filter__link filter__link-hide">Свернуть</a>
        </div>
      </div>

      {/* Фильтры трансмиссии */}
      <div className="filter filter-transmission">
        <h4 className="filter__title">Коробка</h4>
        <div className="filter__items">
          {["Автомат", "Робот", "Вариатор", "Механический"].map((id) => (
            <div key={id} className="filter__item">
              <input type="checkbox" className="filter-checkbox" id={id} name={id} value={id} />
              <label className="filter__item-label" htmlFor={id}>{id}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Фильтры двигателя */}
      <div className="filter filter-engine">
        <h4 className="filter__title">Двигатель</h4>
        <div className="filter__items">
          {["бензин", "дизель", "гибрид", "электро"].map((id) => (
            <div key={id} className="filter__item">
              <input type="checkbox" className="filter-checkbox" id={id} name={id} value={id} />
              <label className="filter__item-label" htmlFor={id}>{id}</label>
            </div>
          ))}
          <div className="filter__items-hidden">
            <div className="filter__items">
              {['Турбированный', 'Атмосферный'].map((id) => (
                <div key={id} className="filter__item">
                  <input type="checkbox" className="filter-checkbox" id={id} name={id} value={id} />
                  <label className="filter__item-label" htmlFor={id}>{id}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="filter__links">
          <a href="#!" className="filter__link">Показать все</a>
          <a href="#!" className="filter__link filter__link-hide">Свернуть</a>
        </div>
      </div>

      {/* Другие фильтры (привод, руль, места и т.д.) */}
      <div className="filter filter-seats">
        <h4 className="filter__title">Количество мест</h4>
        <div className="filter__items">
          {['2', '3', '4', '5', '6', '7', '8', '9', '10', '11'].map((id) => (
            <div key={id} className="filter__item">
              <input type="checkbox" className="filter-checkbox" id={`seats-${id}`} name={`seats-${id}`} value={`seats-${id}`} />
              <label className="filter__item-label" htmlFor={`seats-${id}`}>
                {`${id} мест${id === '1' ? 'о' : ''}`}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="filter-range-sliders">
       <RangeSlider/>
    </div>
    </div>
  );
};

export default Filter;
