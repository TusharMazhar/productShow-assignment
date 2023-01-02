
import {BrowserRouter ,Routes, Route } from "react-router-dom";
import ProductDetails from '../components/ProductDetails'
import Products from '../components/Products'

export default function routes() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/product/:productId' element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}
