// @ts-nocheck
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CafesDetailContainer from '../CafesDetailContainer'
import { CafeProps } from '../Interfaces'
import { listAllMybatis } from 'store/api'
import { useQuery } from 'react-query'
const Cafes = ({data1}) => {
  const { data, status, isFetching, isLoading, isSuccess } = useQuery(
    'listAll',
    listAllMybatis,
  )
    console.log(data)
  return (
    <div className="grid w-auto grid-cols-1 gap-4 pt-5 text-xs md:grid-cols-2 md:text-sm">
      {status && data1 === undefined ? data?.data.map((post, idx) => (
        <div key={idx}>
          <Link to={`../cafes/menu/${post.cafe_id}`}>
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
      )) : data1.map((post,idx) => (
        <div key={idx}>
          <Link to={`../cafes/menu/${post.cafe_id}`}>
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