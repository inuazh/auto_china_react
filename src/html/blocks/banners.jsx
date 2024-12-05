import React from 'react';

const Banners = () => {
    return (
        <section className="banners">
            <div className="container">
                <div className="block-title">
                    <h2 className="title">Акции</h2>
                    <a href="#!" className="block-title__link">Все акции</a>
                </div>
            </div>

            <div className="container-right">
                <div className="banners__swiper">
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="banners__item banners__item-left">
                                    <div className="banners__item-offer">
                                        <p>Спецпредложение</p>
                                    </div>
                                    <h3 className="banners__item-title">Скидки 20% на <br /> зимнюю резину</h3>
                                    <a href="#!" className="banners__item-link">Узнать подробнее</a>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="banners__item banners__item-right">
                                    <div className="banners__item-offer accent">
                                        <p>Акция</p>
                                    </div>
                                    <h3 className="banners__item-title">Подарок при покупке кроссовера</h3>
                                    <a href="#!" className="banners__item-link">Узнать подробнее</a>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banners;
