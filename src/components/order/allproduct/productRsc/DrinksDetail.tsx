// @ts-nocheck
import React from 'react'
import { Link } from 'react-router-dom'

const DrinksDetail = ({ data }) => {
  return (
    <div className="grid w-auto grid-cols-1 gap-4 pt-5 text-xs md:grid-cols-2 md:text-sm">
      <Link to="./hot-coffees">
        <div className="flex h-20 flex-row items-center gap-3">
        {data.map((item) => (
          <div className="gap-3 bg-white md:h-28">
            <img
              className="h-20 w-20 rounded-full object-fill md:h-28 md:w-28"
              src="https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_wide_topcrop_630"
            ></img>
            <p>Hot Teas</p>
            </div>
            ))}
            </div>
      </Link>
    </div>
  )
}

export default DrinksDetail
