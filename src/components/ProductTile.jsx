import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../store/slices/cart-slice'

const ProductTile = (props) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state)

  function handleAddToCart() {
    // Dispatch action to add item to cart
    dispatch(addToCart(props.item))
    console.log("Item added to cart:", props.item)
  }

  function handleRemoveFromCart() {
    // Dispatch action to remove item from cart
    // (Implementation not provided in the original code)
    console.log("Remove from cart functionality not implemented yet.")
    dispatch(removeFromCart(props.item.id))
  }

  return (
    <div>
      <div className='flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-90 mt-10 ml-5 rounded-xl'>
        <div className='h-45'>
          <img src={props.item.image} alt={props.item.title} className='object-cover h-full w-full' />
        </div>
        <div>
          <h1 className='w-40 truncate mt-3 text-gray-700 font-bold text-lg'>{props.item.title}</h1>
        </div>
        <div className='flex items-center justify-center w-full mt-5'>
            <button onClick={cart.some((item) => {
              return (
                item.id === props.item.id
              )
            }) ? handleRemoveFromCart : handleAddToCart} className='bg-red-950 text-white border-2 rounded-lg font-bold p-4'>
              {
                cart.some((item) => {
                  return (
                    item.id === props.item.id
                  )
                }) ? "Remove from Cart" : "Add to Cart"
              }
            </button>
        </div>
      </div>
    </div>
  )
}

export default ProductTile