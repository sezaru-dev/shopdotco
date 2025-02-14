import React from 'react'
import HoriontalLine from '../HoriontalLine'
import { HiOutlineX, HiOutlineChevronRight } from "react-icons/hi";
import RangeFilter from './RangeFilter';
import { FilterConstants } from '@/constant';
import ColorFilter from './ColorFilter';
import SizesFilter from './SizesFilter';
import DressStyle from './DressStyle';
import Button from '../Button';

type FilterModalProps = {
  show:boolean
}

const FilterModal = ({show}:FilterModalProps) => {
  return (
    <>
      <div className={`${show === true ? 'left-0' : '-left-[120%]'} transition-all duration-500 ease-in-out absolute h-auto w-full top-0 left-0 bg-black/20`}/>
      <div className={`${show === true ? 'left-0' : '-left-[120%]'} transition-all duration-500 ease-in-out w-full h-auto p-5 absolute top-[93px] z-50 bg-white rounded-2xl`}>
        <div className='flex items-center justify-between mb-4'>
          <h4 className='font-satoshi font-bold text-xl'>Filters</h4>
          <button><HiOutlineX/></button>
        </div>
        <HoriontalLine/>

        <div>
          <ul className='flex flex-col gap-5 py-5'>
            {
              FilterConstants.category.map((shirtCategory, index) => (
                <li key={index} className='flex items-center justify-between cursor-pointer'>{shirtCategory} <HiOutlineChevronRight/></li>
              ))
            }
          </ul>
        </div>

        <HoriontalLine/>
        <RangeFilter title="Price" style='mt-5'/>
        <HoriontalLine styles='mt-10 mb-5'/>
        <ColorFilter/>
        <HoriontalLine styles='my-5'/>
        <SizesFilter/>
        <HoriontalLine styles='my-5'/>
        <DressStyle/>
        <Button text='Apply Filter' style='w-full py-4 mt-1' primary/>
      </div>
    </>
  )
}

export default FilterModal