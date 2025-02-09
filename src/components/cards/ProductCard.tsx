import { ratingsFormat } from '@/utils/ratingsFormatter'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import StarRating from '../ui/StarRating'
import Link from 'next/link'

type ProductProps ={
  id:number
  productName: string
  image: StaticImageData
  rating: number
  currentPrice: number
  isOnPromo: boolean
  previousPrice?:number
  discount?: number 
}

const ProductCard = ({productName,image, rating, currentPrice, isOnPromo, previousPrice, discount}:ProductProps) => {
  return (
    <Link href='/' className='pb-2 max-w-min lg:max-w-full snap-start'>
      <div className='relative w-[198px] h-[200px] lg:w-auto lg:h-[298px] lg:bg-[#F0EEED] flex items-center justify-center rounded-lg overflow-hidden'>
        <Image src={image} alt={productName} layout='fill' className='lg:hidden'/>
        <Image src={image} alt={productName} className='hidden lg:block'/>
      </div>
      <div className='mt-[10px ]lg:mt-4'>
        <h4 className='font-satoshi font-bold lg:text-xl truncate'>{productName}</h4>
      </div>

      {/* ratings */}
      <div className='flex gap-2 items-center mt-1 lg:mt-2'>
        <div>
        <StarRating rating={rating} showNumbers={false} gapStyle='gap-1 lg:gap-[5px]'/> 
        </div>
        <p>{ratingsFormat(rating)}/<span className='text-black/60'>5</span></p>
      </div>

      <div className='flex gap-[10px] items-center mt-1 lg:mt-2'>
        <h5 className='font-satoshi font-bold text-[20px] lg:text-2xl'>${currentPrice}</h5>
        {
          isOnPromo &&
          <>          
            <h5 className='font-satoshi font-bold text-[20px] lg:text-2xl text-black/40 line-through'>${previousPrice}</h5>
            <div className='bg-[#FF3333]/10 h-6 w-12 flex items-center justify-center rounded-full'>
              <p className='text-[#FF3333] text-center text-[10px] lg:text-xs font-medium'>-{discount}%</p>
            </div>
          </>
        }
      </div>
    </Link>
  )
}

export default ProductCard