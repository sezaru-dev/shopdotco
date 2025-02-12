'use client'
import React, { useState } from 'react'
import { HiOutlineChevronUp } from 'react-icons/hi'

type RangeSliderProps = {
  title: string
}

const RangeSlider = ({title}:RangeSliderProps) => {
  const [minPrice, setMinPrice] = useState(50)
  const [maxPrice, setMaxPrice] = useState(200)

  const handleMinPriceInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10)
    setMinPrice(newValue)
  }
  const handleMaxPriceInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10)
    setMaxPrice(newValue)
  }
  return (
    <div>
      <div className='flex i-c justify-between'>
        <h4 className='font-satoshi font-bold text-xl capitalize'>{title}</h4>
        <button>
          <HiOutlineChevronUp />
        </button>
      </div>

      <div className='relative grid grid-cols-2'>
        <div className='w-full relative border border-red-500'>
          <input
            id='minPriceSlider'
            type="range"
            min={1}
            max={125}
            step={1}
            value={minPrice}
            onChange={handleMinPriceInputChange}
            className='price-slider w-full h-2  flex-none bg-gray-200 rounded-l-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <p className='absolute left-1/3'>${minPrice}</p>
        </div>
        <div className='w-full relative border border-red-500'>
          <input
            type="range"
            min={126}
            max={250}
            step={1}
            value={maxPrice}
            onChange={handleMaxPriceInputChange}
            className='price-slider w-full h-2 flex-none  bg-gray-200 rounded-r-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <p className='absolute right-1/3'>${maxPrice}</p>
        </div>
      </div>

      
    </div>
  )
}

export default RangeSlider