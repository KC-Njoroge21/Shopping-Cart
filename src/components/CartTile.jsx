import React from 'react'
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../store/slices/cart-slice';


const CartTile = (props) => {

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(props.product.id));
  };

  return (
    <div className='w-full h-full flex border border-gray-300 justify-between items-center gap-6 p-4 rounded-md shadow-md '>
      <div className='w-[15%] h-full flex overflow-hidden p-2 '>
        <img className='w-[70%] h-full  ' src={props.product.image} alt={props.product.title} />
      </div>
      <div className='flex flex-col gap-6'>
        <div>
         <h2 className='font-semibold truncate'>{props.product.title}</h2>
        <p className='text-[20px]'>Price: ${props.product.price}</p>
      </div>
      <div className='flex justify-end'>
        <button onClick={handleRemoveFromCart} className='p-2 bg-red-900 text-white rounded-md text-[14px] uppercase  font-semibold cursor-pointer '>
          Remove from Cart
        </button>
      </div>
      </div>
    </div>
  )
}

export default CartTile