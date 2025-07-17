import React from 'react'
import { MdDelete } from "react-icons/md";

const Cart = ({cartAllProduct,setCartAllProduct}) => {

  function handleIncrement(id){
    setCartAllProduct(prevCart=>(
      prevCart.map((itm)=>(
        itm.id===id? {...itm,count:itm.count+1}:itm
      ))
    ))
  }
  function handleDecrement(id){
    setCartAllProduct(prevCart=>(
      prevCart.map((itm)=>(
        itm.id===id && itm.count>1 ? 
        {...itm,count:itm.count-1}:itm
      ))
    ))
  }

  function handleDeleteItm(id){
    const filterDelete=cartAllProduct.filter((itm)=>(
      itm.id!==id
    ))
    setCartAllProduct(filterDelete)
  }

  return (
    <>
    {
      cartAllProduct.map((data)=>(
        <div key={data.id} className='flex justify-between m-5 w-[500px] h-[150px] border-[1px] rounded-lg  border-black relative'>
           <div className='w-[100px] h-[100px] object-cover m-2'>
            <img src={data.img} alt="" />
           </div>

         <div className='flex flex-col w-[200px] mr-10 mt-2'>
            <h2>{data.brand}</h2>
            <h2>{data.model}</h2>
            <h2>{data.price}</h2>
            <h2>{data.space}</h2>

            <div className='flex items-center gap-2'>
                <button className='w-[30px] h-[30px] text-2xl text-white font-bold bg-black rounded-lg'
                onClick={()=>handleDecrement(data.id)}>-</button>
                <h4 className='font-bold text-green-600'>{data.count}</h4>
                <button className='w-[30px] h-[30px] text-2xl text-white font-bold bg-black rounded-lg'
                onClick={()=>handleIncrement(data.id)}>+</button>
            </div>
         </div>

         <div className='absolute right-5 top-4 text-2xl text-red-600 cursor-pointer'>
            <MdDelete onClick={()=>handleDeleteItm(data.id)} />
         </div>
      </div>
        ))
      }

      {cartAllProduct.length==0 &&
      <div className=' text-center text-xl font-bold mt-20'>
        <h2>No Products Available in Cart.</h2>
      </div> }
      
    </>
  )
}

export default Cart