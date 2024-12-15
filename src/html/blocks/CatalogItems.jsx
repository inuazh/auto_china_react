import React from "react";
import NewCarsCard from "./blocks/new-cars-card";
import PopularCarsCard from "./blocks/popular-cars-card";

const CatalogItems = () => {
  return (
    <div className="catalog__items">
      <div className="catalog__items-titles">
        <div className="catalog__items-text">
          <p className="catalog__items-desc catalog__items-desc--selected">
            По популярности
          </p>
          <p className="catalog__items-desc">По убыванию цены</p>
          <p className="catalog__items-desc">По возрастанию цены</p>
        </div>

        <div className="catalog__items-icons">
          <button className="catalog__items-icon-tile">
            <svg
              className="catalog__items-icon-tile-svg scale"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 3C3.44772 3 3 3.44772 3 4V10C3 10.5523 3.44772 11 4 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3H4Z" />
              <path d="M13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11H14C13.4477 11 13 10.5523 13 10V4Z" />
              <path d="M14 13C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H20C20.5523 21 21 20.5523 21 20V14C21 13.4477 20.5523 13 20 13H14Z" />
              <path d="M3 14C3 13.4477 3.44772 13 4 13H10C10.5523 13 11 13.4477 11 14V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V14Z" />
            </svg>
          </button>

          <button className="catalog__items-icon-row">
            <svg
              className="catalog__items-icon-row-svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="17" width="4" height="4" rx="1" />
              <rect x="3" y="10" width="4" height="4" rx="1" />
              <rect x="3" y="3" width="4" height="4" rx="1" />
              <rect x="9" y="17" width="12" height="4" rx="1" />
              <rect x="9" y="10" width="12" height="4" rx="1" />
              <rect x="9" y="3" width="12" height="4" rx="1" />
            </svg>
          </button>
        </div>
      </div>

      <div className="catalog__item">
        <NewCarsCard />
        <PopularCarsCard imgSrc={"./../../../img/new-cars/01.jpg"} 
        price="20,000 USD"
        />
        <NewCarsCard />
        <PopularCarsCard imgSrc={"./../../../img/new-cars/01.jpg"} 
        price="20,000 USD"
        />
      </div>
    </div>
  );
};

export default CatalogItems;
