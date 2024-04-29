import React from 'react'
import { useSelector } from 'react-redux'
import { selectProducts } from '../../features/products/productsSlice'

export default function Products() {
    const products = useSelector(selectProducts)
    console.log(products)
  return (
    <div>Products</div>
  )
}
