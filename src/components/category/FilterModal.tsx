import React from 'react'
import HoriontalLine from '../HoriontalLine'
import { HiOutlineX, HiOutlineChevronRight } from "react-icons/hi";
import RangeSlider from './RangeSlider';

type FilterModalProps = {
  show:boolean
}

const FilterModal = ({show}:FilterModalProps) => {
  return (
    <>
      <div className={`${show === true ? 'left-0' : '-left-[120%]'} transition-all duration-500 ease-in-out absolute h-[1066px] w-full top-0 left-0 bg-black/20`}/>
      <div className={`${show === true ? 'left-0' : '-left-[120%]'} transition-all duration-500 ease-in-out w-full h-[1066px] p-5 absolute top-[93px] z-50 bg-white rounded-2xl`}>
        <div className='flex items-center justify-between mb-4'>
          <h4 className='font-satoshi font-bold text-xl'>Filters</h4>
          <button><HiOutlineX/></button>
        </div>
        <HoriontalLine/>

        <div>
          <ul className='flex flex-col gap-5 py-5'>
            <li className='flex items-center justify-between cursor-pointer'>T-shirts <HiOutlineChevronRight/></li>
            <li className='flex items-center justify-between cursor-pointer'>Shorts <HiOutlineChevronRight/></li>
            <li className='flex items-center justify-between cursor-pointer'>Shirts <HiOutlineChevronRight/></li>
            <li className='flex items-center justify-between cursor-pointer'>Hoodie <HiOutlineChevronRight/></li>
            <li className='flex items-center justify-between cursor-pointer'>Jeans <HiOutlineChevronRight/></li>
          </ul>
        </div>

        <HoriontalLine/>
        <RangeSlider title="Price"/>
      </div>
    </>
  )
}

export default FilterModal