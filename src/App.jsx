import Home from "./pages/Home";
import {  Route, Routes } from 'react-router-dom'
import ProductList from "./pages/ProductList";

import Cart from "./pages/Cart";

import Login from "./pages/Login";

import Register from "./pages/Register";

import EachProduct from "./pages/EachProduct";

const App = ()=>{
  return <div>
     <Routes>
           <Route exact path='/Home' element={<Home/>}/>
           <Route path='/Cart' element={<Cart/>}/>
           <Route path='/EachProduct' element={<EachProduct/>}/>
           <Route path='/' element={<Login/>}/>
           <Route path='/Register' element={<Register/>}/>
           <Route path='/ProductList' element={<ProductList/>}/>
      </Routes>
  </div>
}
 

export default App;
