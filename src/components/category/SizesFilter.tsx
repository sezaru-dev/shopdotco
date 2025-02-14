'use client'
import { FilterConstants } from '@/constant'
import React, { useState } from 'react'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi'
import SizeChoices from '../ui/SizeChoices'

const SizesFilter = () => {
    const [open, setOpen] = useState(true)
  
    const handleClick = () => {
      setOpen(!open)
    }
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h4 className='font-satoshi font-bold text-xl capitalize'>Sizes</h4>
        <button onClick={handleClick}>
          {
            open ? 
            <HiOutlineChevronDown/>
            :
            <HiOutlineChevronUp />
          }
        </button>
      </div>
      <SizeChoices sizes={FilterConstants.sizes} isVisible={open}/>
    </div>
  )
}

export default SizesFilter