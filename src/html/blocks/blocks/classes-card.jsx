import React from 'react';

const ClassesCard = ({ link, title, img }) => {
    return (
        <article className="classes-card">
            <a className="classes-card__link" href={link}>
                {title}
            </a>
            <img className="classes-card__img" src={img} alt={title} />
        </article>
    );
};

export default ClassesCard;
