import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CafeProps } from '../Interfaces'

const Cafes = () => {
  const [cafesData, setCafesData] = useState<CafeProps[]>([])
 
  useEffect(() => {
    axios
      .get<CafeProps[]>('http://localhost:8080/cafe/listAllMybatis')
      .then((response: AxiosResponse) => {
        console.log(response)
        setCafesData(response.data)
      })
  }, [])
 
  return (
    <div className="grid w-auto grid-cols-1 gap-4 pt-5 text-xs md:grid-cols-2 md:text-sm">
      {cafesData.map((post, idx) => (
        <div key={idx}>
          <Link to="../cafes/menu">
            <div className="flex h-20 flex-row items-center gap-3 bg-white md:h-28">
              <img
                className="h-20 w-20 rounded-full object-fill md:h-28 md:w-28"
                src={`https://storage.googleapis.com/bitcamp-caffeine.appspot.com${post.file_path}${post.img_file.split(',').at(-1)}`}
              ></img>
              <div className="flex flex-col gap-1">
                <p>{post.cafe_name}</p>
                <p>대표메뉴</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Cafes
