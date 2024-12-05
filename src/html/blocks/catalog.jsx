import React from 'react';
import Filters from './Filters';
import CatalogItems from './CatalogItems';

const Catalog = () => {
  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__nav">
          <div className="nav__page">
            <a className="nav__page-link" href="index.html">Главная</a>
            <img className="nav__page-svg" src="./../../img/icons/arrow.svg" alt="arrow" />
            <p className="nav__page-head">Каталог автомобилей</p>
          </div>
        </div>

        <div className="block-title catalog__title">
          <h2 className="title">Каталог автомобилей</h2>
        </div>

        <div className="catalog__row">
          <Filters />
          <CatalogItems />
        </div>
      </div>
    </section>
  );
};

export default Catalog;
