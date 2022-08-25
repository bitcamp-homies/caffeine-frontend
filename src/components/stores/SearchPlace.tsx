//@ts-nocheck

import React, { useEffect, useState } from 'react'
import CafeList from './CafeList'

const SearchPlace = ({ setPlace, cafeList, setHoverCafe, setCafeList, setShowFilter, filterOptions }) => {
  const [inputText, setInputText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setPlace(inputText)
    setInputText('')
  }

  const onChange = (event) => {
    setInputText(event.currentTarget.value)
  }

  const filterData = cafeList.filter((data) => {
    return data.cafe_name.toLowerCase().includes(inputText.toLowerCase())
  })

  const getFilterNum = () => {
    var num = 0;
    
    for(var i in filterOptions){
      if(filterOptions[i]){
        num++;
      }
    }

    return num;
  }

  

  return (
    <div className="h-128 basis-full lg:flex lg:basis-2/5 lg:flex-col">
      <form className="inputForm pr-5 pl-14 " onSubmit={handleSubmit}>
        <div className="text-center lg:text-left">
          <div className="my-6 inline-block w-3/4 border-b-2 border-gray-400 lg:w-64 xl:w-96">
            <input
              placeholder="Find a store"
              onChange={onChange}
              value={inputText}
              className="w-4/5 outline-0 lg:w-56 xl:w-[22rem]"
            />
            <button>
              <img
                className="mr-4 h-4 w-4"
                src="img/search_icon.png"
                alt="search_icon"
              />
            </button>
          </div>
          <button onClick={() => setShowFilter(true)}
            className="ml-4 h-8 w-20 rounded-full border-2 border-[#9F2042] text-center text-[#9F2042] hover:bg-[#F8E5EE]"
            type="submit"
          >
            Filter {getFilterNum() > 0 && ('('+getFilterNum()+')')}
          </button>
        </div>
      </form>
      <CafeList
        cafeList={cafeList}
        setHoverCafe={setHoverCafe}
        filterData = {filterData}
      />
    </div>
  )
}

export default SearchPlace
