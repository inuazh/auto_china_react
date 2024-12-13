import React from 'react';

const RangeSlider = () => {
  return (
<div className="filter-range-slider">
  <div className="volume-range-control" data-min="0.2" data-max="4.5">
    <h4 className="filter__title">Объем, л</h4>
    <div className="range-slider">
      <input
        type="range"
        className="min-volume"
        step="0.1"
        Value="0.2"
      />
      <input
        type="range"
        className="max-volume"
        step="0.1"
        Value="4.5"
      />
      <div className="slider-track" />
    </div>
    <div className="range-values">
      <input
        type="number"
        id="range-value"
        className="min-value"
        Value="0.2"
        step="0.1"
      />
      <input
        type="number"
        id="range-value"
        className="max-value"
        Value="4.5"
        step="0.1"
      />
    </div>
  </div>
  <div className="volume-range-control" data-min={100} data-max={700}>
    <h4 className="filter__title">Мощность, л.с.</h4>
    <div className="range-slider">
      <input type="range" className="min-volume" step={10} Value={100} /> 
      <input type="range" className="max-volume" step={10} Value={700} />
      <div className="slider-track" />
    </div>
    <div className="range-values">
      <input
        type="number"
        id="range-value"
        className="min-value"
        Value={100}
        step={10}
      />
      <input
        type="number"
        id="range-value"
        className="max-value"
        Value={700}
        step={10}
      />
    </div>
  </div>
  <div className="volume-range-control" data-min={2} data-max={15}>
    <h4 className="filter__title">Разгон, с</h4>
    <div className="range-slider">
      <input type="range" className="min-volume" step={1} Value={2} />
      <input type="range" className="max-volume" step={1} Value={15} />
      <div className="slider-track" />
    </div>
    <div className="range-values">
      <input
        type="number"
        id="range-value"
        className="min-value"
        Value={2}
        step={1}
      />
      <input
        type="number"
        id="range-value"
        className="max-value"
        Value={15}
        step={1}
      />
    </div>
  </div>
  <div className="volume-range-control" data-min={2016} data-max={2024}>
    <h4 className="filter__title">Год</h4>
    <div className="range-slider">
      <input type="range" className="min-volume" step={1} Value={2016} />
      <input type="range" className="max-volume" step={1} Value={2024} />
      <div className="slider-track" />
    </div>
    <div className="range-values">
      <input
        type="number"
        id="range-value"
        className="min-value"
        Value={2016}
        step={1}
      />
      <input
        type="number"
        id="range-value"
        className="max-value"
        Value={2024}
        step={1}
      />
    </div>
  </div>
  <div
    className="volume-range-control new-slider"
    data-min={100000}
    data-max={1000000}
  >
    <h4 className="filter__title">Цена, ₽</h4>
    <div className="range-slider">
      <input type="range" className="min-volume new-min-volume" step={50000} />
      <input type="range" className="max-volume new-max-volume" step={50000} />
      <div className="slider-track new-slider-track" />
    </div>
    <div className="range-values">
      <input
        type="text"
        id="range-value"
        className="min-value new-min-value"
        Value={100000}
        step={50000}
        data-raw-value={100000}
      />
      <input
        type="text"
        id="range-value"
        className="max-value new-max-value"
        Value={1000000}
        step={50000}
        data-raw-value={1000000}
      />
    </div>
  </div>
</div>

  );
};

export default RangeSlider;
