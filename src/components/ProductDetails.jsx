import React from 'react'
import {  useParams } from 'react-router-dom';
import {useFetch} from '../hooks/useFetch'
import '../style/ProductDetails.css'
import Star from './Star'
import { Link } from "react-router-dom";

function ProductDetails() {
  const {productId} = useParams()
  const fectchData = useFetch(`products/${productId}`)
  
  return (
    <div>
       {
         fectchData.length===0?<h3 className='msg'>Loading Data....</h3>:<div className='root-wrapper'>
            <Link to={`/`}>
                 <button className='back-btn'>Back</button>
            </Link>
            <div className='img-section'>
                <img src={fectchData.image} alt={fectchData.image} />
            </div>
              <div className='content-section'>
                  <h4>{fectchData.title}</h4>
                  <p>{fectchData.description}</p>
                  <p className='price'>${fectchData.price}</p>
                  <div className='rating'>
                     <Star star={fectchData.rating} />
                  </div>
                  <div className="btn">
                    <Link to={`/`}>
                      <button>Add to Cart</button>
                    </Link>
                  </div>
              </div>
            </div>
       }
    </div>
  )
}

export default ProductDetails