import React from 'react';
import FavoriteBtn from './FavoriteBtn';
import FavModal from './FavModal';

const PopularCarsCard = ({ imgSrc, price, oldPrice, title, drive, transmission, fuelConsumption, fuelType }) => {
    return (
        <article className="auto-card new-cars-card">
            <div className="auto-card__imege">
                <img className="auto-card__img" src={imgSrc} alt="cars" />
            </div>
            <div className="favorite-btn">
                <FavoriteBtn />
                <FavModal />
            </div>
            <div className="auto-card__text">
                <div className="auto-card__price-wrap">
                    <p className="auto-card__price">{price}</p>
                    {oldPrice && <p className="auto-card__price-old">{oldPrice}</p>}
                </div>
                <a href="#!" className="auto-card__title">{title}</a>
                <div className="auto-card__desc">
                    <p className="auto-card__desc-card">Привод: <span>{drive}</span></p>
                    <p className="auto-card__desc-card">Коробка передач: <span>{transmission}</span></p>
                    <p className="auto-card__desc-card">Расход топлива: <span>{fuelConsumption}</span></p>
                    <p className="auto-card__desc-card">Тип топлива: <span>{fuelType}</span></p>
                </div>
            </div>
        </article>
    );
};

export default PopularCarsCard;
