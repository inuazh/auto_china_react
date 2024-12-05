import React from 'react';

const Card = () => {
  return (
<section className="card">
  <div className="container">
    <div className="card__nav-desctop">
      <div className="nav__page">
        <a className="nav__page-link" href="index.html">
          Главная
        </a>
        <img
          className="nav__page-svg"
          src="./../../img/icons/arrow.svg"
          alt="arrow"
        />
        <a className="nav__page-link" href="catalog-auto.html">
          Каталог автомобилей
        </a>
        <img
          className="nav__page-svg"
          src="./../../img/icons/arrow.svg"
          alt="arrow"
        />
        <a className="nav__page-link" href="#!">
          Haval
        </a>
        <img
          className="nav__page-svg"
          src="./../../img/icons/arrow.svg"
          alt="arrow"
        />
        <p className="nav__page-head">Haval M6</p>
      </div>
    </div>
    <div className="card__nav-mobile">
      <img
        className="nav__page-svg"
        src="./../../img/icons/arrows-left.svg"
        alt="arrow"
      />
      <a className="nav__page-link" href="catalog-auto.html">
        Каталог автомобилей
      </a>
    </div>
    <div className="card__row">
      <div className="card-slider-mobile">
        @@include('card/card-slider-mobile.html')
      </div>
      <div className="card__image">
        <div id="large-image" className="card__img-1">
          <img src="./../../../img/card-auto/01.jpg" alt="Haval" />
        </div>
        <div className="card__img-wrap">
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/01.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/02.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/03.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/04.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/05.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/06.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/02.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/03.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/06.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/03.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/04.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/05.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/06.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/04.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/05.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
          <div className="card__img-2">
            <img
              src="./../../../img/card-auto/06.jpg"
              alt="Haval"
              onmouseover="changeImage(this)"
            />
          </div>
        </div>
      </div>
      <div className="card__main">
        <div className="card__main-top">
          <h3 className="card__main-title">Haval M6 1.5 AMT, 2024</h3>
          <div className="card__main-prices">
            <p className="card__main-price">2 523 032 ₽ </p>
            <p className="card__main-price-old">2 623 032 ₽</p>
          </div>
          <div className="card__main-btn">
            <button className="card__main-favorite">
              Добавить в избранное
            </button>
            <button className="card__main-request">Оформить заявку</button>
          </div>
        </div>
        <div className="card__main-description">
          <h4 className="card__main-desc">Краткие характеристики</h4>
          <div className="card__main-desc-wrap">
            <span className="card__main-desc-wrap-left">
              Объём двигателя, л
            </span>
            <span className="card__main-desc-wrap-right">1.5</span>
          </div>
          <div className="card__main-desc-wrap">
            <span className="card__main-desc-wrap-left">Тип двигателя</span>
            <span className="card__main-desc-wrap-right">Бензин</span>
          </div>
          <div className="card__main-desc-wrap">
            <span className="card__main-desc-wrap-left">Мощность, л.с.</span>
            <span className="card__main-desc-wrap-right">150</span>
          </div>
          <div className="card__main-desc-wrap">
            <span className="card__main-desc-wrap-left">Коробка передач</span>
            <span className="card__main-desc-wrap-right">Автомат</span>
          </div>
          <div className="card__main-desc-wrap">
            <span className="card__main-desc-wrap-left">Привод</span>
            <span className="card__main-desc-wrap-right">Передний</span>
          </div>
          <a id="desc" className="card__main-desc-link" href="#desc">
            Смотреть описание
          </a>
        </div>
      </div>
    </div>
    <div className="card__description">
      <div className="card__text">
        <h3 className="card__text-title">Описание</h3>
        <p>
          HAVAL M6&nbsp;— это идеальный семейный автомобиль. Вместительный,
          удобный и&nbsp;безопасный. В&nbsp;нем реализованы надежные,
          проверенные временем технические решения. Дизайн HAVAL
          M6&nbsp;отвечает духу времени и&nbsp;подчеркивает практичный характер
          автомобиля.
        </p>
        <p>
          Внешний облик HAVAL M6 – это гармония выверенных пропорций и ярких
          элементов дизайна. Рельефная решетка радиатора вместе с фарами
          образует единый элемент в форме крыльев, передавая ощущение скорости и
          полета. Сильный характер кроссовера чувствуется в массивном корпусе с
          выраженными колесными арками. Горизонтальные задние фары образуют
          сплошную линию на всю ширину кузова автомобиля, подчеркивая
          современность его стиля.
        </p>
        <p>
          HAVAL M6&nbsp;предлагает весь комплекс современных технологий, которые
          обеспечивают комфортное и&nbsp;безопасное вождение. Круиз-
          и&nbsp;климат-контроль, камера заднего вида с&nbsp;парковочными
          сенсорами, большой мультимедийный экран, передняя светодиодная
          оптика&nbsp;— все, что вы&nbsp;хотели&nbsp;бы видеть в&nbsp;своем
          новом автомобиле.
        </p>
        <p>
          Надежный, практичный автомобиль, сочетающий в себе самые удачные
          конструктивные решения. Внешне эти качества HAVAL M6 лучше всего
          раскрываются в черном, белом и сером цветах кузова.
        </p>
      </div>
      <div className="card__specific">
        <h3 className="card__specific-title">Характеристики</h3>
        <div className="card__specific-wrap">
          <div className="card__specific-items">
            <h4 className="card__specific-subtitle">Краткие характеристики</h4>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Объём двигателя, л
              </span>
              <span className="card__specific-item-right">1.5</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Тип двигателя</span>
              <span className="card__specific-item-right">Бензин</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Мощность, л.с.</span>
              <span className="card__specific-item-right">143</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Коробка передач</span>
              <span className="card__specific-item-right">Робот</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Привод</span>
              <span className="card__specific-item-right">Передний</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Расход топлива смешанный
              </span>
              <span className="card__specific-item-right">9.0</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Длина</span>
              <span className="card__specific-item-right">4664</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Высота</span>
              <span className="card__specific-item-right">1729</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Ширина (с зеркалами)
              </span>
              <span className="card__specific-item-right">1830</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Дорожный просвет</span>
              <span className="card__specific-item-right">25</span>
            </div>
          </div>
          <div className="card__specific-items">
            <h4 className="card__specific-subtitle">Двигатель</h4>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Рабочий объём</span>
              <span className="card__specific-item-right">1.5</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Количество цилиндров
              </span>
              <span className="card__specific-item-right">5</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Конфигурация двигателя
              </span>
              <span className="card__specific-item-right">143</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Тип двигателя</span>
              <span className="card__specific-item-right">143</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Мощность, л.с.</span>
              <span className="card__specific-item-right">200</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Обороты максимальной мощности
              </span>
              <span className="card__specific-item-right">5000</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Крутящий момент</span>
              <span className="card__specific-item-right">8.7</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Обороты максимального крутящего момента
              </span>
              <span className="card__specific-item-right">4664</span>
            </div>
          </div>
          <div className="card__specific-items">
            <h4 className="card__specific-subtitle">Размеры</h4>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Объём двигателя, л
              </span>
              <span className="card__specific-item-right">1.5</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Тип двигателя</span>
              <span className="card__specific-item-right">Бензин</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Мощность, л.с.</span>
              <span className="card__specific-item-right">143</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Коробка передач</span>
              <span className="card__specific-item-right">Робот</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Привод</span>
              <span className="card__specific-item-right">Передний</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Расход топлива смешанный
              </span>
              <span className="card__specific-item-right">9.0</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Длина</span>
              <span className="card__specific-item-right">4664</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Высота</span>
              <span className="card__specific-item-right">1729</span>
            </div>
          </div>
          <div className="card__specific-items">
            <h4 className="card__specific-subtitle">Шины и диски</h4>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Размерность передних шин
              </span>
              <span className="card__specific-item-right">225/65 R17</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Размерность задних шин
              </span>
              <span className="card__specific-item-right">225/65 R17</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Размерность передних дисков
              </span>
              <span className="card__specific-item-right">
                6.5Jx17 ET50 7Jx18 ET50 7Jx19 ET50
              </span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Размерность задних дисков
              </span>
              <span className="card__specific-item-right">
                6.5Jx17 ET50 7Jx18 ET50 7Jx19 ET50
              </span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Крепёж (PCD)</span>
              <span className="card__specific-item-right">5x114.3</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Центральное отверстие (DIA)
              </span>
              <span className="card__specific-item-right">64.1</span>
            </div>
          </div>
          <div className="card__specific-items">
            <h4 className="card__specific-subtitle">Трансмиссия</h4>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Коробка передач</span>
              <span className="card__specific-item-right">Робот</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Привод</span>
              <span className="card__specific-item-right">Передний</span>
            </div>
          </div>
          <div className="card__specific-items">
            <h4 className="card__specific-subtitle">Подвеска и тормоза</h4>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Передние тормоза</span>
              <span className="card__specific-item-right">Дисковые</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Задние тормоза</span>
              <span className="card__specific-item-right">Дисковые</span>
            </div>
          </div>
          <div className="card__specific-items">
            <h4 className="card__specific-subtitle">
              Эксплуатационные характеристики
            </h4>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Расход топлива смешанный
              </span>
              <span className="card__specific-item-right">8.7</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Максимальная скорость
              </span>
              <span className="card__specific-item-right">175</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Экологический класс
              </span>
              <span className="card__specific-item-right">Euro 6</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Ёмкость топливного бака
              </span>
              <span className="card__specific-item-right">55</span>
            </div>
          </div>
          <div className="card__specific-items">
            <h4 className="card__specific-subtitle">Остальное</h4>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Модификация</span>
              <span className="card__specific-item-right">8.7</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Кузов</span>
              <span className="card__specific-item-right">175</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Количество дверей
              </span>
              <span className="card__specific-item-right">5</span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">Год</span>
              <span className="card__specific-item-right">
                2020 2021 2022 2023 2024
              </span>
            </div>
            <div className="card__specific-item">
              <span className="card__specific-item-left">
                Экологический класс
              </span>
              <span className="card__specific-item-right">Euro 6</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card__equip">
        <h3 className="card__equip__title">Комплектация</h3>
        <div className="card__equip-wrap">
          <ul className="card__equip-items">
            <li className="card__equip-item">Антиблокировочная система</li>
            <li className="card__equip-item">Система курсовой устойчивости</li>
            <li className="card__equip-item">
              Система помощи при экстренном торможении
            </li>
            <li className="card__equip-item">Подушки безопасности водителя</li>
            <li className="card__equip-item">
              Система крепления детских автокресел
            </li>
            <li className="card__equip-item">Иммобилайзер</li>
            <li className="card__equip-item">Центральный замок</li>
            <li className="card__equip-item">Бортовой компьютер</li>
            <li className="card__equip-item">Камера заднего вида</li>
            <li className="card__equip-item">
              Система помощи при старте в гору
            </li>
            <li className="card__equip-item">
              Система помощи при спуске с горы
            </li>
          </ul>
          <ul className="card__equip-items">
            <li className="card__equip-item">Усилитель руля</li>
            <li className="card__equip-item">Регулировка руля</li>
            <li className="card__equip-item">
              Электростеклоподъемники передние
            </li>
            <li className="card__equip-item">Климат-контроль 1-зонный</li>
            <li className="card__equip-item">
              Подогрев сидений водителя и пассажира
            </li>
            <li className="card__equip-item">Обогрев зеркал</li>
            <li className="card__equip-item">USВ</li>
            <li className="card__equip-item">ТV</li>
            <li className="card__equip-item">Размер дисков 17″</li>
            <li className="card__equip-item">Светодиодные фары</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="card-tabs-mobile">
      @@include('card/card-tabs-mobile.html')
    </div>
    <div className="recommendations">
      <h3 className="recommendations__title">
        С этим автомобилем также смотрят
      </h3>
      <div className="recommendations__wrap">
        @@include('blocks/popular-cars-card.html')
        @@include('blocks/popular-cars-card.html')
        @@include('blocks/popular-cars-card.html')
        @@include('blocks/popular-cars-card.html')
        @@include('blocks/popular-cars-card.html')
        @@include('blocks/popular-cars-card.html')
        @@include('blocks/popular-cars-card.html')
        @@include('blocks/popular-cars-card.html')
      </div>
    </div>
  </div>
</section>

  );
};

export default Card;
