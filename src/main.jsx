import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Singleproduct from './Pages/SingleProduct/Singleproduct.jsx';
import Products from './Pages/Products/Products.jsx';
import Cart from './Pages/Cart/Cart.jsx';
import Error from './Pages/Error/Error.jsx';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<Products />} />
      <Route path="singleproduct/:id" element={<Singleproduct/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path='*' element={<Error/>}/>

      

      
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
