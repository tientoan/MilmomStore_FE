
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import MainLayout from './layouts/mainLayout'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Home from './pages/Home'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        
        element={<MainLayout />}
      >
        <Route path="/">
          <Route index element={<Home />}/>
          <Route
            path="productDetail"
            element={<ProductDetail />}
          />
          <Route
            path="cart"
            element={<Cart />}
          />
        </Route>
      </Route>
    )
  )
  
  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
