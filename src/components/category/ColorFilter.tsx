'use client'
import React, { useState } from 'react'
import ColorChoices from '../ui/ColorChoices'
import { FilterConstants } from '@/constant'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi'

const ColorFilter = () => {
    const [open, setOpen] = useState(true)
  
    const handleClick = () => {
      setOpen(!open)
    }
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h4 className='font-satoshi font-bold text-xl capitalize'>Colors</h4>
        <button onClick={handleClick}>
          {
            open ? 
            <HiOutlineChevronDown/>
            :
            <HiOutlineChevronUp />
          }
        </button>
      </div>
      
      <ColorChoices colors={FilterConstants.colors}  gap='gap-[15p.5x]' isVisible={open}/>
      
    </div>
  )
}

export default ColorFilter