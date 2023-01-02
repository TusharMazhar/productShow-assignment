import React,{useState , useEffect } from 'react'
import {useFetch} from '../hooks/useFetch'
import ProductList from './ProductList'
import '../style/ProductCard.css'
import '../style/SearchBar.css'

export default function Products() {

  const [query, setQuery] = useState('')
  const fectchData = useFetch('products')



  return (
    <div>
      <div className='search-bar'>
        <h1>Product List</h1>
        <div>
          <input placeholder="Product Search Here by Title..." type="text" onChange={(e)=> setQuery(e.target.value)} />
        </div> 
      </div>
      
          {
              fectchData.length===0?<h3 className='msg'>Products are Fetching....</h3>: <ul>
              <div className='container'> 
                  {
                      fectchData.filter(data => data.title.toLowerCase().includes(query.toLowerCase())).map(product=> <ProductList  products={product} key={product.id} />)
                  }
                </div>
              </ul>
          }     
      </div>
    
  )
}
