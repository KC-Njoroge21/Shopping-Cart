import React from 'react'

const ProductTile = (props) => {
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
            <button className='bg-red-950 text-white border-2 rounded-lg font-bold p-4'>
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  )
}

export default ProductTile