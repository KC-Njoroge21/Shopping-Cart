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
    <div>Cart</div>
  )
}

export default Cart