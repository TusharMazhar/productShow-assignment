
import {BrowserRouter ,Routes, Route } from "react-router-dom";
import ProductList from '../components/ProductList'
import ProductDetails from '../components/ProductDetails'

export default function routes() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/product/:productId' element={<ProductDetails />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}
