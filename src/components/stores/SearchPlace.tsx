//@ts-nocheck

import { useState } from 'react'
import CafeList from './CafeList'

const SearchPlace = ({ setPlace, cafeList, setHoverCafe}) => {
  const [inputText, setInputText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setPlace(inputText)
    setInputText('')
  }

  const onChange = (event) => {
    setInputText(event.target.value)
  }

  return (
    <div className="h-128 flex w-96 flex-col">
      <form className="inputForm px-5 " onSubmit={handleSubmit}>
        <div className="mb-6 inline-block border-b-2 border-gray-400">
          <input
            placeholder="Find a store"
            onChange={onChange}
            value={inputText}
            className="w-56 outline-0"
          />
          <button>
            <img
              className="mr-4 h-4 w-4"
              src="img/search_icon.png"
              alt="search_icon"
            />
          </button>
        </div>
        <button
          className="ml-4 h-8 w-16 rounded-full border-2 border-green-800 text-center text-green-800"
          type="submit"
        >
          Filter
        </button>
      </form>
      <CafeList cafeList={cafeList} setHoverCafe={setHoverCafe}/>
    </div>
  )
}

export default SearchPlace
