'use client'
import React, { useState } from 'react'
import { HiOutlineChevronUp, HiOutlineChevronDown } from 'react-icons/hi'
import Range from '../ui/Range'

type RangeFilterProps = {
  title: string
  style: string
}

const RangeFilter = ({title, style}:RangeFilterProps) => {
  const [open, setOpen] = useState(true)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className={`${style}`}>
      <div className='flex items-center justify-between'>
        <h4 className='font-satoshi font-bold text-xl capitalize'>{title}</h4>
        <button onClick={handleClick}>
          {
            open ? 
            <HiOutlineChevronUp />
            :
            <HiOutlineChevronDown/>
          }
        </button>
      </div>

      <div className={`${open ? 'grid' : 'hidden'} grid-cols-2 transition-transform duration-300 ease-in-out`}>
        <Range min={1} max={150} step={1} defaultValue={50} minSlider/>
        <Range min={151} max={300} step={1} defaultValue={250} maxSlider/>
      </div>

      
    </div>
  )
}

export default RangeFilter