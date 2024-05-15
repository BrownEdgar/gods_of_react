import { selectProducts } from '@f/products/productsSlice'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Products() {
  const products = useSelector(selectProducts);
  console.log(products)
  return (
    <div className='Products'>

    </div>
  )
}
