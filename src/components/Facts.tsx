import React from 'react'
type FactsProps = {
  stats: string
  description: string
  styles?: string
}

const Facts = ({stats, description, styles}: FactsProps) => {
  return (
    <div className={`p-2 ${styles}`}>
      <p className='text-2xl lg:text-[2.5rem] font-bold'>{stats}+</p>
      <p className='text-xs text-black/60'>{description}</p>
    </div>
  )
}

export default Facts