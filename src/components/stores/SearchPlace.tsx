//@ts-nocheck

import React, { useState } from 'react';
import CafeList from './CafeList';
import MapContainer from './MapContainer';
import axios from 'axios';

const SearchPlace = (props) => {
const [inputText, setInputText] = useState("");
const [data, setData] = React.useState([]);

//데이터 로딩
React.useEffect(
  () => {
    axios.get(`http://localhost:8080/cafe/listAllMybatis`)
    .then(
      (res) => {
        setData(res.data);
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    )
  }, [])

const handleSubmit = (event) => {
  event.preventDefault();
  props.setPlace(inputText);
  console.log(props.place);
  setInputText("");
};

const onChange = (event) => {
  setInputText(event.currentTarget.value);
}

const filterdData = data.filter((data) => {
  return data.cafe_name.toLowerCase().includes(inputText.toLowerCase());
});

  return (
      <div className='lg:flex lg:flex-col lg:basis-2/5 basis-full h-128'>
        <form className="pr-5 pl-14 inputForm " onSubmit={handleSubmit}>
          <div className='text-center lg:text-left'>
            <div className='border-b-2 border-gray-400 inline-block my-6 lg:w-64 w-3/4'>
              <input
                placeholder="Find a store"
                onChange={onChange}
                value={inputText}
                className="outline-0 lg:w-56 w-4/5"
              />
              <button><img className='w-4 h-4 mr-4' src='img/search_icon.png' alt='search_icon'/></button>
            </div>
            <button className='ml-4 border-green-800 border-2 rounded-full text-green-800 w-16 text-center h-8' type="submit">Filter</button>
          </div>
        </form>

          <CafeList data={filterdData} />
      </div>
  );
};

export default SearchPlace;