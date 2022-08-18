import React from 'react'

const PointLeft = () => {
  return (
    <div className="text-center font-bold text-green-800">
      <div className="pt-16">THUMBS!</div>
      <div>FINGER SNAP</div>
      <div className="pt-10">
        <img className="mx-auto h-60 sm:h-60 md:h-80 lg:h-96" src={`${process.env.PUBLIC_URL}/img/cardIllust.png`} />
      </div>
    </div>
  )
}

export default PointLeft
