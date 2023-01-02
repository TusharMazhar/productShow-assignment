import React from 'react'
import { Link } from "react-router-dom";
import {useFetch} from '../hooks/useFetch'
import { Spin } from 'antd';

export default function ProductList() {
  const fectchData = useFetch('products')
  return (
    <div>
        <h1>Product List</h1>  
        {
            fectchData.length===0?<Spin size='large' />: <ul>

              {
                  fectchData.map(item=> 
                  <div key={item.id} style={{backgroundColor:'#A9A9A9',padding:'10px',margin:'10px'}}>
              
                        Id:
                        <Link to={`/product/${item.id}`} >
                            <span style={{fontWeight:'bold',fontSize:'18px'}}>  {item.id}</span> 
                        </Link>
                  </div>)
              }
            </ul>
        }     
    </div>
  )
}
