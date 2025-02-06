import { ratingsFormat } from '@/utils/ratingsFormatter'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

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
    <article className='pb-2'>
      <div className='h-[298px] bg-[#F0EEED] flex items-center justify-center'>
        <Image src={image} alt={productName} className=''/>
      </div>
      <div className='mt-4'>
        <h4 className='font-satoshi font-bold text-xl'>{productName}</h4>
      </div>

      {/* ratings */}
      <div className='flex gap-2 items-center mt-2'>
        <div>
          * * * *
        </div>
        <p>{ratingsFormat(rating)}/<span className='text-black/60'>5</span></p>
      </div>

      <div className='flex gap-[10px] items-center mt-2'>
        <h5 className='font-satoshi font-bold text-2xl'>${currentPrice}</h5>
        {
          isOnPromo &&
          <>          
            <h5 className='font-satoshi font-bold text-2xl text-black/40 line-through'>${previousPrice}</h5>
            <div className='bg-[#FF3333]/10 h-6 w-12 flex items-center justify-center rounded-full'>
              <p className='text-[#FF3333] text-center text-xs font-medium'>-{discount}%</p>
            </div>
          </>
        }
      </div>
    </article>
  )
}

export default ProductCard