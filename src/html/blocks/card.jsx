import React, { useState } from "react";
import CardTabsMobile from "./card/card-tabs-mobile";
import PopularCarsCard from "./blocks/popular-cars-card";
import CardSliderMobile from "./card/card-slider-mobile";
import CardDescription from "./card/CardDescription.jsx";

const Card = () => {
  const images = [
    "./../../../img/card-auto/01.jpg",
    "./../../../img/card-auto/02.jpg",
    "./../../../img/card-auto/03.jpg",
    "./../../../img/card-auto/04.jpg",
    "./../../../img/card-auto/05.jpg",
    "./../../../img/card-auto/06.jpg",
  ];

  const [mainImage, setMainImage] = useState(images[0]);

  const changeImage = (newSrc) => {
    setMainImage(newSrc);
  };

  return (
    <section className="card">
      <div className="container">

        <div className="card__nav-desctop">
          <div className="nav__page">
            <a className="nav__page-link" href="index.html">
              Главная
            </a>
            <img
              className="nav__page-svg"
              src="./../../img/icons/arrow.svg"
              alt="arrow"
            />
            <a className="nav__page-link" href="catalog-auto.html">
              Каталог автомобилей
            </a>
            <img
              className="nav__page-svg"
              src="./../../img/icons/arrow.svg"
              alt="arrow"
            />
            <a className="nav__page-link" href="#!">
              Haval
            </a>
            <img
              className="nav__page-svg"
              src="./../../img/icons/arrow.svg"
              alt="arrow"
            />
            <p className="nav__page-head">Haval M6</p>
          </div>
        </div>
        <div className="card__nav-mobile">
          <img
            className="nav__page-svg"
            src="./../../img/icons/arrows-left.svg"
            alt="arrow"
          />
          <a className="nav__page-link" href="catalog-auto.html">
            Каталог автомобилей
          </a>
        </div>

        <div className="card__row">
          <div className="card-slider-mobile">
            <CardSliderMobile />
          </div>
          <div className="card__image">
            <div id="large-image" className="card__img-1">
              <img src={mainImage} alt="Haval" />
            </div>
            <div className="card__img-wrap">
              {images.map((imgSrc, index) => (
                <div key={index} className="card__img-2">
                  <img
                    src={imgSrc}
                    alt="Haval"
                    onMouseOver={() => changeImage(imgSrc)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="card__main">
            <div className="card__main-top">
              <h3 className="card__main-title">Haval M6 1.5 AMT, 2024</h3>
              <div className="card__main-prices">
                <p className="card__main-price">2 523 032 ₽ </p>
                <p className="card__main-price-old">2 623 032 ₽</p>
              </div>
              <div className="card__main-btn">
                <button className="card__main-favorite">
                  Добавить в избранное
                </button>
                <button className="card__main-request">Оформить заявку</button>
              </div>
            </div>
            <div className="card__main-description">
              <h4 className="card__main-desc">Краткие характеристики</h4>
              <div className="card__main-desc-wrap">
                <span className="card__main-desc-wrap-left">
                  Объём двигателя, л
                </span>
                <span className="card__main-desc-wrap-right">1.5</span>
              </div>
              <div className="card__main-desc-wrap">
                <span className="card__main-desc-wrap-left">Тип двигателя</span>
                <span className="card__main-desc-wrap-right">Бензин</span>
              </div>
              <div className="card__main-desc-wrap">
                <span className="card__main-desc-wrap-left">
                  Мощность, л.с.
                </span>
                <span className="card__main-desc-wrap-right">150</span>
              </div>
              <div className="card__main-desc-wrap">
                <span className="card__main-desc-wrap-left">
                  Коробка передач
                </span>
                <span className="card__main-desc-wrap-right">Автомат</span>
              </div>
              <div className="card__main-desc-wrap">
                <span className="card__main-desc-wrap-left">Привод</span>
                <span className="card__main-desc-wrap-right">Передний</span>
              </div>
              <a id="desc" className="card__main-desc-link" href="#desc">
                Смотреть описание
              </a>
            </div>
          </div>
        </div>
        <CardDescription />
        <div className="card-tabs-mobile">
          <CardTabsMobile />
        </div>
        <div className="recommendations">
          <h3 className="recommendations__title">
            С этим автомобилем также смотрят
          </h3>
          <div className="recommendations__wrap">
            <PopularCarsCard />
            <PopularCarsCard />
            <PopularCarsCard />
            <PopularCarsCard />
            <PopularCarsCard />
            <PopularCarsCard />
            <PopularCarsCard />
            <PopularCarsCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
