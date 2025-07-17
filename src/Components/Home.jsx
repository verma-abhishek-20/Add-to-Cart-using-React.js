import React from 'react'
import data from './data';
import toast, { Toaster } from 'react-hot-toast';

const Home = ({setProduectid}) => {
  
  function handleBtn(id){
    setProduectid(id);
    toast.success('Added itm successfully!!')
  }
  return (
    <div className='flex flex-wrap items-center justify-center mt-5'>

        <Toaster />

       {data.map((itm)=>(
          <div key={itm.id} className='card w-[250px] h-[300px] flex flex-col items-center p-2 border border-1 border-black m-2 font-semibold
            rounded-lg'>
             <div className='w-[170px] relative '>
                <div className='group h-[180px]'>
                    <img src={itm.img} alt="" 
                    className='w-full h-full group-hover:scale-110 rounded-2xl overflow-hidden'/>
                </div>
           </div>

           <div className="box2 flex items-center justify-around">
            <h3>{itm.brand}</h3>
            <h4>{itm.model}</h4>
           </div>
           <h4>{itm.price}</h4>

           <h4>{itm.space}</h4>
           <button className='px-10 py-1.5 bg-blue-800 text-white rounded-lg text-[15px] font-semibold'
           onClick={()=>handleBtn(itm.id)}>
            Add to Cart
            </button>


 

          </div>
        ))}
    
    </div>
  )
}

export default Home