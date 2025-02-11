import React from 'react'
import { YouMayAlsoLikeProducts } from '@/constant'
import ProductsViewer from './ProductsViewer'

const YouMayAlsoLike = () => {
  return (
    <section className='mt-[62px] mb-[185px] lg:mb-[142px]'>
      <div className='wrapper px-4'>
        <h2 className='text-center font-bold text-[2.01rem] lg:text-5xl'>YOU MAY ALSO LIKE</h2>
        <ProductsViewer products={YouMayAlsoLikeProducts}/>
      </div>
    </section>
  )
}

export default YouMayAlsoLike