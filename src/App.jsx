import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Cart from './Components/Cart'
import {Routes,Route } from 'react-router-dom'
import productList from './Components/data';

const App = () => {
  const [productId,setProduectid]=useState('');
  const [cartAllProduct,setCartAllProduct]=useState([]);
  
  useEffect(()=>{
    const filteredList=productList.filter((data)=>
       data.id==productId
    )
    setCartAllProduct([...cartAllProduct,...filteredList])
  },[productId]);

  return (
    <div>

       <Header cartAllProduct={cartAllProduct}/>
       <Routes>
        <Route path='/' element={<Home setProduectid={setProduectid}/>}></Route>
        <Route path='/cart' element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct}/>} ></Route>
       </Routes>
    
    </div>
  )
}

export default App