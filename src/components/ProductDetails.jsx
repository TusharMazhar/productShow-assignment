import React from 'react'
import {  useParams } from 'react-router-dom';
import {useFetch} from '../hooks/useFetch'
import '../style/ProductDetails.css'

function ProductDetails() {
  const {productId} = useParams()
  const fectchData = useFetch(`products/${productId}`)

  console.log('details',fectchData)
  return (
    <div>
       {
         fectchData.length===0?<h3 className='msg'>Loading Data....</h3>:<div className='root-wrapper'>
            <div className='img-section'>
                <img src={fectchData.image} alt={fectchData.image} />
            </div>
              <div className='content-section'>
                  <h4>{fectchData.title}</h4>
                  <p>{fectchData.description}</p>
                  <p className='price'>${fectchData.price}</p>
                  <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="btn">
                      <button>Add to Cart</button>
                  </div>
              </div>
            </div>
       }
    </div>
  )
}

export default ProductDetails