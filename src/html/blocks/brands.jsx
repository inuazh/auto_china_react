import React from "react";
import brandsData from "./data/brands-data.json";
// import image1 from './../../img/brands/';

const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <div className="block-title">
          <h2 className="title">Популярные автомобили</h2>
        </div>
        <div className="brands-cars__row">
          {brandsData.map((brand, index) => (
            <div className="brands-card" key={index}>
              <img
                src={require("../../img/brands/" + brand.img + ".jpg")}
                alt={brand.title}
                className="brands-card__logo"
              />

              <h3 className="brands-card__title">{brand.title}</h3>
              <p className="brands-card__count">{brand.count} моделей</p>
              <a href={brand.link} className="brands-card__link">
                Подробнее
              </a>
            </div>
          ))}
          <a href="#!" className="brands__link">
            Все марки
          </a>
        </div>
      </div>
    </section>
  );
};

export default Brands;
