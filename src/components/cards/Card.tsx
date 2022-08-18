import React from 'react'
import CardJoin from './CardJoin'
import CafeSwipe from './CardJoin'

const Card = () => {
  return (
    <div id="main" className="flex flex-col lg:flex-row">
      <div id="leftDiv" className="basis-1/2 border-r-[1px] bg-white pt-5">
        <div className="text-center text-xl font-bold text-green-800">
          Thumbs'
        </div>
        <div className="text-center text-xl font-bold text-green-800">
          Finger Snap !
        </div>
        <div className="bg-white">
          <img className="object-contain" src="https://media.istockphoto.com/vectors/finger-snapping-outline-hand-gesture-easy-concept-expression-vector-id1073423294?k=20&m=1073423294&s=612x612&w=0&h=SGYolMp4nqx2_-TMTqipAjuEaFMjHCnd0SO5NRpehuE="></img>
        </div>
        
      </div>
      <div id="rightDiv" className="basis-1/2">
        <CardJoin />
      </div>
    </div>
  )
}

export default Card
