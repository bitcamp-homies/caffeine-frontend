//@ts-nocheck

import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'

//point 잘받아오나 확인
const CafeListTemp = () => {
  const  userLocation = useSelector( (state) => {return state.locationReducer} )
  console.log(userLocation);
  const [data, setData] = React.useState([])

  axios
    .get('https://api.staysane.me/cafe/listAllMybatis')
    .then((res) => {console.log(res.data)})

  return <div>
    
  </div>
}

export default CafeListTemp
