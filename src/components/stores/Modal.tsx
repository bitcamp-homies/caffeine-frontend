//@ts-nocheck
import React from "react"
const Modal= () => {

  return(
    <div className='h-screen w-full fixed left-0 top-0 flex justify-center bg-black bg-opacity-70 text-center'>
        <div className='bg-white rounded w-10/12 md:w-1/3'>
        <div className='text-gray-500 text-sm px-4 py-8'>
          안녕하세요
        </div>
        <button className='closeBtn'>Close</button>
        </div>
      </div>
  )
}

export default Modal

