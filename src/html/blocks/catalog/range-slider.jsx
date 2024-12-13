import React, { useState, useMemo } from 'react';

function formatNumber(value) {
  return parseFloat(value).toLocaleString('ru-RU');
}

const RangeControl = ({
  title,
  minLimit,
  maxLimit,
  step = 0.1,
  initialMinValue,
  initialMaxValue,
  isPrice = false
}) => {
  const [minValue, setMinValue] = useState(initialMinValue);
  const [maxValue, setMaxValue] = useState(initialMaxValue);

  const handleMinSliderChange = (e) => {
    const val = parseFloat(e.target.value);
    setMinValue(val);
  };

  const handleMaxSliderChange = (e) => {
    const val = parseFloat(e.target.value);
    setMaxValue(val);
  };

  const handleMinInputChange = (e) => {
    const rawVal = e.target.value.replace(/\s/g, '').replace(',', '.');
    const numericVal = parseFloat(rawVal);
    if (!isNaN(numericVal)) {
      setMinValue(numericVal);
    } else {
      setMinValue(minLimit);
    }
  };

  const handleMaxInputChange = (e) => {
    const rawVal = e.target.value.replace(/\s/g, '').replace(',', '.');
    const numericVal = parseFloat(rawVal);
    if (!isNaN(numericVal)) {
      setMaxValue(numericVal);
    } else {
      setMaxValue(maxLimit);
    }
  };

  const displayMinValue = isPrice ? formatNumber(minValue) : minValue;
  const displayMaxValue = isPrice ? formatNumber(maxValue) : maxValue;

  // Рассчёт процентов для CSS переменных
  const minPercent = (minValue - minLimit) / (maxLimit - minLimit);
  const maxPercent = (maxValue - minLimit) / (maxLimit - minLimit);

  const trackStyle = {
    '--min-value': minPercent,
    '--max-value': maxPercent
  };

  // Добавляем класс active, когда значения установлены
  const trackClass = `slider-track${(minValue && maxValue) ? ' active' : ''}`;

  return (
    <div className="volume-range-control" data-min={minLimit} data-max={maxLimit}>
      <h4 className="filter__title">{title}</h4>
      <div className="range-slider">
        <input
          type="range"
          className="min-volume"
          step={step}
          min={minLimit}
          max={maxLimit}
          value={minValue}
          onChange={handleMinSliderChange}
        />
        <input
          type="range"
          className="max-volume"
          step={step}
          min={minLimit}
          max={maxLimit}
          value={maxValue}
          onChange={handleMaxSliderChange}
        />
        <div className={trackClass} style={trackStyle} />
      </div>
      <div className="range-values">
        <input
          type="text"
          className="min-value"
          value={displayMinValue}
          onChange={handleMinInputChange}
        />
        <input
          type="text"
          className="max-value"
          value={displayMaxValue}
          onChange={handleMaxInputChange}
        />
      </div>
    </div>
  );
};

const RangeSlider = () => {
  return (
    <div className="filter-range-slider">
      <RangeControl
        title="Объем, л"
        minLimit={0.2}
        maxLimit={4.5}
        step={0.1}
        initialMinValue={0.2}
        initialMaxValue={4.5}
      />
      <RangeControl
        title="Мощность, л.с."
        minLimit={100}
        maxLimit={700}
        step={10}
        initialMinValue={100}
        initialMaxValue={700}
      />
      <RangeControl
        title="Разгон, с"
        minLimit={2}
        maxLimit={15}
        step={1}
        initialMinValue={2}
        initialMaxValue={15}
      />
      <RangeControl
        title="Год"
        minLimit={2016}
        maxLimit={2024}
        step={1}
        initialMinValue={2016}
        initialMaxValue={2024}
      />
      <RangeControl
        title="Цена, ₽"
        minLimit={100000}
        maxLimit={1000000}
        step={50000}
        initialMinValue={100000}
        initialMaxValue={1000000}
        isPrice={true}
      />
    </div>
  );
};

export default RangeSlider;
