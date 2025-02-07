'use client'
import { ratingsFormat } from '@/utils/ratingsFormatter';
import React, { useEffect, useState } from 'react'
import { TiStar, TiStarHalf  } from "react-icons/ti";

type RatingType = {
  rating: number
  styles: string
  showNumbers?: boolean
}

const StarRating = ({rating, styles, showNumbers}: RatingType) => {
    const [iswholeNumber, setIsWholeNumber] = useState(true)
    const [firstDigit, setFirstDigit] = useState(0)
    const [arrayPlaceholder, setArrayPlaceholder] = useState<number[]>([])

  const checkWholeNumber = (number:number) => {
    return Number.isInteger(number);
  }
  const getFirstDigit = (number:number) => {
    /* Convert the number to a string */
    let numberStr = number.toString();
    
    /* Get the first character and convert it back to a number */
    let firstDigit = parseInt(numberStr.charAt(0));

    return firstDigit;
  }

  const createIncrementingArray = (number:number) => {
    // Create an empty array
    let array = [];

    // Use a for loop to populate the array
    for (let i = 1; i <= number; i++) {
        array.push(i);
    }

    return array;
}

useEffect(() => {
  if (rating) {
    setIsWholeNumber(checkWholeNumber(rating))
    setFirstDigit(getFirstDigit(rating))
  }
}, [rating]);


useEffect(() => {
  if (firstDigit) {
    const array = createIncrementingArray(firstDigit);
    setArrayPlaceholder(array);
  }
}, [firstDigit]);
  
  return (
    <div className={`${styles} inline-flex items-center`}>
      <ul className='flex items-center gap-[5px]'>
        {
          arrayPlaceholder.map(item => (
            <li key={item}><TiStar color='#FFC633' className='text-[18.67px] lg:text-[24.71px]'/></li>
          ))
        }
        {
          iswholeNumber == false && 
          <li><TiStarHalf color='#FFC633' className='text-[18.67px] lg:text-[24.71px]'/></li>
        }
      </ul>
      {
        showNumbers &&
      <p className='ml-4'>{ratingsFormat(rating)}/<span className='text-black/60'>5</span></p>
      }
    </div>
  )
}

export default StarRating