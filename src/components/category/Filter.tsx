'use client'
import React from 'react'

import { HiOutlineX, HiOutlineChevronRight } from "react-icons/hi";
import RangeFilter from './RangeFilter';
import { FilterConstants } from '@/constant';
import ColorFilter from './ColorFilter';
import SizesFilter from './SizesFilter';
import DressStyle from './DressStyle';
import Button from '../Button';
import SliderIcon from '@/public/slider-icon.svg'
import Image from 'next/image';
import { useModal } from '@/context/ModalContext';
import HorizontalLine from '../HorizontalLine';


const Filter = () => {
  const { isOpen, closeModal } = useModal();
  
  return (
    <aside className={`${isOpen || 'hidden'}  absolute lg:relative top-0 left-0 z-30 lg:block w-full col-span-3 px-6 py-5 border border-black/10 rounded-xl h-max bg-white`}>
      <div className='flex items-center justify-between'>
        <h4 className='font-satoshi font-bold text-xl'>Filters</h4>
        <button className='w-8 h-8 hidden lg:flex items-center justify-center flex-none rounded-full'>
          <Image src={SliderIcon} alt='' className='w-4 h-4'/>
        </button>
        <button className='lg:hidden' onClick={closeModal}><HiOutlineX/></button>
      </div>
      <HorizontalLine styles='py-6'/>
      <ul className='flex flex-col gap-5 text-secondary'>
        {
          FilterConstants.category.map((shirtCategory, index) => (
            <li key={index} className='flex items-center justify-between cursor-pointer'>{shirtCategory} <HiOutlineChevronRight/></li>
          ))
        }
      </ul>
      <HorizontalLine styles='py-6'/>
      <RangeFilter title="Price" style=''/>
      <HorizontalLine styles='py-6'/>
      <ColorFilter/>
      <HorizontalLine styles='py-6'/>
      <SizesFilter/>
      <HorizontalLine styles='py-6'/>
      <DressStyle/>
      <Button text='Apply Filter' style='w-full py-4 mt-1' primary onClick={closeModal}/>
    </aside>
  )
}

export default Filter