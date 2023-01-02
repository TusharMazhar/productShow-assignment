import '../style/ProductCard.css'
import { Link } from "react-router-dom";
import Star from './Star'


function ProductList({products}) {
  const {id,title,price,description,category,image,rating} = products
  return (
    <div className="product">
      <div className="image">
        <img src={image} alt={image} />
      </div>
      <div className='card-details'>
        <h4>{title.slice(0,40)}</h4>
        <p>{description.slice(0,60)}...</p>
        <p className='price'>${price}</p>
      </div>
      <div className='rating'>
         <Star star={rating} />
      </div>
      <div className="btn">
          <Link to={`product/${id}`}>
            <button>Details</button>
          </Link>
          <button>Buy Now</button>
      </div>
    </div>
  )
}

export default ProductList
