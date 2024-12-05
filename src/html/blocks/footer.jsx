import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-footer">
                <div className="footer__top">
                    <nav className="footer__nav">
                        <ul className="footer__nav-items">
                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">Автомобили</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">Запчасти</a>
                            </li>
                        </ul>

                        <ul className="footer__nav-items">
                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">Акции</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">Контакты</a>
                            </li>
                        </ul>

                        <ul className="footer__nav-items">
                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">О нас</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">Доставка и оплата</a>
                            </li>
                        </ul>

                        <ul className="footer__nav-items">
                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">Гарантия</a>
                            </li>
                            <li className="footer__nav-item">
                                <a href="#!" className="footer__nav-link">Вопросы и ответы</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="footer__contacts">
                        <a href="tel:+78002810212" className="footer__tel">8 (800) 281-02-12</a>
                        <a href="mailto:auto@autochina.ru" className="footer__mail">auto@autochina.ru</a>

                        <div className="footer__social">
                            <a href="#!" className="footer__social-link">
                                <img src="./../../img/icons/vk.svg" alt="vk" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__copy">
                    <div className="footer__copy-links">
                        <a href="#!" className="footer__copy-link">Пользовательское соглашение</a>
                        <a href="#!" className="footer__copy-link">Политика конфиденциальности</a>
                    </div>

                    <p className="footer__copy-desc">© 2024, Автомобили</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
