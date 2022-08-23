// @ts-nocheck
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CafeProps } from '../Interfaces'
import { cafeDistLocation } from 'store/api'
const Locations = ({data}) => {
  const [locations, setLocations] = useState<CafeProps[]>([])
  useEffect(()=>{
    cafeDistLocation()
      .then(res => setLocations(res.data))
  },[])  


  return (
    <div>
      {locations.map((post) => (
        <div className="flex flex-col gap-3 pt-3 text-sm font-semibold text-gray-400">
          <div key={post.cafe_id}>
            <Link to={`../cafes/${post.address2}`}>{post.address2}</Link>
          </div>
        </div>
      ))} 
    </div>
  )
}

export default Locations
