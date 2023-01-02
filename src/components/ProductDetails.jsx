import React from 'react'
import {  useParams } from 'react-router-dom';
import {useFetch} from '../hooks/useFetch'
function ProductDetails() {
  const {productId} = useParams()
  const fectchData = useFetch(`products/${productId}`)
  return (
    <div>
        <p>{fectchData.id}</p>
        <p>{fectchData.title}</p>
        <p>{fectchData.price}</p>
        <p>{fectchData.description}</p>
        <p>{fectchData.category}</p>
        <p>{fectchData.image}</p>
    </div>
  )
}

export default ProductDetails