import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartTile from '../components/CartTile'

const Cart = () => {

  const [totalCart, setTotalCart] = React.useState(0)
  const [loading, setLoading] = React.useState(false)

  const { cart } = useSelector((state) => {
    return (
      state
    )
  })

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => {
      return (
        acc + curr.price
      )
    }, 0))
  }, [cart])

  if (loading) {
    return (
      <div className='h-screen w-full flex justify-center text-4xl font-semibold items-center'>
      Loading...
    </div>
    )
  }



  

  return (
    <div>
      {
         cart.length <= 0 ? (
    <div className='min-h-screen w-full text-4xl font-semibold flex justify-center items-center'>
      Your cart is empty.
    </div>
  ) : (
    <div className='min-h-screen w-full p-5'>
      <h1 className='text-2xl font-bold mb-5'>Your Cart</h1>

      <div className=' flex flex-col gap-6 '>
        {cart.map((item) => {
          return (
            <CartTile key={item.id} product={item} />
          )
        })}
      </div>
      <div className='mt-10 flex flex-col gap-2  items-end'>
        <h2 className='text-xl font-semibold'>Total Items: {cart.length}</h2>
        <h2 className='text-xl font-semibold'>Total: ${totalCart.toFixed(2)}</h2>
      </div>
    </div>
  )
      }
    </div>
  )
}

export default Cart