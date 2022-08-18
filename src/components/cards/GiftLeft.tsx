import React from 'react'

const GiftLeft = () => {
  return (
    <div className="text-center font-bold text-green-800">
      <div className="pt-16">THUMBS!</div>
      <div>GIFT CARD</div>
      <div className="pt-10">
        <img className="mx-auto h-60 sm:h-60 md:h-80 lg:h-96" src={`${process.env.PUBLIC_URL}/img/cardslide.gif`} />
      </div>
    </div>
  )
}

export default GiftLeft
