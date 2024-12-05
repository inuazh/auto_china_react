import React from 'react';
import PopularCarsCard from './blocks/popular-cars-card';

const PopularCars = () => {
    const cars = [
        {
            id: 1,
            imgSrc: './../../../img/popular-cars/02.jpg',
            price: '3 686 000 ₽',
            oldPrice: '4 300 000₽',
            title: 'CHERY Tiggo 7 Pro Max',
            drive: '4WD',
            transmission: 'Робот',
            fuelConsumption: '9,9л. (100 км)',
            fuelType: 'Бензин',
        },
        {
            id: 2,
            imgSrc: './../../../img/popular-cars/02.jpg',
            price: '2 500 000 ₽',
            oldPrice: '3 000 000₽',
            title: 'Haval Jolion',
            drive: 'FWD',
            transmission: 'Автомат',
            fuelConsumption: '7,5л. (100 км)',
            fuelType: 'Дизель',
        },
        // Добавьте остальные автомобили
    ];

    return (
        <section className="popular-cars">
            <div className="container">
                <div className="block-title">
                    <h2 className="title popular-cars__title-mobile">Популярные автомобили</h2>
                    <a href="#!" className="block-title__link">Посмотреть все</a>
                </div>
                <div className="popular-cars__row">
                    {cars.map(car => (
                        <PopularCarsCard key={car.id} {...car} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCars;
