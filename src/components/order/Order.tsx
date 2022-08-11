import React from 'react'
import { useNavigate } from 'react-router-dom'

const Order = () => {
  let navigate = useNavigate()

  return (
    <div
      id="orderNav"
      className="
          sticky flex-row bg-gray-100 border-[1px] border-gray-300
          md:block md:px-6 md:py-2 lg:px-10 lg:py-3
    "
    >
      <ul className="ml-[5.5rem] list-none self-center">
        <li className="mr-7 inline-block text-sm">
          <button onClick={() => { navigate("/menu")}}>All product</button>
        </li>
        <li className="mr-7 inline-block text-sm">
          <button>Featured</button>
        </li>
        <li className="mr-7 inline-block text-sm">
          <button>Previous Orders</button>
        </li>
        <li className="mr-7 inline-block text-sm">
          <button>Favorite Products</button>
        </li>
      </ul>
    </div>
  )
}

export default Order
