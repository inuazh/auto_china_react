import React from 'react';
import FavoriteBtn from './FavoriteBtn';
import FavModal from './FavModal';

const NewCarsCard = () => {
    return (
        <article className="auto-card new-cars-card">
            <div className="auto-card__imege">
                <img
                    className="auto-card__img"
                    src="./../../../img/new-cars/01.jpg"
                    alt="cars"
                />
            </div>

            <div className="favorite-btn">
                <FavoriteBtn />
                <FavModal />
            </div>

            <div className="auto-card__text">
                <div className="auto-card__price-wrap">
                    <p className="auto-card__price">3 686 000 ₽</p>
                    <p className="auto-card__price-old"></p>
                </div>

                <a href="catalog-card.html" className="auto-card__title">
                    Zeekr X
                </a>

                <div className="auto-card__desc">
                    <p className="auto-card__desc-card">
                        Привод: <span>4WD</span>
                    </p>
                    <p className="auto-card__desc-card">
                        Коробка передач: <span>Робот</span>
                    </p>
                    <p className="auto-card__desc-card">
                        Расход топлива: <span>9,9л. (100 км)</span>
                    </p>
                    <p className="auto-card__desc-card">
                        Тип топлива: <span>бензин</span>
                    </p>
                </div>
            </div>
        </article>
    );
};

export default NewCarsCard;
