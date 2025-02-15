'use client'
import React from 'react'
import Image from 'next/image'
import SliderIcon from '@/public/slider-icon.svg'
import { useModal } from '@/context/ModalContext'



const FilterIconButton = () => {
  const { openModal } = useModal();
  return (
    <button className='w-8 h-8 flex lg:hidden items-center justify-center flex-none bg-[#F0F0F0] rounded-full' onClick={openModal}>
      <Image src={SliderIcon} alt='' className='w-4 h-4'/>
    </button>
  )
}

export default FilterIconButton