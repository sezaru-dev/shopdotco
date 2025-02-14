'use client'
import React, { useState } from 'react'
import { HiCheck } from 'react-icons/hi'

type ColorType = {
  name: string,
  code: string
}

type ColorChoicesProps = {
  colors: ColorType[]
  gap?: string
  isVisible?: boolean
}

const ColorChoices = ({colors, gap, isVisible}:ColorChoicesProps) => {
  const [chosenColor, setChosenColor] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChosenColor(e.target.value)
  }

  return (
    <div className={`${gap ? gap : 'gap-3'} ${isVisible && 'hidden'} flex flex-wrap gap-3 mt-4`}>
      {/* gap-3 */}
      {
        colors.map( color => (
          <div key={color.name}>
            <label htmlFor={color.name}>
              <div style={{backgroundColor: `${color.code}`}} className={`border-2 border-black/20 w-[39.14px] h-[39.14px] rounded-full grid place-items-center cursor-pointer`}>
                {
                  chosenColor == color.name &&
                <HiCheck color={`${chosenColor == 'white' ? '#000': '#fff'}`}/>
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