import React from 'react'
import ProductCard from './cards/ProductCard'
import { StaticImageData } from 'next/image';

type ProductProps = {
    id: number;
    productName: string;
    image: StaticImageData;
    rating: number;
    currentPrice: number;
    isOnPromo: boolean;
    previousPrice: number;
    discount: number;
}

type ProductsOwnProps = {
  products: ProductProps[]
}



const ProductsViewer = ({products}:ProductsOwnProps) => {
  return (
    <div className='lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[55px] overflow-x-scroll scroll-smooth scrollbar-hide relative space-x-5 snap-x snap-mandatory flex'>
    {products.map(product => (
    <ProductCard key={product.id} {...product}/>
    ))}

  </div>
  )
}

export default ProductsViewer