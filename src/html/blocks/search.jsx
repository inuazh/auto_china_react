import React from "react";

const SearchForm = () => {
  return (
    <section class="search">
      <div class="container">
        <div class="search-wrapper">
          <h2 class="search__title">Подобрать авто</h2>

          <div class="search-form">
            <form action="#!" className="search__form">
              <div className="search__form-row">
                <select
                  name="transport"
                  id="transport"
                  className="search__form-select"
                >
                  <option value="transport-1">Транспорт</option>
                  <option value="transport-2">Транспорт-02</option>
                  <option value="transport-3">Транспорт-03</option>
                </select>

                <select name="body" id="body" className="search__form-select">
                  <option value="body-1">Кузов</option>
                  <option value="body-2">Кузов-02</option>
                  <option value="body-3">Кузов-03</option>
                </select>

                <select name="brand" id="brand" className="search__form-select">
                  <option value="brand-1">Марка</option>
                  <option value="brand-2">Марка-02</option>
                  <option value="brand-3">Марка-03</option>
                </select>

                <select name="model" id="model" className="search__form-select">
                  <option value="model-1">Модель</option>
                  <option value="model-2">Модель-02</option>
                  <option value="model-3">Модель-03</option>
                </select>

                <input
                  type="number"
                  name="price_min"
                  placeholder="от 100 000 ₽"
                  className="search__form-input"
                />
                <input
                  type="number"
                  name="price_max"
                  placeholder="до 22 000 000 ₽"
                  className="search__form-input"
                />
              </div>

              <button className="search__form-btn">
                Показать 346 предложений
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
