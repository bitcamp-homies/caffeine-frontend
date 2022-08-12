import { useState } from 'react';
import CafeList from './CafeList';

type setPlaceType = {
  setPlace : any
}

const SearchPlace = ({setPlace}: setPlaceType) => {
const [inputText, setInputText] = useState("");

const handleSubmit = (event:any) => {
  event.preventDefault();
  setPlace(inputText);
  setInputText("");
};

const onChange = (event:any) => {
  setInputText(event.target.value);
};

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