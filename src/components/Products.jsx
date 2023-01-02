import React from 'react'
import { Link } from "react-router-dom";
import {useFetch} from '../hooks/useFetch'
import { Spin } from 'antd';
import ProductList from './ProductList'

export default function Products() {
  const fectchData = useFetch('products')
  return (
    <div>
        <h1>Product List</h1>  
        {
            fectchData.length===0?<Spin size='large' />: <ul>

              {
                  fectchData.map(product=> <ProductList products={product} key={product.id} />)
              }
            </ul>
        }     
    </div>
  )
}
