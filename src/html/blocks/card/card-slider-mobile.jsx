import React from "react";

const CardSliderMobile = () => {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide">
          <img src="../../../img/card-auto/01.jpg" alt="Автомобиль 1" />
        </div>
        <div className="slide">
          <img src="../../../img/card-auto/02.jpg" alt="Автомобиль 2" />
        </div>
        <div className="slide">
          <img src="../../../img/card-auto/03.jpg" alt="Автомобиль 3" />
        </div>
        <div className="slide">
          <img src="../../../img/card-auto/04.jpg" alt="Автомобиль 3" />
        </div>
        <div className="slide">
          <img src="../../../img/card-auto/05.jpg" alt="Автомобиль 3" />
        </div>
      </div>
      <div className="slider-indicators">
        <span className="indicator active" />
        <span className="indicator" />
        <span className="indicator" />
      </div>
    </div>
  );
};

export default CardSliderMobile;
