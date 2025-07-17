import React from 'react'
import Cart from './Cart';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";

const Header = ({cartAllProduct}) => {

  const list=[
    {id:1,name:"Home"},
    {id:2,name:"About"},
    {id:3,name:"Contact"},
  ];

  return (
    <>
    <header>
        
    <div className='p-5 bg-blue-700 shadow-2xl 
    flex items-center justify-between'>
        <nav className='w-[1100px] text-white font-bold flex lg:gap-10 flex-wrap gap-5 '>
           {list.map((item)=>(
             <span key={item.id}>{item.name}</span>
           ))}
        </nav>
        
        <Link to={"/cart"}>
          <div>
              <h2 className='text-white absolute lg:top-5 lg:right-15 right-7 top-[20px]  text-3xl'><FaCartShopping /></h2>
              <span className='absolute top-1 right-2 text-[15px] w-[30px] h-[30px] rounded-full
               bg-yellow-400 font-semibold pl-2 pt-1'>{cartAllProduct.length}</span>
          </div>
        </Link>
    </div>
    </header>
    </>
  )
}

export default Header