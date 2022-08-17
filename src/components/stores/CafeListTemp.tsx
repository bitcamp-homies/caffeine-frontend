//@type-nocheck

import axios from 'axios'
import React from 'react'

//point 잘받아오나 확인
const CafeListTemp = () => {
  const [data, setData] = React.useState([])

  axios
    .get('http://localhost:8080/cafe/listAllMybatis')
    .then((res) => console.log(res.data))

  return <div></div>
}

export default CafeListTemp
