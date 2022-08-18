import React from 'react'
import GiftLeft from './GiftLeft'
import Join from './Join'

const Gift = () => {
  return (
    
    <div className="grid grid-col-1 md:flex flex-row-2 h-screen">
      <div className="w-full h-full font-semibold bg-white">
        <GiftLeft />
      </div>
      <div className="w-full h-full font-semibold bg-green-700">
        <Join />
      </div>
    </div>
  )
}

export default Gift
