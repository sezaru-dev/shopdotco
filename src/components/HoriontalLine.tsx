import React from 'react'
type HrProps ={
  styles?: string
}

const HoriontalLine = ({styles}:HrProps) => {
  return (
    <div className={`${styles} wrapper`}>
      <div className="w-full h-[1px] bg-black/10"/>
    </div>
  )
}

export default HoriontalLine