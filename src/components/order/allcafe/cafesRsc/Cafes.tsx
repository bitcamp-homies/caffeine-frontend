import axios from 'axios'
import React, { useEffect ,useState } from 'react'
import { Link } from 'react-router-dom'
import { CafeProps } from '../Interfaces'


const Cafes = () => {
   
  return (
    <div>
      <div className="grid w-auto grid-cols-1 gap-4 pt-5 text-xs md:grid-cols-2 md:text-sm">
        <Link to="../cafes/menu">
          <div className="flex h-20 flex-row items-center gap-3 bg-white md:h-28">
            <img
              className="h-20 w-20 rounded-full object-fill md:h-28 md:w-28"
              src="https://modo-phinf.pstatic.net/20191117_101/15739932413125YWd4_PNG/mosawUb5vX.png?type=f320_320"
            ></img>
            <div className="flex flex-col gap-1">
              <p>카페명</p>
              <p>대표메뉴</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Cafes
