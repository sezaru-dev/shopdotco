'use client'
import React, { useState } from 'react'
import HoriontalLine from '../HoriontalLine'

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState<number>(2)

  const handleTabClick = (index:number) => {
    setCurrentTab(index)
  }

  return (
    <div className='relative h-max mt-[30px] lg:mt-14'>
      <HoriontalLine styles='absolute bottom-0'/>
      <ul className='flex items-center justify-between lg:grid grid-cols-3 font-satoshi'>
        <li><button className={`${currentTab == 1 && 'active-tab'} w-full text-center py-[20.5px] lg:py-6`} onClick={() => handleTabClick(1)}>Product Details</button></li>
        <li><button className={`${currentTab == 2 && 'active-tab'} w-full text-center py-[20.5px] lg:py-6`} onClick={() => handleTabClick(2)}>Ratings & Reviews</button></li>
        <li><button className={`${currentTab == 3 && 'active-tab'} w-full text-center py-[20.5px] lg:py-6`} onClick={() => handleTabClick(3)}>FAQs</button></li>
      </ul>
    </div>
  )
}

export default Tabs