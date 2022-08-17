//@ts-nocheck

import { useState } from 'react';
import { useSelector } from 'react-redux';
import CafeList from './CafeList';


const SearchPlace = ({setPlace}) => {
const [inputText, setInputText] = useState("");

const handleSubmit = (event) => {
  event.preventDefault();
  setPlace(inputText);
  setInputText("");
};

const onChange = (event) => {
  setInputText(event.target.value);
};

const cafe = useSelector ( (state) => {
  return state.mainMarkerReducer;
})

  return (
      <div className='flex flex-col w-96 h-128'>
        <form className="px-5 inputForm " onSubmit={handleSubmit}>
          <div className='border-b-2 border-gray-400 inline-block mb-6'>
            <input
              placeholder="Find a store"
              onChange={onChange}
              value={inputText}
              className="outline-0 w-56"
            />
            <button><img className='w-4 h-4 mr-4' src='img/search_icon.png' alt='search_icon'/></button>
          </div>
          <button className='ml-4 border-green-800 border-2 rounded-full text-green-800 w-16 text-center h-8' type="submit">Filter</button>
        </form>
        <CafeList />
      </div>
  );
};

export default SearchPlace;