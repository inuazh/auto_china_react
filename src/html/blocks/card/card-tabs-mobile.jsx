import React, { useState } from "react";
import "./Tabs.css"; // Стили перенесите в этот файл

const CardTabsMobile = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="tabs">
      <ul className="tab-list">
        <li
          className={`tab-item ${activeTab === "tab1" ? "active" : ""}`}
          onClick={() => handleTabClick("tab1")}
        >
          Описание
        </li>
        <li
          className={`tab-item ${activeTab === "tab2" ? "active" : ""}`}
          onClick={() => handleTabClick("tab2")}
        >
          Характеристики
        </li>
        <li
          className={`tab-item ${activeTab === "tab3" ? "active" : ""}`}
          onClick={() => handleTabClick("tab3")}
        >
          Комплектация
        </li>
      </ul>

      <div className="tab-content">
        <div className={`tab-pane ${activeTab === "tab1" ? "active" : ""}`}>
          <p>
            HAVAL M6 — это идеальный семейный автомобиль. Вместительный, удобный
            и безопасный. В нем реализованы надежные, проверенные временем
            технические решения. Дизайн HAVAL M6 отвечает духу времени
            и подчеркивает практичный характер автомобиля.
          </p>
          <p>
            Внешний облик HAVAL M6 – это гармония выверенных пропорций и ярких
            элементов дизайна Рельефная решетка радиатора вместе с фарами
            образует единый элемент в форме крыльев, передавая ощущение скорости
            и полета. Сильный характер кроссовера чувствуется в массивном
            корпусе с выраженными колесными арками. Горизонтальные задние фары
            образуют сплошную линию на всю ширину кузова автомобиля, подчеркивая
            современность его стиля.
          </p>

          <p>
            HAVAL M6&nbsp;предлагает весь комплекс современных технологий,
            которые обеспечивают комфортное и&nbsp;безопасное вождение. Круиз-
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

        <div className={`tab-pane ${activeTab === "tab2" ? "active" : ""}`}>
          <div className="card__specific-wrap">
            <div className="card__specific-items">
              <h4 className="card__specific-subtitle">
                Краткие характеристики
              </h4>
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
                <span className="card__specific-item-left">
                  Коробка передач
                </span>
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
                <span className="card__specific-item-left">
                  Дорожный просвет
                </span>
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
                <span className="card__specific-item-left">
                  Крутящий момент
                </span>
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
                <span className="card__specific-item-left">
                  Коробка передач
                </span>
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
                  6.5Jx17 ET50 / <br /> 7Jx18 ET50 / <br /> 7Jx19 ET50
                </span>
              </div>
              <div className="card__specific-item">
                <span className="card__specific-item-left">
                  Размерность задних дисков
                </span>
                <span className="card__specific-item-right">
                  6.5Jx17 ET50 / <br /> 7Jx18 ET50 / <br /> 7Jx19 ET50
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
                <span className="card__specific-item-left">
                  Коробка передач
                </span>
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
                <span className="card__specific-item-left">
                  Передние тормоза
                </span>
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
                  2020 / 2021 / <br /> 2022 / 2023 / <br /> 2024
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

        <div className={`tab-pane ${activeTab === "tab3" ? "active" : ""}`}>
          <div className="card__equip-wrap">
            <ul className="card__equip-items">
              <li className="card__equip-item">Антиблокировочная система</li>
              <li className="card__equip-item">
                Система курсовой устойчивости
              </li>
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
    </div>
  );
};

export default CardTabsMobile;
