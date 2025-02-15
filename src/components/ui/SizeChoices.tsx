'use client'
import React, { useState } from 'react'

type SizeProps = {
  sizes: string[]
  isVisible?: boolean
}

const SizeChoices = ({sizes, isVisible}:SizeProps) => {
  const [chosenSize, setChosenSize] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChosenSize(e.target.value)
    
  }

  return (
    <div className={`${isVisible || ' hidden'} flex flex-wrap gap-2 mt-4 w-full`}>
      {
        sizes.map( (size, index) => (
          <div key={index} >
            <label htmlFor={size} className='w-full'>
              <div className={`${chosenSize == size ? 'bg-black text-white' : 'bg-[#F0F0F0] text-black/60'} py-[10px] px-[20px] w-full rounded-full grid place-items-center capitalize cursor-pointer text-sm`}>
                {size}
              </div>
            </label>
            <input type="radio" name="sizes" id={size} value={size} onChange={handleChange} hidden/>
          </div>
        ))
      }
    </div>
  )
}

export default SizeChoices