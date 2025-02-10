'use client'
import { ratingsFormat } from '@/utils/ratingsFormatter';
import React, { useMemo } from 'react';
import Star from './Star';


type RatingType = {
  rating: number
  styles?: string
  showNumbers?: boolean
  gapStyle?: string
}

const StarRating = ({ rating, styles, showNumbers, gapStyle }: RatingType) => {
  const stars = useMemo(() => {
    const starsArray = [];
    const wholeStars = Math.floor(rating);
    const isWhole = Number.isInteger(rating);

    for (let i = 1; i <= wholeStars; i++) {
      starsArray.push(1);
    }

    if (!isWhole) {
      starsArray.push(0.5);
    }

    return starsArray;
  }, [rating]);



  return (
    <div className={`${styles} inline-flex items-center`}>
      <ul className={`${gapStyle ? gapStyle : 'gap-[5px]'} flex items-center`}>
        {
          stars.map((item, index) => (
            <li key={index}>
              <Star isHalf={item === 0.5} />
            </li>
          ))
        }
      </ul>
      {
        showNumbers &&
        <p className='ml-4'>{ratingsFormat(rating)}/<span className='text-black/60'>5</span></p>
      }
    </div>
  );
};

export default StarRating;
