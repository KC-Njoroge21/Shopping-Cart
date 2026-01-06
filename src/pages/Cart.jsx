import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

  const [totalCart, setTotalCart] = React.useState(0)

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

  console.log(cart, totalCart)

  

  return (
    <div>
      {
         cart.length <= 0 ? (
    <div className='min-h-screen w-full flex justify-center items-center'>
      Your cart is empty.
    </div>
  ) : (
    <div className='min-h-screen w-full p-5'>
      <h1 className='text-2xl font-bold mb-5'>Your Cart</h1>

      <div className='grid md:grid-cols-3 gap-5'>
        {cart.map((item) => (
          <div key={item.id} className='border-2 border-red-900 rounded-xl p-4'>
            <img
              src={item.image}
              alt={item.title}
              className='object-cover h-40 w-full'
            />
            <h2 className='font-bold mt-3'>{item.title}</h2>
            <p className='text-red-950 font-bold'>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
      }
    </div>
  )
}

export default Cart