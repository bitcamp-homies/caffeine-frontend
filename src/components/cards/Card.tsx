import React from 'react'
import CardIntro from './CardIntro'
import CardJoin from './CardJoin'
import CafeSwipe from './CardJoin'

const Card = () => {
  return (
    <div className="grid grid-col-1 md:flex flex-row-2 h-screen">
      <div className="w-full h-full font-semibold bg-white">
        <CardIntro />
      </div>
      <div className="w-full h-full font-semibold bg-green-700">
        <CardJoin />
      </div>
    </div>
  )
}

export default Card
