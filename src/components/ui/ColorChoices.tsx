'use client'
import React, { useState } from 'react'
import { HiCheck } from 'react-icons/hi'

type ColorType = {
  name: string,
  code: string
}

type ColorChoicesProps = {
  colors: ColorType[]
}

const ColorChoices = ({colors}:ColorChoicesProps) => {
  const [chosenColor, setChosenColor] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChosenColor(e.target.value)
  }

  return (
    <div className='flex flex-wrap gap-3 mt-4'>
      {
        colors.map( color => (
          <div key={color.name}>
            <label htmlFor={color.name}>
              <div style={{backgroundColor: `${color.code}`}} className={`w-[39.14px] h-[39.14px] rounded-full grid place-items-center cursor-pointer`}>
                {
                  chosenColor == color.name &&
                <HiCheck color='#fff'/>
                }
              </div>
            </label>
            <input type="radio" name="colors" id={color.name} value={color.name} onChange={handleChange} hidden/>
          </div>

        ))
      }
      </div>
  )
}

export default ColorChoices