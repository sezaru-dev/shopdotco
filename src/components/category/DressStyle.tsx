'use client'
import { FilterConstants } from '@/constant'
import React, { useState } from 'react'
import { HiOutlineChevronDown, HiOutlineChevronRight, HiOutlineChevronUp } from 'react-icons/hi'
import SizeChoices from '../ui/SizeChoices'

const DressStyle = () => {
    const [open, setOpen] = useState(true)
  
    const handleClick = () => {
      setOpen(!open)
    }
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h4 className='font-satoshi font-bold text-xl capitalize'>Dress Style</h4>
        <button onClick={handleClick}>
          {
            open ? 
            <HiOutlineChevronUp />
            :
            <HiOutlineChevronDown/>
          }
        </button>
      </div>
      <ul className={`${open || 'hidden'} flex flex-col gap-5 py-5`}>
        {
          FilterConstants.dressStyle.map((shirtCategory, index) => (
            <li key={index} className='flex items-center justify-between cursor-pointer'>{shirtCategory} <HiOutlineChevronRight/></li>
          ))
        }
      </ul>
    </div>
  )
}

export default DressStyle