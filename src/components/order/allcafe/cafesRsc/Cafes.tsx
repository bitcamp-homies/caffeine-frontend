import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import PropTypes from "prop-types";

const Cafes = () => {
  const [loading, setLoading] = useState(true) //로딩이 되는 순간의 state ㅅ설정 -> return에 loading 조건문 확인.
  const [cafes, setCafes] = useState<any[]>([]);
  const getCafes = async () => {
    const json = await (
      await fetch(`http://localhost:8080/cafe/listAllMybatis`)
    ).json()
    setCafes(json.data.cafes)
    setLoading(false)
  }

  useEffect(() => {
    getCafes()
  }, [])

  console.log(cafes)

  return (
    <div>
      {loading ? (
        <h1>Now Loading</h1>
      ) : (
        <div className="grid w-auto grid-cols-1 gap-4 pt-5 text-xs md:grid-cols-2 md:text-sm">
          {cafes.map((cafe) => (
          <Link to="../cafes/menu">
            <div className="flex h-20 flex-row items-center gap-3 bg-white md:h-28">
              <img
                className="h-20 w-20 rounded-full object-fill md:h-28 md:w-28"
                src="https://modo-phinf.pstatic.net/20191117_101/15739932413125YWd4_PNG/mosawUb5vX.png?type=f320_320"
              ></img>
              <div className="flex flex-col gap-1">
                <p>{cafe.cafe_name}</p>
                <p>{} </p>
              </div>
            </div>
          </Link>
          ))}
        </div>
      )}
    </div>
  )
}
Cafes.propTypes = {
  cafe_name:PropTypes.string.isRequired,
};

export default Cafes
