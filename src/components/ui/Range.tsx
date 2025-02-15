'use client'
import React, { useEffect, useRef, useState } from 'react';

type RangeSliderProps = {
  min: number;
  max: number;
  step: number;
  defaultValue: number;
  minSlider?: boolean;
  maxSlider?: boolean;
};

const Range = ({ min, max, step, defaultValue, minSlider, maxSlider }: RangeSliderProps) => {
  const [rangeValue, setRangeValue] = useState<number>(defaultValue);
  const [remainingWidth, setRemainingWidth] = useState<number>(0);
  const [filledWidth, setFilledWidth] = useState<number>(0);
  const rangeRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setRangeValue(value);

    if (rangeRef.current && labelRef.current) {
      const rangeWidth = rangeRef.current.offsetWidth;
      const maxRangeValue = Number(rangeRef.current.max);
      const minRangeValue = Number(rangeRef.current.min);
      const handleXPosition =
        ((value - minRangeValue) / (maxRangeValue - minRangeValue)) * rangeWidth;

      // Calculate the remaining width as a percentage
      const remainingWidthPercentage = ((rangeWidth - handleXPosition) / rangeWidth) * 100;
      setRemainingWidth(Number(remainingWidthPercentage.toFixed(2)));
      setFilledWidth(100 - Number(remainingWidthPercentage.toFixed(2)));
    }
  };

  useEffect(() => {
    // Initial calculation on component mount
    handleRangeChange({ target: { value: defaultValue.toString() } } as React.ChangeEvent<HTMLInputElement>);
  }, []);

  return (
    <div className='w-full h-[43px] relative '>
      <div className='relative top-[20px]'>
        {minSlider && (
          <div
            style={{ width: `${remainingWidth}%` }}
            className='absolute -right-1 h-[6px] bg-black rounded-l-full z-20'
          />
        )}
        {maxSlider && (
          <div
            style={{ width: `${filledWidth}%` }}
            className='absolute -left-1 h-[6px] bg-black rounded-r-full z-20'
          />
        )}
        <input
          ref={rangeRef}
          id='minPriceSlider'
          type='range'
          min={min}
          max={max}
          step={step}
          value={rangeValue}
          onChange={handleRangeChange}
          className={`price-slider absolute w-full h-[6px] flex-none  bg-gray-200 rounded-l-lg appearance-none cursor-pointer`}
        />
      </div>
      <p
        ref={labelRef}
        className='absolute top-10 translate-x-1/2 font-satoshi font-medium text-sm'
        style={{ right: `${remainingWidth}%` }}
      >
        ${rangeValue}
      </p>
    </div>
  );
};

export default Range;
