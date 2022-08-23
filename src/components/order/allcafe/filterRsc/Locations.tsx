import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CafeProps } from '../Interfaces'

const Locations = () => {
  const [locations, setLocations] = useState<CafeProps[]>([])
  
  useEffect(() => {
    axios
    .get<CafeProps[]>('http://localhost:8080/cafe/cafeDistLocation')
    .then((response: AxiosResponse) => {
      setLocations(response.data)
    })
  }, [])
  
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
