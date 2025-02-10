'use client'
import React from 'react';
import { TiStar, TiStarHalf } from "react-icons/ti";

const Star = React.memo(({ isHalf }: { isHalf?: boolean }) => {
  return (
    <>
      {isHalf ? <TiStarHalf color='#FFC633' className='text-[18.67px] lg:text-[24.71px]' /> : <TiStar color='#FFC633' className='text-[18.67px] lg:text-[24.71px]' />}
    </>
  );
});

export default Star