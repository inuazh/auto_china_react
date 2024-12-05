import React from 'react';
import NewCarsCard from './blocks/new-cars-card';

const NewCars = () => {
    return (
        <section className="new-cars">
            <div className="container">
                <div className="block-title">
                    <h2 className="title">Новые поступления</h2>
                    <a href="#!" className="block-title__link">
                        Все новинки
                    </a>
                </div>

                <div className="new-cars__wrap">
                    {/* Рендерим карточки */}
                    {[...Array(8)].map((_, index) => (
                        <NewCarsCard key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewCars;
