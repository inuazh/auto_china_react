import React from 'react';
import ClassesCard from './ClassesCard';

// Пример данных (замените на импорт из JSON-файла, если используете его)
const classesData = [
    {
        id: 1,
        link: '#!',
        title: 'Седаны',
        img: './../../../img/classes/sedan.png',
    },
    {
        id: 2,
        link: '#!',
        title: 'Кроссоверы',
        img: './../../../img/classes/crossover.png',
    },
    {
        id: 3,
        link: '#!',
        title: 'Хэтчбеки',
        img: './../../../img/classes/hatchback.png',
    },
    {
        id: 4,
        link: '#!',
        title: 'Минивэны',
        img: './../../../img/classes/minivan.png',
    },
];

const Classes = () => {
    return (
        <section className="classes">
            <div className="container">
                <div className="block-title">
                    <h2 className="title">Автомобили по классам</h2>
                </div>
                <div className="classes__row">
                    {classesData.map(({ id, link, title, img }) => (
                        <ClassesCard key={id} link={link} title={title} img={img} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Classes;
