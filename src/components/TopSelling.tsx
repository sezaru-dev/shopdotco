import Link from 'next/link'
import React from 'react'
import ProductCard from './cards/ProductCard'
import { TopSellingProducts } from '@/constant'

const TopSelling = () => {
  return (
    <section>
      <div className='wrapper px-4 pb-16'>
        <h2 className='text-center font-bold text-[2.01rem] lg:text-5xl'>TOP SELLING</h2>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[55px]'>
          {TopSellingProducts.map(product => (
            <ProductCard key={product.id} {...product}/>
            ))}
        </div>

        <div className='grid w-full place-items-center mt-7'>
          <Link href='/' className='py-4 px-16 border-2 border-black/10 rounded-full'>View All</Link>
        </div>
      </div>
    </section>
  )
}

export default TopSelling