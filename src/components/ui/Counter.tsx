'use client'
import React, { useState } from 'react'
import { HiOutlineMinusSm, HiOutlinePlusSm } from 'react-icons/hi'

type CounterType = {
  width?: string
  style?: string
  quantity?: number
}

const Counter = ({width, style, quantity}:CounterType) => {
  const [count, setCount] = useState<number>(quantity ?? 1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(count) === 0) {
      setCount(1)
    }else{
      setCount(Number(e.target.value))
    }
    }

  const handleUnFocused = () => {
    if (Number(count) === 0) {
      setCount(1)
    }
  }

  const incrementCount = () => {
      setCount( prevCount => prevCount + 1)
  }
  const decrementCount = () => {
    if (count > 1) {
      setCount( prevCount => prevCount - 1)
    }
  }
  return (
    <div style={{width: `${width}`}} className={`${style} relative inline-flex items-center gap-4 bg-[#F0F0F0] rounded-full font-satoshi text-sm font-medium overflow-hidden`}>
      <button type='button' onClick={decrementCount} className='absolute top-1/2 left-0 -translate-y-1/2 p-4 rounded-full'><HiOutlineMinusSm/></button>
      <input type="text" onChange={handleChange} onBlur={handleChange} min={1} id='quantity-setter' name='quantitySetter' value={count} className='text-center bg-transparent outline-none w-full'/>
      <button type='button' onClick={incrementCount} className='absolute top-1/2 right-0 -translate-y-1/2 p-4 rounded-full'><HiOutlinePlusSm/></button>  
    </div>
  )
}

export default Counter