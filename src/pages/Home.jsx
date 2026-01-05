import React, { useEffect, useState } from 'react'
import ProductTile from '../components/ProductTile'

const Home = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchListOfProducts = async () => {
    setLoading(true)
    try {
      const response = await fetch(`https://fakestoreapi.com/products`)
      const data = await response.json()
      console.log(data)
      setProducts(data)
      setLoading(false)
    } catch (e) {
      console.log(e)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchListOfProducts()
  }, [])

  if (loading) {
    <div className='min-h-screen w-full flex justify-center items-center'>
      Loading...
    </div>
  }

  return (
    <div className='min-h-[80vh] grid sm:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3 '>
      {
        products.length <= 0 ? null : products.map((item, index) => {
          return (
            <ProductTile key={index} item={item} />
          )
        })
      }
    </div>
  )
}

export default Home